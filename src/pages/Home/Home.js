import React, { useState, useEffect, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { ProductList } from '../../components/ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import { AuthenticatedContext } from '../../components/App/App';
import './Home.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Home = props => {
    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [recentBids, setRecentBids] = useState([]);
    const [open, setOpen] = useState(false);
    const authenticated = useContext(AuthenticatedContext);
    
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const retrieveFeaturedProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=featured`)
        .then(data => {
            setFeatured(data);
        })
    }

    const retrieveLatestCategory = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=latest`)
        .then(data => {
            setLatest(data);
        })
    }

    const retrievePopularProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=popular`)
        .then(data => {
            setPopular(data);
        })
    }

    const retrieveTrendingProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=trending`)
        .then(data => {
            setTrending(data);
        })
    }

    const retrieveRecentBids = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=recent`)
        .then(data => {
            setRecentBids(data);
        })
    }
    

    const countDownDate = new Date("Jan 24, 2022 16:55:25").getTime();
    const countDownDate2 = new Date("Feb 22, 2022 15:58:25").getTime();
    const countDownDate3 = new Date("Mar 29, 2022 20:59:25").getTime();

    // Dummy products to test functionality
    const product = { category_name: 'HP Spectre x360', 
                      initial_price: 1840, 
                      current_ask: 0, 
                      buy_now: 2500, 
                      duration: countDownDate,
                      id: 1
                    };
                    
    const product2 = { category_name: 'iPhone 11', 
                       initial_price: 670, 
                       current_ask:845, 
                       buy_now: 1600, 
                       duration: countDownDate2,
                       id: 2
                    };

    const product3 = { category_name: 'G-Shock', 
                       initial_price: 70, 
                       current_ask:0, 
                       buy_now: 200, 
                       duration: countDownDate3,
                       id: 3
                     };

    const dummyProducts =  [product, product2, product3];

    useEffect(()=> {
        retrieveFeaturedProduct();
        retrievePopularProduct();
        retrieveTrendingProduct();
        retrieveLatestCategory();
        retrieveRecentBids();
        },
    []);
    // Hero can be component
    return(
        <div className="home-container">
            <div className="jumbo">
                <div className="jumbo-overlay">
                    <Snackbar 
                        open={open} 
                        autoHideDuration={4000} 
                        onClose={handleClose}
                    >
                        <Alert 
                            onClose={handleClose} 
                            severity="info" 
                            sx={{ width: '100%' }}
                        >
                            This is currently unavailable!
                        </Alert>
                    </Snackbar>
                    <div>
                        <h1 className="jumbo-header">
                            Shop and sell at your own pace
                        </h1>
                        <div className="greeting-container">
                            <p className="jumbo-info">
                                {`If you are looking for a platform to 
                                resell your product in a relatively free market, or
                                trying to find a bargain on one then look no further.`
                                }
                            </p>
                            <div className="button-container">
                                <Link to={!authenticated ? 
                                            '/login' :
                                            '/browse'
                                         }
                                >
                                    <button className="button">Get Started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductList heading='Dummy Products' products={dummyProducts}/>
            <ProductList heading='Featured Product' products={featured}/>
            <ProductList heading='Most Popular' products={popular}/>
            <ProductList heading='Trending' products={trending}/>

            <div className="banner-container">
                <div className="collection-text">
                    Cannot find the category you are trying to list? Just add it</div>
                <div>
                    <button className="button" onClick={handleClick}>
                        Add Category
                    </button>
                </div>
            </div>
            
            <ProductList heading='Latest Category' products={latest}/>
            <ProductList heading='Recent Bids' products={recentBids}/>
        </div>
    )
}