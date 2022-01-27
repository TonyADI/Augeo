import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Category } from '../../components/Category/Category';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Product } from '../../components/Product/Product';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { createData, retrieveData } from '../../utilities/projectAPI';
import './Sell.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Sell = props => {
    const [initialAsk, setInitialAsk] = useState('');
    const [buyNow, setBuyNow] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [validData, setValidData] = useState(false);
    const [display, setDisplay] = useState('none');
    const [listingSuccessOpen, setListingSuccessOpen] = useState(false);
    const [listingFailureOpen, setListingFailureOpen] = useState(false);

    const handleListingSuccessClose = () => {
        setListingSuccessOpen(false);
    };
    
    const handleListingFailureClose = () => {
        setListingFailureOpen(false);
    }

    const retrieveCategories = () => {
        retrieveData('https://tonyadi.loca.lt/categories').then(data => {
            setCategories(data)});
    }

    const addNewCategory = () => {
    }

    const canSubmit = () => {
        if((initialAsk < buyNow) && (buyNow > 0) && duration){
          setValidData(true);
        }
        else{
          setValidData(false);
        }
    }

    const handleChange = e => {
        switch(e.target.name){
            case 'initial-ask':
                if(e.target.value >= 0){
                    setInitialAsk(parseInt(e.target.value));
                }
                break;
            case 'buy-now':
                if(e.target.value >= 0){
                    setBuyNow(parseInt(e.target.value));
                }
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
                console.log('There was an error');
        }
    }

    const createListing = e => {
        const data = {category: category, buy_now: buyNow,
             initial_ask: initialAsk, duration: duration};
        createData('https://tonyadi.loca.lt/products', data).then(value => {
            if(value){
                setListingSuccessOpen(true);
            }else{
                setListingFailureOpen(true);
                console.log('Product was not listed. Most likely due to invalid data being provided');
            }

        })
        setDisplay('none')
        e.preventDefault();
    }

    const handleClick = name => {
        if(props.authenticated){
            setDisplay('flex');
            setCategory(name);
        }else{
            window.location.assign('login');
        }
    }

    const handleDisplay = e => {
        const sellModal = document.getElementById('result-container');
        if(e.target === sellModal){
            setDisplay('none');
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDisplay);
        retrieveCategories();
    }, [])

    return(
        <div id="sell-body">
            <div>
                <div id="searchbar-heading">
                    <h1>What product are you trying to list</h1>
                </div>
                <div id="search-bar">
                    <SearchBar />
                </div>
            </div>
            <Snackbar 
                    open={listingSuccessOpen} 
                    autoHideDuration={4000} 
                    onClose={handleListingSuccessClose}
            >
                    <Alert 
                        onClose={handleListingSuccessClose} 
                        severity="success" 
                        sx={{ width: '100%' }}
                    >
                        Listing was created!
                    </Alert>
            </Snackbar>
            <Snackbar 
                    open={listingFailureOpen} 
                    autoHideDuration={4000} 
                    onClose={handleListingFailureClose}
            >
                    <Alert 
                        onClose={handleListingFailureClose} 
                        severity="warning" 
                        sx={{ width: '100%' }}
                    >
                        Something went wrong. Try Again.
                    </Alert>
            </Snackbar>
            <div>
                <CategoryList 
                    categories={categories} 
                    handleClick={handleClick}
                />
                {categories && <div className="inline-display" >
                    <Category name="New Category" handleClick={addNewCategory}
                    src="https://img.icons8.com/ios-glyphs/64/ffffff/plus-math.png"/>
                </div>}
            </div>
                <div id='result-container' style={{display: display}}>
                    <div id='sample-flex'>
                        <div id="sample-listing">
                            <Product 
                                name={category} 
                                disabled={true} 
                                initialAsk={initialAsk} 
                                currentAsk={0} 
                                buyNow={buyNow} 
                                duration={duration}
                            />
                        </div>
                    </div>
                    <div id='form-flex'>
                        <form onSubmit={createListing}>
                            <div className="input-container">
                                <span>Initial Ask</span>
                                <input 
                                    className="input-field" 
                                    type="number" 
                                    onBlur={canSubmit}
                                    name="initial-ask" 
                                    placeholder="Enter Amount (Less than Final Ask)" 
                                    value={initialAsk} 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <span>Final Ask</span>
                                <input 
                                    className="input-field" 
                                    type="number" 
                                    name="buy-now" 
                                    placeholder="Enter Amount (At least 1)" 
                                    value={buyNow} 
                                    onChange={handleChange} 
                                    onBlur={canSubmit}
                                />
                            </div>
                            <div className="input-container">
                                <span>Duration</span>
                                <input 
                                    className="input-field" 
                                    type="datetime-local" 
                                    name="duration" 
                                    value={duration} 
                                    onChange={handleChange} 
                                    onBlur={canSubmit}
                                />
                                {!duration && 
                                <div className="error-message">
                                    Duration needs to be at least an hour
                                </div>
                                }
                            </div>
                            <input 
                                type="submit" 
                                style={{
                                        cursor: validData ?
                                            'pointer' : 
                                            'default', 
                                        backgroundColor: validData ?
                                            '#050F19' : 
                                            'grey'
                                      }}   
                                value="List Product" 
                                className="button" 
                                disabled={!validData}
                            />
                        </form>
                    </div>
                </div>
        </div>
    )
}