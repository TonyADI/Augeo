import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { createData }  from '../../utilities/projectAPI';
import { AlertContext } from '../../App';
import { Modal } from '../Modal/Modal';
import './Authenticate.css';

export const Authenticate = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const [validData, setValidData] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');
  const [focus, setFocus] = useState(false);  
  const [display, setDisplay] = useState(false);
  const setAlertData = useContext(AlertContext);
  
  const canSubmit = () => {
    const validEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const validPassword = password.length >= 6;
    const validFirstName = firstName && firstName.match(/^(?:[A-Za-z]+|)$/);
    const validLastName = lastName && lastName.match(/^(?:[A-Za-z]+|)$/);

    let value = !errorMessage && checked && validEmail && validPassword && 
                ((props.type === 'Login') || (validFirstName && validLastName));
    setValidData(value);
  }

  const togglePassword = () => {
    const newPasswordType = (passwordType === 'password') ? 'text' : 'password';
    setPasswordType(newPasswordType);
  }

  const handleChange = e => {
    switch(e.target.name){
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'first-name':
        setFirstName(e.target.value);
        break;
      case 'last-name':
        setLastName(e.target.value);
        break;
      default:
        return;
    }
  }
  
  const handleBlur = e => {
    switch(e.target.name){
      case 'email':
        if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
          setErrorMessage('');
        }
        else{
          setErrorMessage('Enter a valid Email Address');
        }
        break;
      case 'password':
        if(password.length >= 6){
          setErrorMessage('');
        }
        else{
          setErrorMessage('Enter a valid Password');
        }
        break;
      case 'first-name':
        if(firstName.match(/^(?:[A-Za-z]+|)$/)){
          setErrorMessage('');
        }
        else{
          setErrorMessage('First Name can only be letters.')
        }
        break;
      case 'last-name':
        if(lastName.match(/^(?:[A-Za-z]+|)$/)){
          setErrorMessage('');
        }
        else{
          setErrorMessage('Last Name can only be letters.')
        }
        break;
      default:
        setErrorMessage('');
    }
    setFocus(false);
  }

  const submitForm = e => {
    // For testing purposes
    const data = {email: email, password: password, 
                  first_name: firstName, last_name: lastName};
    const path = props.type === 'Login' ? '/session' : '';
    createData(`https://augeo-server.herokuapp.com/users${path}`, data).then(value => {
      if(value){
        props.setAuthenticated(true);
      }
      else{
        if (typeof value === 'undefined'){
            setErrorMessage('Server is currently down.');
        }
        else{
          switch(props.type){
            case 'Register':
              setErrorMessage('The email address already exists!');
              break;
            case 'Login':
              setErrorMessage('Your email address or password was entered incorrectly.');
              break;
            default:
              setErrorMessage('Something went wrong. Try Again.');
          }
        }
      }
      });
    e.preventDefault();
  }

  
  const openModalDisplay = () => {
    setDisplay('block');
  }

  const closeModalDisplay = e => {
    if(e.target.className === 'bid-container'){
        setDisplay('none');
    }
  }

  const handleForgotPassword = () => {
    const validEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const data = {email: email}
    if(validEmail){
        createData(`https://augeo-server.herokuapp.com/forgot-password`, data)
        .then(value => {
            if(value){
                setAlertData({message: 'Email sent! Make sure to check junk as well.', open: true, severity: 'success'})
            }
            else{
                setAlertData({message: 'Something went wrong. Try again.', open: true, severity: 'error'})
            }
        })
    }
    else{
        setAlertData({message: 'Email is invalid', severity: 'warning', open: true})
    }
  }
  
  useEffect(()=>{
    if(!focus){
      canSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, focus]);

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setErrorMessage('');
    setChecked(false);
  }, [props.type]);

  useEffect(() => {
    document.addEventListener('mousedown', closeModalDisplay);
  }, []);

  return (
    <div>
        <h1>{props.type}</h1>
        <div id="authenticate-container">
          <div id="authenticate-form">
            <form onSubmit={submitForm}>
                <div>
                  <span className="error-message">
                    {errorMessage}
                  </span>
                </div>
                <div className="input-container">
                  <input 
                    className="input-field" 
                    type="email" 
                    name="email"
                    id="email"
                    value={email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={() => setFocus(true)}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="input-container">
                  <input 
                    className="input-field" 
                    type={passwordType} 
                    name="password"
                    id='password'
                    value={password} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={() => setFocus(true)}
                  />
                  <label htmlFor="password">
                    Password
                  </label>
                  <i className={`${passwordType === 'text' ? 'fa fa-eye' : 'fa fa-eye-slash'} 
                                   password-toggle cursor-pointer`}
                      onClick={togglePassword}>
                  </i>
                </div>
                {props.type === 'Register' && <div>
                      <div className="input-container">
                          <input 
                            className="input-field" 
                            type="text" 
                            name="first-name"
                            id="first-name"
                            value={firstName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={() => setFocus(true)}
                          />
                          <label htmlFor="first-name">First Name</label>
                      </div>
                      <div className="input-container">
                          <input 
                            className="input-field" 
                            type="text" 
                            name="last-name"
                            id="last-name"
                            value={lastName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={() => setFocus(true)}
                          />
                          <label htmlFor="last-name">Last Name</label>
                      </div>
                </div> 
                }
                <div 
                  className="terms-container cursor-pointer" 
                  onClick={()=> {setChecked(!checked)}}>
                    <input 
                        type="checkbox" 
                        name="terms" 
                        id="termsCheckbox" 
                        onChange={() => setChecked(!checked)} 
                        checked={checked}/>
                    <span className="small-font"> 
                        By signing {props.type === 'Register' ? 'up' : 'in'}
                      , you agree to the Terms of Service and Privacy Policy
                    </span>
                </div>
                <input 
                  style={{cursor: validData ?
                            'pointer' : 'default', 
                          backgroundColor: validData ?
                            '#519ec0' : 'grey'}} 
                  type="submit" 
                  value={props.type} 
                  className="button" 
                  disabled={!validData}/>
                {props.type === 'Register' ?
                <div className="small-font">
                    Already have an account? <Link to="/login">
                      Sign in.
                    </Link>
                </div>
                  : 
                <div 
                    className="small-font">
                      Not a member? <Link to='/register'>
                        Sign up
                      </Link>
                      <span 
                        onClick={openModalDisplay}
                        className='forgot-password'>
                        {' | Forgot password?'}
                        </span>
                </div>
                }
            </form>
          </div>
        </div>
        <Modal 
            modalStyle='bid-container'
            containerStyle='form-container'
            heading='Forgot Password?'
            handleChange={handleChange}
            handleSubmit={handleForgotPassword}
            display={display}
            name='email'
            value={email}
            type='email'
            submitValue='Send'
            placeholder='Email'/>
    </div>
  );
}