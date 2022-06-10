import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const mobileMenuRef = useRef();
  
  const verifyAuthentication = () => {
    retrieveData('https://tonyadi.loca.lt/verify-authentication').then(data => {
      if(data){
        setAuthenticated(true);
      }
      console.log('User is not logged in');
    })
  }
  useEffect(() => {
    verifyAuthentication();
  }, []);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthenticatedContext.Provider value={authenticated}>
        <div id="app-body">
            <Intro 
                title={'Augeo'} 
                logo={logo}
            />
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
      </AuthenticatedContext.Provider>
    </Router>
  );
}

export default App;
