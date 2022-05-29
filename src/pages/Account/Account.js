import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ProductList } from '../../components/ProductList/ProductList';
import { deleteData, retrieveData, updateData, createData } from '../../utilities/projectAPI';
import './Account.css';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Account = props => {
    const [passwordDisplay, setPasswordDisplay] = useState('none');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [personalDetails, setPersonalDetails] = useState({});
    const [purchases, setPurchases] = useState([]);
    const [listings, setListings] = useState([]);
    const [bids, setBids] = useState([]);
    const [passwordType, setPasswordType] = useState('password');
    const [iconType, setIconType] = useState('fa fa-eye-slash')
    const [errorMessage, setErrorMessage] = useState('');
    const [changesOpen, setChangesOpen] = useState(false);
    const [changesFailureOpen, setChangesFailureOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleChangesClose = () => {
        setChangesOpen(false);
    };

    const handleChangesFailureClose = () => {
        setChangesFailureOpen(false);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };

    const signOut = () => {
        deleteData(`https://tonyadi.loca.lt/users/session`).then(value => {
            if(value){
                props.setAuthenticated(false);
            }
            else{
                console.log('Logout was unsuccessful.');
            }
        })
    }

    // Not currently in use
    /*
    const deleteAccount = e => { 
        const data = {email: personalDetails.email, password: password};
        deleteData(`https://tonyadi.loca.lt/users/${props.userId}`, data).then(value => {
            if(value){
                signOut();
            }
            else{
                console.log('There was an error with the request');
                alert('Something went wrong. Please try again.');
            }
        });
        e.preventDefault();
    }
    */

    const togglePassword = () => {
        const newPasswordType = (passwordType === 'password') ? 'text' : 'password';
        const newIconType = (iconType === 'fa fa-eye-slash') ? 'fa fa-eye' : 'fa fa-eye-slash';
        setPasswordType(newPasswordType);
        setIconType(newIconType);
      }

                                                                        // Manage Account

    const modifyDetails = () => {;
        if(personalDetails.first_name && personalDetails.last_name){
            if(personalDetails.first_name.match(/^(?:[A-Za-z]+|)$/) && 
            personalDetails.last_name.match(/^(?:[A-Za-z]+|)$/)){
                updateData('https://tonyadi.loca.lt/users/details', personalDetails).then(value => {
                    if(value){
                        setChangesOpen(true);
                        setErrorMessage('');
                    }
                    else{
                        setChangesFailureOpen(true);
                    }
                });
            }
            else{
                setErrorMessage('First name and last name can only be letters.');
            }
        }
        else{
            setErrorMessage('First name and last name cannot be empty.');
        }
    }
    const updatePassword = () => {
        const data = {  email: personalDetails.email, 
                        password: password, 
                        new_password: newPassword
                     };
        if(newPassword.length >= 6){
            updateData(`https://tonyadi.loca.lt/users/password`, data).then(value => {
                if(value){
                    setChangesOpen(true);
                    setPassword(newPassword);
                    setPasswordDisplay('none');
                }
                else{
                    setChangesFailureOpen(true);
                    console.log('Password was not updated.');
                }
            })
        }
        else{
            setInvalidPassword(true);
        }
    }

    const verifyPassword = () => {
        const data = {email: personalDetails.email, password: password};
        createData(`https://tonyadi.loca.lt/users/password`, data).then(value => {
            if(value){
                setAuthenticated(true);
                setInvalidPassword(false);
            }
            else{
                console.log('Wrong password provided.')
                setInvalidPassword(true);
            }
        })
    }

    const manageAccount = e => {
        if(authenticated){
            updatePassword();
        }
        else{
            verifyPassword();
        }
        e.preventDefault();
    }


                                                                        // Retrieve Data

    const retrieveDetails = () => {
        retrieveData(`https://tonyadi.loca.lt/users/details`).then(data => {
            if(data){
                setPersonalDetails(data);
            }
        });
    }

    const retrieveListings = () => {
        retrieveData(`https://tonyadi.loca.lt/users/products?type=listing`).then(data => {
            setListings(data);
        })
    }

    const retrieveBids = () => {
        retrieveData(`https://tonyadi.loca.lt/users/products?type=bid`).then(data => {
            setBids(data);
        })
    }

    const retrievePurchases = () => {
        retrieveData(`https://tonyadi.loca.lt/users/products?type=purchase`).then(data => {
            setPurchases(data);
        })
    }
                                                                                // HANDLE FUNCTIONS

    const handleChange = e => {
        switch(e.target.name){
            case 'password':
                if(authenticated){
                    setNewPassword(e.target.value);
                }
                else{
                    setPassword(e.target.value);
                }
                if(e.target.value === ''){
                    setInvalidPassword(false);
                }
                break;
            case 'first-name':
                setPersonalDetails({...personalDetails, first_name: e.target.value})
                break;
            case 'last-name':
                setPersonalDetails({...personalDetails, last_name: e.target.value})
                break;
            case 'address-line':
                setPersonalDetails({...personalDetails, address_line: e.target.value});
                break;
            case 'city':
                setPersonalDetails({...personalDetails, city: e.target.value});
                break;
            case 'province':
                setPersonalDetails({...personalDetails, province: e.target.value});
                break;
            case 'postal-code':
                setPersonalDetails({...personalDetails, postal_code: e.target.value});
                break;
            case 'country':
                setPersonalDetails({...personalDetails, country: e.target.value});
                break;
            default:
                console.log('The selected input does not exist.');
        }
    }

    const handleDisplay  = e => {
        const passwordModal = document.getElementById('password-modal');
        if(e.target === passwordModal){
            setPasswordDisplay('none');
        }
    }

    const handlePassword = () => {
        setNewPassword('');
        setPassword('')
        setInvalidPassword(false);
        setPasswordDisplay('block');
    }

    useEffect(() => {
        retrieveDetails();
        retrieveListings();
        retrieveBids();
        retrievePurchases();
        document.addEventListener('mousedown', handleDisplay)
    }, []);

    // Unused for the time being
    
    const handleDelete = () => {
        /*
        if(authenticated){
            const bool = window.confirm('You are about to delete your account. Proceed?');
            if(bool){
                deleteAccount();
            }
        }
        else{
            setPasswordDisplay('block');
        }
        */
       setDeleteOpen(true);
    }
    
    // After 5 minutes clear users authentication
    useEffect(() => {
        var authenticationTimeout = setTimeout(() => {
            setAuthenticated(false);
            setPassword('');
        }, 300000);
        return () => clearTimeout(authenticationTimeout);
    }, [authenticated]);
    // Make alerts just one
    // make textfield into array?
    // make product list into component
    // password modal a component
    return (
        <div className="account-container">
            <Snackbar 
                open={changesOpen} 
                autoHideDuration={4000} 
                onClose={handleChangesClose}
            >
                <Alert 
                    onClose={handleChangesClose} 
                    severity="success" 
                    sx={{ width: '100%' }}
                >
                    Your modifications have been saved!
                </Alert>
            </Snackbar>
            <Snackbar 
                open={deleteOpen} 
                autoHideDuration={4000} 
                onClose={handleDeleteClose}
            >
                <Alert 
                    onClose={handleDeleteClose} 
                    severity="info" 
                    sx={{ width: '100%' }}
                >
                    This is currently unavailable!
                </Alert>
            </Snackbar>
            <Snackbar 
                open={changesFailureOpen} 
                autoHideDuration={4000} 
                onClose={handleChangesFailureClose}
            >
                <Alert 
                    onClose={handleChangesFailureClose} 
                    severity="warning" 
                    sx={{ width: '100%' }}
                >
                    Something went wrong. Please try again.
                </Alert>
            </Snackbar>
            <div>
                <h1>Your Account</h1>
            </div>
            <div>
                <div className="accmenu-container">
                    <div>
                        <h2>Personal Details</h2>
                    </div>
                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1.5, 
                                            marginLeft: '0',
                                            marginRight: '25px' },
                  '& .MuiFormControl-fullWidth': {width: '95%'},
                  width: 470,
                  maxWidth: '100%'
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField 
                        label="First Name" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.first_name}
                        name="first-name"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Last Name" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.last_name}
                        name="last-name"
                        InputLabelProps={{ shrink: true }}
                    />
                    <br/>
                    <TextField 
                        disabled
                        label="Email" 
                        variant="outlined"
                        value={personalDetails.email}
                        name="email"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <br/>
                    <TextField
                        label="Address" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.address_line}
                        name="address-line"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <br/>
                    <TextField
                        label="City" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.city}
                        name="city"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Province" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.province}
                        name="province"
                        InputLabelProps={{ shrink: true }}
                    />
                    <br/>
                    <TextField
                        label="Postal Code" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.postal_code}
                        name="postal-code"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Country" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.country}
                        name="country"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                    {errorMessage && 
                        <div>
                            <span className="error-message">
                                {errorMessage}
                            </span>
                        </div>
                    }
                    <div>
                        <button className="button" onClick={modifyDetails}>
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="accmenu-container">
                    <ProductList 
                        heading="Listings"
                        products={listings} 
                        disabled={true}
                    />
                </div>

                <div className="accmenu-container">
                    <ProductList 
                        heading="Purchases"
                        products={purchases}/>
                </div>

                <div className="accmenu-container">
                   <ProductList 
                        heading='Bids'
                        products={bids}
                    />
                </div>
                
                <div className="accmenu-container">
                    <h2>Manage Account</h2>
                    <div>
                        <span>
                            <b>Change Password</b>
                        </span>
                        <p>Once you change your current password, 
                            you will not be able to use it again.</p>
                        <div>
                            <button className="button" onClick={handlePassword}>
                                Change Password
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <span>
                            <b>Delete Account</b>
                        </span>
                        <p>If you delete your account, you will not be able to recover it.</p>
                        <div>
                            <button 
                                className="button delete-acc" 
                                onClick={handleDelete}
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="sign-out button" onClick={signOut}>
                        Sign Out
                    </button>
                </div>


                <div id="password-modal" style={{display: passwordDisplay}}>
                    <div className="password-container">
                        <form onSubmit={manageAccount}>
                            <div className="input-container">
                                <h2>Enter {authenticated ? 'new' : 'your'} password</h2>
                                <div className="input-container">
                                    <input 
                                        className="input-field" 
                                        type={passwordType}
                                        name="password" 
                                        placeholder="Password" 
                                        value={authenticated ?
                                                newPassword :
                                                password} 
                                        onChange={handleChange}
                                    />
                                    <i className={`${iconType} password-toggle cursor-pointer`} 
                                    onClick={togglePassword}></i>
                                </div>
                                {invalidPassword &&
                                    <span className="error-message">
                                        Password was entered incorrectly.
                                    </span>
                                }
                                <input type="submit" className="button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}