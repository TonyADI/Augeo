import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Account } from '../../pages/Account/Account';
import { Authenticate } from '../Authenticate/Authenticate';
import { Browse } from '../../pages/Browse/Browse';
import { Footer } from '../Footer/Footer';
import { Home } from '../../pages/Home/Home';
import { Intro } from '../../components/Intro/Intro';
import { Navbar } from '../Navbar/Navbar';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Sell } from '../../pages/Sell/Sell';
import { retrieveData } from '../../utilities/projectAPI';
import logo from '../../utilities/images/logo-transparent.svg';
import './App.css';
export const AuthenticatedContext = React.createContext(false);
export const AlertContext = React.createContext();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [alertData, setAlertData] = useState({open: false, message: '', severity: ''});
  const mobileMenuRef = useRef();
  
  const verifyAuthentication = () => {
    retrieveData('https://augeo-server.herokuapp.com/verify-authentication').then(data => {
      if(data){
        setAuthenticated(true);
      }
      console.log('User is not logged in');
    })
  }

  // set session storage to true so animation doesnt run on refresh
  useEffect(() => {
    sessionStorage.setItem('session', true);
  }, []);

  useEffect(() => {
    verifyAuthentication();
  }, []);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthenticatedContext.Provider value={authenticated}>
      <AlertContext.Provider value={setAlertData}>
        <div id="app-body">
            {!sessionStorage.getItem('session') && <Intro 
                title={'Augeo'} 
                logo={logo}
            />}
            <Snackbar 
                open={alertData.open} 
                autoHideDuration={4000} 
                onClose={() => setAlertData({...alertData, open: false})}
            >
                <Alert 
                    onClose={() => setAlertData({...alertData, open: false})} 
                    severity={alertData.severity}
                    sx={{ width: '100%' }}
                >
                    {alertData.message}
                </Alert>
            </Snackbar>
          <Navbar mobileMenuRef={mobileMenuRef}/>
          <Switch>
            <Route path="/browse">
                <Browse />
            </Route>
            <Route path="/sell">
                <Sell />
            </Route>
            <Route path="/register">
                {!authenticated ? 
                  <Authenticate 
                    type='Register' 
                    setAuthenticated={setAuthenticated}
                  />  : 
                  <Redirect to="/" />
                }
            </Route>
            <Route path="/login">
                {!authenticated ? 
                  <Authenticate 
                    type='Login' 
                    setAuthenticated={setAuthenticated}
                  /> : 
                  <Redirect to="/" />
                }
            </Route>
            <Route path="/account">
                {authenticated ? 
                  <Account 
                     
                    setAuthenticated={setAuthenticated}
                  /> : 
                  <Redirect to="/login" />
                }
            </Route>
            <Route exact path="/">
                <Home 
                />
            </Route>
            <Route component={NotFound}/>
          </Switch>
          <Footer 
            text="&#169; Copyright TonyADI. All Rights Reserved. v1.0"/>
        </div>
        </AlertContext.Provider>
      </AuthenticatedContext.Provider>
    </Router>
  );
}

export default App;
