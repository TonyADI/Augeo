import React, { useState, useEffect, useContext } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { createData, retrieveData } from '../../utilities/projectAPI';
import { AuthenticatedContext, AlertContext } from '../../App';
import './Sell.css';

export const Sell = () => {
    const [initialAsk, setInitialAsk] = useState('');
    const [buyNow, setBuyNow] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [display, setDisplay] = useState('none');
    const authenticated = useContext(AuthenticatedContext);
    const setAlertData = useContext(AlertContext);

    const retrieveCategories = () => {
        retrieveData('https://augeo-server.herokuapp.com/categories').then(data => {
            setCategories(data)});
    }

    const createListing = e => {
        if(parseInt(initialAsk) < parseInt(buyNow) && duration){
            const data = {category: category, buy_now: buyNow,
                          initial_ask: initialAsk, duration: duration};
            createData('https://augeo-server.herokuapp.com/products', data).then(value => {
                if(value){
                    setAlertData({message: 'Listing was created!', severity: 'success', open: true});
                    
                }else{
                    setAlertData({message: 'Something went wrong. Try again.', severity: 'warning', open: true});
                }

            })
            setDisplay('none')
        }
        else{
            setAlertData({open: true, severity: 'warning',
            message: 'Initial ask must be lower than final ask and duration at least an hour.'});
        }
        e.preventDefault();
    }
    
    const handleChange = e => {
        switch(e.target.name){
            case 'initial-ask':
                setInitialAsk(parseInt(e.target.value) || '');
                break;
            case 'buy-now':
                setBuyNow(parseInt(e.target.value) || '');
                break;
            case 'duration':
                const now = new Date().getTime();
                const date = new Date(e.target.value).getTime();
                const difference = date - now;
                // Makes sure duration is at least an hour
                if(difference > 3600000){
                    setDuration(e.target.value);
                    break;
                }
                break;
            default:
                return;
        }
    }

    const handleClick = name => {
        if(authenticated){
            setDisplay('flex');
            setCategory(name);
        }else{
            setAlertData({message: 'You need to login before listing a product.', severity: 'info', open: true});
        }
    }

    const handleDisplay = e => {
        const sellModal = document.getElementById('result-container');
        if(e.target === sellModal){
            setDisplay('none');
        }
    }
    
    // Initialize categories with localstorage if it exists or make api call.
    useEffect(() => {
        const localCategories = sessionStorage.getItem('categories') && 
                                JSON.parse(sessionStorage.getItem('categories'));
        if(categories){
            setCategories(localCategories);
        }
        else{
            retrieveCategories();
        }
    }, []);
    
    // Save categories to localstorage when api is called
    useEffect(() => {
        sessionStorage.setItem('categories', categories ? JSON.stringify(categories) : []);
    }, [categories]);

    useEffect(() => {
        document.addEventListener('mousedown', handleDisplay);
        retrieveCategories();
    }, [])

    return(
        <div id="sell-body">
            <div>
                <h1 id="searchbar-heading">What product are you trying to list</h1>
                <div id="search-bar">
                    <SearchBar />
                </div>
            </div>
            <CategoryList 
                categories={categories} 
                handleClick={handleClick}/>
            <div id='result-container' style={{display: display}}>
                    <div id='sample-flex'>
                        <div className='sample-listing-container'>
                            <form onSubmit={createListing}>
                                <img className="sample-listing" 
                                    src={'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxM%%20%20=format&fit=crop&w=1000&q=60'} 
                                    alt={`The product being listed`}/>
                                <div className={`product-detail`}>
                                    <span className={'product-name'}>
                                        {category}
                                    </span>
                                </div>
                                <div className={`product-detail`}>
                                    <div>Initial Ask</div>
                                        <input 
                                            className="sample-listing-input" 
                                            type="number"
                                            name="initial-ask" 
                                            placeholder="Enter Amount" 
                                            value={initialAsk} 
                                            onChange={handleChange}/>
                                </div>
                                <div className={`product-detail`}>
                                    <div>Final Ask</div>
                                        <input 
                                            className="sample-listing-input" 
                                            type="number"
                                            name="buy-now" 
                                            placeholder="Enter Amount" 
                                            value={buyNow} 
                                            onChange={handleChange}/>
                                </div>
                                <div className={`product-detail`}>
                                    <div>Duration</div>
                                    <input 
                                        className='sample-listing-input'
                                        type="datetime-local" 
                                        name="duration" 
                                        value={duration} 
                                        onChange={handleChange}/>
                                </div>
                                <input 
                                    type="submit"
                                    value="List" 
                                    className="product-button sell-button"/>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}