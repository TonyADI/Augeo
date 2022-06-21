import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ProductList } from '../../components/ProductList/ProductList';
import { Modal } from '../../components/Modal/Modal';
import { deleteData, retrieveData, updateData, createData } from '../../utilities/projectAPI';
import { AlertContext } from '../../App';
import './Account.css';

export const Account = props => {
    const [passwordDisplay, setPasswordDisplay] = useState('none');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [personalDetails, setPersonalDetails] = useState({});
    const [purchases, setPurchases] = useState([]);
    const [listings, setListings] = useState([]);
    const [bids, setBids] = useState([]);
    const [passwordType, setPasswordType] = useState('password');
    const setAlertData = useContext(AlertContext);

                                                                        // Manage Account

    const modifyDetails = () => {
        if(personalDetails.first_name && personalDetails.last_name){
            if(personalDetails.first_name.match(/^(?:[A-Za-z]+|)$/) && 
               personalDetails.last_name.match(/^(?:[A-Za-z]+|)$/)){
                updateData('https://augeo-server.herokuapp.com/users/details', personalDetails).then(value => {
                    if(value){
                        setAlertData({open: true, message: 'Your modifications have been saved!', severity: 'success'});
                    }
                    else{
                        setAlertData({open: true, message: 'Something went wrong. Please try again.', severity: 'warning'});
                    }
                });
            }
            else{
                setAlertData({open: true, message: 'First name and last name can only be letters.', severity: 'warning'});
            }
        }
        else{
            setAlertData({open: true, message: 'First name and last name cannot be empty.', severity: 'warning'});
        }
    }

    const updatePassword = () => {
        const data = {  email: personalDetails.email, 
                        password: password, 
                        new_password: newPassword
                     };
        if(newPassword.length >= 6){
            updateData(`https://augeo-server.herokuapp.com/users/password`, data).then(value => {
                if(value){
                    setAlertData({open: true, message: 'Your modifications have been saved!', severity: 'success'});
                    setPassword(newPassword);
                    setPasswordDisplay('none');
                }
                else{
                // setAlertData({open: true, message: 'Wrong password provided', severity: 'warning'});
                setAlertData({open: true, message: 'Something went wrong. Please try again.', severity: 'warning'});
                }
            })
        }
        else{
            setAlertData({open: true, message: 'Password needs to be at least 6 characters.', severity: 'warning'});
        }
    }

    const submitPassword = e => {
        updatePassword();
        e.preventDefault();
    }

                                                                        // Retrieve Data

    const retrieveDetails = () => {
        retrieveData(`https://augeo-server.herokuapp.com/users/details`).then(data => {
            if(data){
                setPersonalDetails(data);
            }
        });
    }

    const retrieveListings = () => {
        retrieveData(`https://augeo-server.herokuapp.com/users/products?type=listing`).then(data => {
            setListings(data);
        })
    }

    const retrieveBids = () => {
        retrieveData(`https://augeo-server.herokuapp.com/users/products?type=bid`).then(data => {
            setBids(data);
        })
    }

    const retrievePurchases = () => {
        retrieveData(`https://augeo-server.herokuapp.com/users/products?type=purchase`).then(data => {
            setPurchases(data);
        })
    }
                                                                                // HANDLE FUNCTIONS

    const handleChange = e => {
        switch(e.target.name){
            case 'password':
                setNewPassword(e.target.value);
                break;
            default:
                setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
        }
    }

    const handleDisplay  = e => {
        if(e.target.className === 'password-modal'){
            setPasswordDisplay('none');
        }
    }

    const handlePassword = () => {
        setNewPassword('');
        setPassword('')
        setPasswordDisplay('block');
    }

    const signOut = () => {
        deleteData(`https://augeo-server.herokuapp.com/users/session`).then(value => {
            if(value){
                props.setAuthenticated(false);
            }
            else{
                setAlertData({open: true, message: 'Something went wrong. Please try again.', severity: 'warning'});
            }
        })
    }

    const togglePassword = () => {
        const newPasswordType = (passwordType === 'password') ? 'text' : 'password';
        setPasswordType(newPasswordType);
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
        setAlertData({open: true, message: 'This is currently unavailable', severity: 'info'});
    }
    

    return (
        <div className="account-container">
            <h1>Your Account</h1>
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
                        name="first_name"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Last Name" 
                        variant="outlined"
                        onChange={handleChange}
                        value={personalDetails.last_name}
                        name="last_name"
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
                    </Box>
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

                <Modal 
                    modalStyle='password-modal'
                    containerStyle='password-container'
                    heading={`Enter new password`}
                    handleChange={handleChange}
                    handleSubmit={submitPassword}
                    display={passwordDisplay}
                    name='password'
                    value={newPassword} 
                    type={passwordType}
                    placeholder='Password'
                    children={<i className={`${passwordType === 'text' ? 
                                'fa fa-eye' : 'fa fa-eye-slash'} 
                                password-toggle cursor-pointer`}
                                onClick={togglePassword}/>}
                    />
            </div>
        </div>
    )
}