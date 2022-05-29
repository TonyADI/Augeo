import { useEffect, useContext } from 'react';
import { AuthenticatedContext } from '../App/App';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../utilities/images/logo-transparent.svg';

// link can be a component
export const Navbar = ({mobileMenuRef}) => {
    const authenticated = useContext(AuthenticatedContext);
    const openMobileMenu = () => {
        mobileMenuRef.current.style.display = 'block';
        mobileMenuRef.current.classList.add('fade-in');
    }
    const closeMobileMenu = () => {
        mobileMenuRef.current.style.display = 'none';
    }
    const handleMobileMenu = e => {
        if(e.target.className === 'mobile-menu-container fade-in'){
            mobileMenuRef.current.style.display = 'none';
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleMobileMenu);
    }, [])
    return(
        <div className="full-width">
            <nav>
                <div id="nav-container">
                    <ul>
                        <li id="home">
                            <Link to="/">Augeo</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/"><img id="logo" src={logo} 
                            alt="logo"/></Link>
                        </li>
                        {!authenticated && 
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        }
                        {!authenticated && 
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        }
                        {authenticated &&
                            <li>
                                <Link to="/account">Account</Link>
                            </li>
                        }
                        <li id="sell">
                                <Link to="/sell">Sell</Link>
                        </li>
                        
                        <li id="browse">
                            <Link to="/browse">Browse</Link>
                        </li>
                        <li className="mobile-menu-item" onClick={openMobileMenu}>
                            <i className="fa fa-bars" id="burger"></i>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu-container" ref={mobileMenuRef}>
                    <div className="mobile-menu">
                        <i className="fa fa-close close-button" onClick={closeMobileMenu}></i>
                        <ul>
                            {!authenticated && 
                                <li onClick={closeMobileMenu}>
                                    <Link to="/login">Login</Link>
                                </li>
                            }
                            {!authenticated && 
                                <li onClick={closeMobileMenu}>
                                    <Link to="/register">Register</Link>
                                </li>
                            }
                            {authenticated &&
                                <li onClick={closeMobileMenu}>
                                    <Link to="/account">Account</Link>
                                </li>
                            }
                            <li onClick={closeMobileMenu}>
                                <Link to="/sell">Sell</Link>
                            </li>
                            
                            <li onClick={closeMobileMenu}>
                                <Link to="/browse">Browse</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}