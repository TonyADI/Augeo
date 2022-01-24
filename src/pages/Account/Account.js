import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ProductList } from '../../components/ProductList/ProductList';
import { deleteData, retrieveData, updateData, createData } from '../../utilities/projectAPI';
import './Account.css';

export const Account = props => {
    const [passwordDisplay, setPasswordDisplay] = useState('none');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [personalDetails, setPersonalDetails] = useState({});
    const [purchases, setPurchases] = useState([]);
    const [listings, setListings] = useState([]);
    const [bids, setBids] = useState([]);
    const [passwordType, setPasswordType] = useState('password');
    const [iconType, setIconType] = useState('fa fa-eye-slash')
    const [errorMessage, setErrorMessage] = useState('');

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
                        NotificationManager.success('Your modifications have been saved!', '', 4000)
                        console.log('Data was modified');
                        setErrorMessage('');
                    }
                    else{
                        setErrorMessage('Something went wrong. Try again.')
                    }
                });
            }
            else{
                setErrorMessage('First Name and Last Name can only be letters.');
            }
        }
        else{
            setErrorMessage('First Name and Last Name cannot be empty.');
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
                    NotificationManager.success('Password successfully changed!')
                    console.log('Password successfully updated.');
                    setPassword(newPassword);
                    setPasswordDisplay('none');
                }
                else{
                    alert('Something went wrong. Please try again.');
                    console.log('Password was not updated.');
                }
            })
        }
        else{
            setValidPassword(false);
        }
    }

    const verifyPassword = () => {
        const data = {email: personalDetails.email, password: password};
        createData(`https://tonyadi.loca.lt/users/password`, data).then(value => {
            if(value){
                NotificationManager.info('Password was good.')
                console.log('Password was good.')
                setAuthenticated(true);
                setValidPassword(true);
                setPasswordDisplay('none');
            }
            else{
                console.log('Wrong password provided.')
                setValidPassword(false);
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

    const handleKeyPress = e => {
        if(e.which === 13){
            manageAccount(e);
        }
      }

    const handleDisplay  = e => {
        const passwordModal = document.getElementById('password-modal');
        if(e.target === passwordModal){
            setPasswordDisplay('none');
        }
    }

    // Unused for the time being
    /*
    const handleDelete = () => {
        if(authenticated){
            const bool = window.confirm('You are about to delete your account. Proceed?');
            if(bool){
                deleteAccount();
            }
        }
        else{
            setPasswordDisplay('block');
        }
    }
    */

    const handlePassword = () => {
        setNewPassword('');
        setPassword('')
        setPasswordDisplay('block');
    }

    useEffect(() => {
        retrieveDetails();
        retrieveListings();
        retrieveBids();
        retrievePurchases();
        document.addEventListener('mousedown', handleDisplay)
    }, []);

    useEffect(() => {
        var authenticationTimeout = setTimeout(() => {
            setAuthenticated(false);
            setPassword('');
        }, 300000);
        return () => clearTimeout(authenticationTimeout);
    }, [authenticated]);

    return (
        <div className="account-container">
            <NotificationContainer />
            <div>
                <h1>Your Account</h1>
            </div>
            <div>
                <div className="accmenu-container">
                    <div>
                        <h2>Personal Details</h2>
                    </div>
                    <form className="personal-details-form">
                        {errorMessage && 
                            <div>
                                <span className="error-message">
                                    {errorMessage}
                                </span>
                            </div>
                        }
                        <div className="space-between">
                            <div>
                                <span className="details-heading">
                                    First Name
                                </span>
                                <input 
                                    className="input-field" 
                                    type="text" 
                                    name="first-name" 
                                    value={personalDetails.first_name} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="details-heading">
                                    Last Name
                                </span>
                                <input 
                                    className="input-field" 
                                    type="text" 
                                    name="last-name" 
                                    value={personalDetails.last_name} 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <span className="details-heading">
                                Email
                            </span>
                        <input 
                            className="input-field email" 
                            type="email" 
                            name="email" 
                            value={personalDetails.email} 
                            disabled
                        />
                        </div>
                        <div>
                            <span className="details-heading">
                                Address Line
                            </span>
                            <input 
                                className="input-field email" 
                                type="text" 
                                name="address-line" 
                                value={personalDetails.address_line} 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-between">
                            <div>
                                <span className="details-heading">
                                    City
                                </span>
                                <input 
                                    className="input-field email" 
                                    type="text" 
                                    name="city" 
                                    value={personalDetails.city} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="details-heading">
                                    Province
                                </span>
                                <input  
                                    className="input-field email" 
                                    type="text" 
                                    name="province" 
                                    value={personalDetails.province} 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="space-between">
                            <div>
                                <span className="details-heading">
                                    Postal Code
                                </span>
                                <input 
                                    className="input-field email" 
                                    type="text" 
                                    name="postal-code" 
                                    value={personalDetails.postal_code} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="details-heading">
                                    Country
                                </span>
                                <input 
                                    className="input-field email" 
                                    type="text" 
                                    name="country" 
                                    value={personalDetails.country} 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                    <div>
                        <button className="button" onClick={modifyDetails}>
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="accmenu-container">
                    <div>
                        <h2>
                            Listings
                        </h2>
                    </div>
                    <div>
                        <ProductList 
                            products={listings} 
                            disabled={true}
                        />
                    </div>
                </div>

                <div className="accmenu-container">
                    <div>
                        <h2>
                            Purchases
                        </h2>
                    </div>
                    <div>
                        <ProductList products={purchases}/>
                    </div>
                </div>

                <div className="accmenu-container">
                    <div>
                        <h2>
                            Bids
                        </h2>
                    </div>
                   <div>
                       <ProductList 
                            products={bids} 
                            authenticated={props.authenticated}
                        />
                    </div>
                </div>

                <div className="accmenu-container">
                    <div>
                        <h2>Manage Account</h2>
                    </div>
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
                                className="button" 
                                onClick={() => 
                                    { NotificationManager.info('Currently Unavailable.');
                                }}
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
                                        onKeyPress={handleKeyPress}
                                    />
                                    <i className={`${iconType} password-toggle cursor-pointer`} 
                                    onClick={togglePassword}></i>
                                </div>
                                {(!validPassword && (password.length >= 6)) &&
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