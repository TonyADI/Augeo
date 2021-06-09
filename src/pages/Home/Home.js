import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ProductList } from '../../components/ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import './Home.css'

export const Home = props => {
    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [recentBids, setRecentBids] = useState([]);

    const retrieveFeaturedProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=featured`)
        .then(data => {
            setFeatured(data);
        })
    }

    const retrieveLatestCategory = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=latest`)
        .then(data => {
            setLatest(data);
        })
    }

    const retrievePopularProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=popular`)
        .then(data => {
            setPopular(data);
        })
    }

    const retrieveTrendingProduct = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=trending`)
        .then(data => {
            setTrending(data);
        })
    }

    const retrieveRecentBids = () => {
        retrieveData(`https://tonyadi.loca.lt/products?sortBy=recent`)
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

    return(
        <div className="home-container">
            <div className="jumbo full-width">
                <div className="jumbo-overlay">
                    <div>
                        <h1 className="jumbo-header">
                            Shop and sell at your own pace
                        </h1>
                        <div className="greeting-container">
                            <p className="jumbo-info">If you are looking for a platform to resell your product in a relatively free market, or
                                trying to find a bargain on one then look no further
                            </p>
                            <div className="button-container">
                                <Link to="/register"><button className="button">Start Bidding</button></Link>
                                <Link to="/register"><button className="button">Start Selling</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div><h1>Featured Product</h1></div>
                <div><ProductList products={featured} authenticated={props.authenticated}/></div>
            </div>
            <div>
                <div><h1>Most Popular</h1></div>
                <div><ProductList products={popular} authenticated={props.authenticated}/></div>
            </div>
            <div>
                <div><h1>Trending</h1></div>
                <div><ProductList products={trending} authenticated={props.authenticated}/></div>
            </div>    
            <div className="banner-container">
                <div className="collection-text">
                    Cannot find the category you are trying to list? Just add it</div>
                <div><button className="button">Add Category</button></div>
            </div>
            <div>
                <div><h1>Latest Category</h1></div>
                <div><ProductList products={latest} authenticated={props.authenticated}/></div>
            </div>
            <div>
                <div><h1>Recent Bids</h1></div>
                <div><ProductList products={recentBids} authenticated={props.authenticated}/></div>
            </div>
        </div>
    )
}