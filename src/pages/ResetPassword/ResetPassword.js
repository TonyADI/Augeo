import React, { useState, useEffect, useContext } from 'react';
import { AlertContext } from '../../App';
import { createData } from '../../utilities/projectAPI';
import './ResetPassword.css';

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [authToken, setAuthToken] = useState('');
    const setAlertData = useContext(AlertContext);

    const handleChange = e => {
        switch(e.target.name){
            case 'auth-token':
                if(e.target.value.length < 5){
                    setAuthToken(e.target.value);
                }
                break;
            case 'new-password':
                setNewPassword(e.target.value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        if(authToken.length === 4){
            if(newPassword.length >= 6){
                const data = {new_password: newPassword, auth_token: authToken};
                let encryptedUserEmail = window.location.href.slice(window.location.href.indexOf('=') + 1);
                console.log(encryptedUserEmail)
                console.log(window.location.search)
                createData(`https://augeo-server.herokuapp.com/reset-password?eu=${encryptedUserEmail}`, data)
                .then(value => {
                    if(value){
                        setAlertData({message: 'Password successfully reset!', open: true, severity: 'success'});
                    }
                    else{
                        setAlertData({message:'Something went wrong. Try again.', open: true, severity: 'error'})
                    }
                })
                .catch(error => {
                    setAlertData({message: 'Server error. Try again.', open: true, severity: 'error'});
                })
            }
            else{
                setAlertData({message: 'Password should be at least 6 characters.', open: true, severity: 'warning'});
            }
        }
        else{
            setAlertData({message: 'Authentication token should be 4 characters.', open: true, severity: 'warning'});
        }
        e.preventDefault();
    }


    return(
        <div className='reset-password-container'>
            <h1>Reset Password</h1>
            <form className='reset-password-form' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input 
                        className='input-field'
                        type='number' 
                        value={authToken}
                        onChange={handleChange}
                        id='auth-token'
                        name='auth-token'/>
                    <label htmlFor='auth-token'>
                        4 Digit Code
                    </label>
                </div>
                <div className='input-container'>
                    <input 
                        className='input-field'
                        type='password' 
                        value={newPassword}
                        onChange={handleChange}
                        id='new-password'
                        name='new-password'/>
                    <label htmlFor='new-password'>
                        New Password
                    </label>
                </div>
                <input 
                    className='button'
                    type='submit'/>
            </form>
        </div>
    )
}
