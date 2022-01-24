import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createData }  from '../../utilities/projectAPI';
import './Authenticate.css';

export const Authenticate = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const [validData, setValidData] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [iconType, setIconType] = useState('fa fa-eye-slash');
  const [errorMessage, setErrorMessage] = useState('');
  
  const canSubmit = () => {
    const validEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const validPassword = password.length >= 6;
    const validFirstName = firstName.match(/^(?:[A-Za-z]+|)$/) && firstName;
    const validLastName = lastName.match(/^(?:[A-Za-z]+|)$/) && lastName;

    if(!errorMessage && checked && validEmail && validPassword && 
      ((props.type === 'Login') || (validFirstName && validLastName))){
      setValidData(true);
    }
    else{
      setValidData(false);
    }
  }

  const togglePassword = () => {
    const newPasswordType = (passwordType === 'password') ? 'text' : 'password';
    const newIconType = (iconType === 'fa fa-eye-slash') ? 'fa fa-eye' : 'fa fa-eye-slash';
    setPasswordType(newPasswordType);
    setIconType(newIconType);
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
        console.log('Error!')
    }
  }
  
  const handleKeyPress = e => {
    if(e.which === 13 && validData){
        submitForm(e);
    }
  }

  const handleBlur = e => {
    switch(e.target.name){
      case 'email':
        if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
          setErrorMessage('')
        }
        else{
          setErrorMessage('Enter a valid Email Address');
        }
        break;
      case 'password':
        if(password.length >= 6){
          setErrorMessage('')
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
    canSubmit();
  }

  const submitForm = e => {
    // For testing purposes
    if(email === 'test@test.com' && password === 'tester'){
      props.setAuthenticated(true)
    }
    const data = {email: email, 
                  password: password, 
                  first_name: firstName, 
                  last_name: lastName
                 };
    const url = (props.type === 'Register') ? 
                  'https://tonyadi.loca.lt/users' :
                  `https://tonyadi.loca.lt/users/session`;
    createData(url, data).then(value => {
      if(value){
        props.setAuthenticated(true);
      }
      else{
        if (typeof value === 'undefined'){
            setErrorMessage('Server is currently down.')
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
  
  useEffect(()=>{
    canSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);


  useEffect(() => {
    setFirstName('');
    setLastName('');
    setErrorMessage('');
    setChecked(false);
  }, [props.type])

  return (
    <div>
        <h1>
          {props.type}
        </h1>
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
                    onKeyPress={handleKeyPress} 
                    onBlur={handleBlur}
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
                    onKeyPress={handleKeyPress} 
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password">
                    Password
                  </label>
                  <i className={`${iconType} password-toggle cursor-pointer`} 
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
                            onKeyPress={handleKeyPress} 
                            onBlur={handleBlur}
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
                            onKeyPress={handleKeyPress} 
                            onBlur={handleBlur}
                          />
                          <label htmlFor="last-name">Last Name</label>
                      </div>
                </div> 
                }
                <div className="terms-container cursor-pointer" 
                    onClick={()=> {setChecked(!checked)}}>
                    <input 
                        type="checkbox" 
                        name="terms" 
                        id="termsCheckbox" 
                        onChange={() => setChecked(!checked)} 
                        checked={checked}
                      />
                  <span 
                    className="small-font"> By signing {props.type === 'Register' ? 'up' : 'in'}
                    , you agree to the Terms of Service and Privacy Policy
                  </span>
                </div>
                <input 
                  style={{cursor: validData ?
                            'pointer' : 'default', 
                          backgroundColor: validData ?
                            '#050F19' : 'grey'}} 
                          type="submit" 
                          value={props.type} 
                          className="button" 
                          disabled={!validData}
                />
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
                </div>
                }
            </form>
          </div>
        </div>
    </div>
  );
}

export default Authenticate;
