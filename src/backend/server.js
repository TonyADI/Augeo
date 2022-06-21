const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const app = express();
const accessTokenSecret = 'c7ba8766ee42ae68303d1e3cff5ea649';

const connection = mysql.createConnection({
    host: 'augeo-db1.cpkxs17rmhai.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '',
    database: 'database',
    port: 3306,
    database: 'AUGEO'
  });

connection.connect(error => {
    if(error) throw error;
    console.log('Connected');
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// parse cookies from request
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'https://tonyadi.com'}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://tonyadi.com');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});  

// Initialize the req.user variable
app.use((req, res, next) => {
    const accessToken = req.cookies['AccessToken'];
    if(accessToken){
        try{
            const verifiedToken = jwt.verify(accessToken, accessTokenSecret);
            req.user = verifiedToken.id;
        }
        catch(error){
            console.log(error);
            // Assuming jwt has expired
            res.cookie('AccessToken', '', {secure:true, sameSite: 'None'});
        }

    }
    else{
        req.user = '';
    }
    next();
});

// Middleware that checks if there is an authenticated user
const checkAuth = (req, res, next) => {
    if(req.user){
        next();
    }
    else{
        console.log('User is not authenticated');
        res.sendStatus(401);// or redirect to login page?
    }
}

// Check if user is already logged in
app.get('/verify-authentication', checkAuth, (req, res) => {
    console.log('User is already logged in')
    const user = {id: req.user};
    res.status(200).json(user);
})

                                                            // USERS ROUTE

// Register, create user record
app.post('/users', (req, res) => {
    if(!req.user){
        const validEmail = req.body.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const validPassword = req.body.password.length >= 6;
        const validFirstName = req.body.first_name.match(/^(?:[A-Za-z]+|)$/);
        const validLastName = req.body.last_name.match(/^(?:[A-Za-z]+|)$/);

        if(validEmail && validPassword && validFirstName && validLastName){
            const sha256 = crypto.createHash('sha256');
            const securePassword = sha256.update(req.body.password).digest('base64');
            connection.query(`INSERT INTO User (email, first_name, last_name, password) 
            VALUES (?, ?, ?, ?);`, 
            [req.body.email, req.body.first_name, req.body.last_name, securePassword], 
            (error, result) => {
                if(error){
                    if(error.errno === 1062){
                        res.sendStatus(409);
                    }
                    throw error;
                }
                else{
                    console.log('Account Created');
                    const accessToken = jwt.sign({id: result.insertId}, accessTokenSecret, {expiresIn: '24h'});
                    res.cookie('AccessToken', accessToken, {secure:true, sameSite: 'None'});
                    res.sendStatus(201);
                }
            });
        }
        else{
            console.log('Data provided for registration was invalid');
            res.sendStatus(403);
        }
    }
    else{
        console.log('User is already logged in');
        res.sendStatus(403);
    }
})


// Login, create a new session with the specified access token.
app.post('/users/session', (req, res) => {
    if(!req.user){
        const validEmail = req.body.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const validPassword = req.body.password.length >= 6;
        if(validEmail && validPassword){
            const sha256 = crypto.createHash('sha256');
            const securePassword = sha256.update(req.body.password).digest('base64');
            connection.query("SELECT id FROM User WHERE email = ? AND password = ?;", [req.body.email, securePassword], 
            (error, result) => {
                if (error) throw error;
                if(result.length){
                    console.log('Account found, password verification successful'); 
                    const accessToken = jwt.sign({id: result[0].id}, accessTokenSecret, {expiresIn: '24h'});
                    res.cookie('AccessToken', accessToken, {secure:true, sameSite: 'None'});
                    res.sendStatus(204);
                }
                else{
                    console.log('Credentials do not exist.');
                    res.sendStatus(401);
                }
            })
        }
        else{
            console.log('Data provided for login was invalid');
            res.sendStatus(403);
        }
    }
    else{
        console.log('User is already logged in');
        res.sendStatus(403);
    }
})

// Verify password for the current authenticated user
app.post('/users/password', checkAuth, (req, res) => {
    const sha256 = crypto.createHash('sha256');
    const securePassword = sha256.update(req.body.password).digest('base64');
        connection.query("SELECT id FROM User WHERE id = ? AND email = ? AND password = ?;", [req.user, req.body.email, securePassword], 
        (error, result) => {
            if (error) throw error;
            if(result.length){
                console.log('Account found, password verification successful');
                res.sendStatus(204);
            }
            else{
                console.log('Credentials do not exist.');
                res.sendStatus(401);
            }
        })
})
    
// Fetch account personal details for the authenticated user
app.get('/users/details', checkAuth, (req, res) => {
    connection.query(`SELECT email, first_name, last_name FROM User where id = ?;`, 
    [req.user], (error, result) => {
        if(error) throw error;
        console.log('Account details retreived');
        res.status(200).send(result[0]);
    })
});

// Fetch products associated with the authenticated user
app.get('/users/products', checkAuth, (req, res) => {
    switch(req.query.type){
        case 'bid':           
            // Get bids for this account
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND Product.id IN 
            (SELECT DISTINCT Bid.product_id FROM Product, 
                Bid WHERE Bid.user_id = ?) ORDER BY sold, duration;`, [req.user],
                (error, result) => {
                    if (error) throw error;
                    if(result.length){
                        console.log('Product records successfully retrieved.');
                    }
                    res.status(200).send(result);
                })
            break;
        case 'listing':
            // Get the product listings for this account
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND user_id = ? 
            ORDER BY id desc, duration;`, [req.user],
             (error, result) => {
                if (error) throw error;
                if(result.length){
                    console.log('Product records successfully retrieved.');
                }
                res.status(200).send(result);
            })
            break;
        case 'purchase':
            // Get purchases for this account
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND Product.id IN 
            (SELECT product_id FROM Sale WHERE user_id= ?);`, 
            [req.user], (error, result) => {
                if (error) throw error;
                if(result.length){
                    console.log('Product records successfully retrieved.');
                }
                res.status(200).send(result);
            })
            break;
        default:
            console.log(`Supplied query for GET /users/product route does not exist`);
    }
    
})

// Modify personal details of the current authenticated user.
app.put('/users/details', checkAuth, (req, res) => {
    connection.query(`UPDATE User SET first_name = ?, last_name = ? WHERE User.id = ?`, 
        [req.body.first_name, req.body.last_name, req.user], 
        (error, result) => {
            if (error) throw error;
            if(result.changedRows){
                console.log('Personal details modified.')
                res.sendStatus(204);
            }
            else{
                res.sendStatus(403);
            }   
        });
});

// Update the password of the current authenticated user.
app.put('/users/password', checkAuth, (req, res) => {
    if(req.body.password.length >= 6 && req.body.new_password.length >= 6){
        const firstHash = crypto.createHash('sha256');
        const securePassword = firstHash.update(req.body.password).digest('base64');
        const secondHash = crypto.createHash('sha256');
        const newSecurePassword = secondHash.update(req.body.new_password).digest('base64');
        connection.query(`UPDATE USER SET password = ? WHERE id = ?
        AND password = ?;`, [newSecurePassword, req.user, securePassword],
        (error, result) => {
            if (error) throw error;
            if(result.changedRows){
                console.log('Password successfully updated');
                res.sendStatus(204);
            }
            else{
                res.sendStatus(403);
            }   
        })
    }
    else{
        console.log('Password provided was not valid');
        res.sendStatus(403);
    }
});

// Logout the user
app.delete('/users/session', checkAuth, (req, res) => {
    // Current fix as clearCookie was not working
    res.cookie('AccessToken', '', {secure:true, sameSite: 'None'});
    console.log('Session has been terminated.')
    res.sendStatus(204);
})
                                                                // PRODUCTS ROUTE

// Create product record, needs to be modified
app.post('/products', checkAuth, (req, res) => {
    // Duration needs to be validated
    if((req.body.initial_ask < req.body.buy_now) && (req.body.buy_now > 0)){
        connection.query(`INSERT INTO Product (category_name, user_id, 
            buy_now, initial_price, duration) VALUES (?, ?, 
        ?, ?, ?);`, [req.body.category, req.user, req.body.buy_now, 
            req.body.initial_ask, req.body.duration], 
        (error, result) => {
            if (error) throw error;
            console.log('Product record created');
            res.sendStatus(201);
        })
    }
    else{
        console.log('Values provided for the product are not valid.')
        res.sendStatus(403)
    }
})

/* Updates product records as well as creates purchase and bid
   records when timer runs out*/
app.post('/products/:productId', (req, res, next) => {
    if(req.query.action === 'timeout'){
        // Set sold to true and create a sale record when product times out
        connection.query(`UPDATE Product SET sold = true WHERE id = ? AND duration 
        <= (SELECT current_timestamp()) 
        AND sold = false;`, [req.params.productId], (error, result) => {
            if (error) throw error;
            if(result.changedRows){
                console.log('Product record successfully updated');
                connection.query(`INSERT INTO Sale (user_id, product_id) VALUES 
                ( (SELECT user_id FROM Bid WHERE product_id = ? 
                ORDER BY value DESC LIMIT 1), ?);`, [req.params.productId, 
                    req.params.productId], (error, result) => {
                    if (error) throw error;
                    console.log('Sale record successfully created.')
                })
                res.sendStatus(201);
            }
            else{
                res.sendStatus(409);
            }   
        })
    }
    next();
})


// Updates product records as well as creates purchase and bid records
app.post('/products/:productId', checkAuth, (req, res) => {
    switch(req.query.action){
        case 'bid':
            // Sets the current ask for product and creates bid record
            connection.query(`UPDATE Product SET current_ask = ? WHERE id = ? AND 
            ? > current_ask AND ? > initial_price AND ? < buy_now AND ? <> user_id;`, 
            [req.body.current_ask, req.params.productId, 
                req.body.current_ask, req.body.current_ask, req.body.current_ask, 
                req.user], (error, result) => {
                if (error) throw error;
                if(result.changedRows){
                    console.log('Product record successfully updated.');
                    // Create bid record for the authenticated user
                    connection.query(`INSERT INTO Bid (value, user_id, product_id) VALUES (?, 
                    ?, ?);`, [req.body.current_ask, req.user, req.params.productId], 
                    (error, result) => {
                        if (error) throw error;
                        console.log('Bid record successfully created.');
                        // Check if there is a previous bid record for the authenticated user on the specific product
                        connection.query(`SELECT * FROM Bid where product_id = ? 
                        and user_id = ?;`, 
                        [req.params.productId, req.user], (error, result) => {
                            if (error) throw error;
                            if(result.length > 1){
                                console.log('More than one bid record exists for the same product and user.')
                                // Delete previous bid record of the same product from the same user
                                connection.query(`DELETE FROM Bid where product_id = ? 
                                and user_id = ? order by id asc limit 1;`,
                                 [req.params.productId, req.user], (error, result) => {
                                    if (error) throw error;
                                    console.log('Previous bid record deleted');
                                })
                            }
                        })
                        
                    })
                    res.sendStatus(201);
                }
                else{
                    res.sendStatus(409);
                }   
            })
            break;
        case 'sell':
            // Sets the sold boolean to true and creates a sale record
            connection.query(`UPDATE Product SET sold = true, current_ask = ? 
                WHERE id = ? AND ? = buy_now AND sold = false AND ? <> user_id;`, 
                [req.body.current_ask, req.params.productId, req.body.current_ask, req.user], 
                (error, result) => {
                    if (error) throw error;
                    if(result.changedRows){
                        console.log('Product record successfully updated');
                        connection.query(`INSERT INTO Sale (user_id, product_id) 
                        VALUES (?, ?);`, 
                        [req.user, req.params.productId],
                        (error, result) => {
                            if (error) throw error;
                            console.log('Sale record successfully created');
                        })
                        res.sendStatus(201);
                    }
                    else{
                        res.sendStatus(409);
                    }   
                })
                break;
        default:
            console.log(`The query does not exist`);
    };
})

app.get('/products', (req, res) => {
    switch(req.query.sortBy){
        case 'popular':
            // Fetch product with the most sales
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND duration > 
            (select current_timestamp()) AND 
            sold = false AND user_id <> ? AND category_name = 
            (SELECT category_name from 
                (SELECT category_name, count(*) FROM Product
                WHERE sold = true group by category_name ORDER BY 2 desc LIMIT 1)
                as name) ORDER BY duration;`, [req.user],
            (error, result) => {
                if (error) throw error;
                if(result.length) console.log('Product records successfully retrieved.');
                res.status(200).send(result);
            })
            break;
        case 'trending':
            // Fetch product records with the most bids in the latest 30 bid records.
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND duration > 
            (select current_timestamp()) AND 
            sold = false AND user_id <> ? AND category_name = (SELECT category_name from
            (SELECT count(Product.category_name), Product.category_name from Product 
            inner join 
            (SELECT * FROM Bid order by Bid.id desc limit 30) as Bid where Bid.product_id 
            = Product.id group by Product.category_name order by 1 desc limit 1)
            as category_name);`, [req.user],
            (error, result) => {
                if (error) throw error;
                if(result.length) console.log('Product records successfully retrieved.');
                res.status(200).send(result);
            })
            break;
        case 'recent':
            // Fetch 15 products that were recently bid on
            connection.query(`SELECT Product.*, Category.product_img FROM Category, 
            Product inner join Bid on Bid.product_id = Product.id WHERE Category.name = 
            Product.category_name AND Product.duration > (select current_timestamp()) AND 
            Product.sold = false AND Product.user_id <> ? group by Bid.product_id 
            order by MAX(Bid.id) desc limit 15;`, 
            [req.user], (error, result) => {
                        if (error) throw error;
                        if(result.length) console.log('Product records successfully retrieved.');
                        res.status(200).send(result);
                    })
            break;
        case 'featured':
            // Fetch a random product
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND duration > (select 
                current_timestamp()) AND 
            sold = false AND user_id <> ? AND category_name = 
            (SELECT name from (SELECT * FROM Category ORDER BY RAND() LIMIT 1) 
            as name) ORDER BY duration;`, [req.user], // cant you just select name from category?
            (error, result) => {
                if (error) throw error;
                if(result.length) console.log('Product records successfully retrieved.');
                res.status(200).send(result);
            })
            break;
        case 'latest':
            // Fetch the products from the newest category
            connection.query(`SELECT Product.*, Category.product_img FROM Product, 
            Category WHERE Category.name = Product.category_name AND duration > (select current_timestamp()) AND 
            sold = false AND user_id <> ? AND category_name = (SELECT name from 
                (SELECT * FROM Category ORDER BY id desc LIMIT 1) as name) ORDER BY duration;`, [req.user],
                (error, result) => {
                    if (error) throw error;
                    if(result.length) console.log('Product records successfully retrieved.');
                    res.status(200).send(result);
                })
            break;
        default:
            console.log('Supplied query does not exist');
    }
})


                                                                // CATEGORIES ROUTE
// Retrieve products depending on the specified category
app.get('/categories/:category/products', (req, res) => {
    const categoryName = decodeURI(req.params.category);
    connection.query(`SELECT Product.*, Category.product_img FROM Product, 
    Category WHERE Category.name = ? AND category_name = ? AND duration > 
    (select current_timestamp()) AND 
    sold = false AND user_id <> ? ORDER BY duration;`, [categoryName, categoryName, req.user],
    (error, result) => {
        if (error) throw error;
        if(result.length) console.log('Product records successfully retrieved.');
        res.status(200).send(result);
    })

})
// Retrieve categories
app.get('/categories', (req, res) => {
    connection.query(`SELECT * FROM Category`, (error, result) => {
        if (error) throw error;
        if(result.length) console.log('Category records successfully retrieved.');
        res.status(200).send(result);
    })
})

app.listen(process.env.PORT || 3000);
