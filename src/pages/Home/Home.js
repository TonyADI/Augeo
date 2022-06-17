import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { ProductList } from '../../components/ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import { AuthenticatedContext, AlertContext } from '../../components/App/App';
import './Home.css';

export const Home = () => {
    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [recentBids, setRecentBids] = useState([]);
    const authenticated = useContext(AuthenticatedContext);
    const setAlertData = useContext(AlertContext);

    const handleClick = () => {
        setAlertData({message: 'This is currently unavailable', severity: 'info', open: true});
    }
    
    const retrieveFeaturedProduct = () => {
        retrieveData(`https://augeo-server.herokuapp.com/products?sortBy=featured`)
        .then(data => {
            setFeatured(data);
        })
    }

    const retrieveLatestCategory = () => {
        retrieveData(`https://augeo-server.herokuapp.com/products?sortBy=latest`)
        .then(data => {
            setLatest(data);
        })
    }

    const retrievePopularProduct = () => {
        retrieveData(`https://augeo-server.herokuapp.com/products?sortBy=popular`)
        .then(data => {
            setPopular(data);
        })
    }

    const retrieveTrendingProduct = () => {
        retrieveData(`https://augeo-server.herokuapp.com/products?sortBy=trending`)
        .then(data => {
            setTrending(data);
        })
    }

    const retrieveRecentBids = () => {
        retrieveData(`https://augeo-server.herokuapp.com/products?sortBy=recent`)
        .then(data => {
            setRecentBids(data);
        })
    }

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