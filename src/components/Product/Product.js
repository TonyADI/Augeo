import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { createData } from '../../utilities/projectAPI';
import watch from '../../utilities/images/gshock.jfif';
import imageError from '../../utilities/images/image-error.png';
import './Product.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Product = props => {
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [duration, setDuration] = useState(''); 
    const [timer, setTimer] = useState('');
    const [currentAsk, setCurrentAsk] = useState('');
    const [bid, setBid] = useState('');
    const [display, setDisplay] = useState('none');
    const [imageSrc, setImageSrc] = useState('');
    const [bidSuccessOpen, setBidSuccessOpen] = useState(false);
    const [bidFailureOpen, setBidFailureOpen] = useState(false);

    const data = {  id: props.id, 
                    current_ask: bid, 
                    userid: props.userId
                 };

    const handleBidSuccessClose = () => {
        setBidSuccessOpen(false);
    };
    
    const handleBidFailureClose = () => {
        setBidFailureOpen(false);
    }

    const handleChange = e => {
        setBid(parseInt(e.target.value));
    }

    const canBid = e => {
        // More cases will be added to handle archiving products.
        switch(e.target.name){
            case 'Bid':
                if(props.authenticated){
                    props.setTransform(); // Reset product list transform style
                    setDisplay('block');
                }
                break;
            default:
                console.log('There was a problem with the handle click function in product');
        }
    }

    const handleTimeout = () => {
        if(hours === 0 && minutes === 0 && seconds === 0){
            if(currentAsk){
                createData(`https://tonyadi.loca.lt/products/${props.id}/?action=timeout`, data)
                .then(value => {
                    if(value){
                        console.log('Product time ran out. Someone won the product.');
                    }
                    else{
                        console.log('Something went wrong with handleTimeout.')
                    }
                })
            }
            else{
                console.log('No bids');
            }
        }
    }

    const placeBid = e => {
        if(bid > currentAsk && bid >= props.initialAsk && bid < props.buyNow){
            createData(`https://tonyadi.loca.lt/products/${props.id}/?action=bid`, data)
            .then(value => {
               if(value){
                    setCurrentAsk(bid);
                    setBidSuccessOpen(true);
                    setDisplay('none');
                }
                else{
                    setBidFailureOpen(true);
                }
            });
        }
        else if(bid === props.buyNow){
            createData(`https://tonyadi.loca.lt/products/${props.id}/?action=sell`, data)
            .then(value => {
                if(value){
                    setCurrentAsk(bid);
                    setBidSuccessOpen(true);
                    setDisplay('none');
                }
                else{
                    setBidFailureOpen(true);
                }
            })
        }
        else{
            setBidFailureOpen(true);
        }
        e.preventDefault();
    }

    const isPlural = item => {
        return (item !== 1) ? 's' : '';
    }

    const displayDuration = () => {
        if(days > 0){
            setDuration(`${days} Day${isPlural(days)} ${hours} Hour${isPlural(hours)}`)
        }
        else if(hours > 0){
            setDuration(`${hours} Hour${isPlural(hours)} ${minutes} Minute${isPlural(minutes)}`)
        }
        else if(minutes > 0){
            setDuration(`${minutes} Minute${isPlural(minutes)} ${seconds} Second${isPlural(seconds)}`)
        }
        else if(seconds > 0){
            setDuration(`${seconds} Second${isPlural(seconds)}`)
        }
        else{
            setDuration('Expired');
            setTimer('');
            handleTimeout();
        }
    }
    
    // Calculates the duration
    useEffect(()=> {
        const durationFunction = () => {
            const now = new Date().getTime();
            // Adds a second delay so timeout function is called at the right time
            const countDownDate = new Date(props.duration).getTime();
            const distance = countDownDate - now + 1000;
            // Checks if the duration has run out or if the product has been bought
            if(distance > 0 && (currentAsk !== props.buyNow)) {
               setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
               setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
               setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
               setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
            }
            else{
                setDays('');
                setHours('');
                setMinutes('');
                setSeconds('');
                clearInterval(durationInterval); 
            }
          };
        durationFunction();
        var durationInterval = setInterval(durationFunction, 1000); 
        return () => clearInterval(durationInterval);
     }, [props.duration, currentAsk, props.buyNow])

     useEffect(() => setCurrentAsk(props.currentAsk), 
     [props.currentAsk]);

    useEffect(() => {
        displayDuration();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

    // Set Product Image
    useEffect(() => {
        const iphone11 = `https://images.unsplash.com/photo-1574755297613-7b2c5fee60ce?
                            ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto
                            =format&fit=crop&w=2392&q=80`;
        const hp = `https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxM
                        jA3fDF8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto
                        =format&fit=crop&w=1000&q=60`;
        switch(props.name){
            case 'HP Spectre x360':
                setImageSrc(hp);
                break;
            case 'iPhone 11':
                setImageSrc(iphone11);
                break;
            case 'G-Shock':
                setImageSrc(watch);
                break;
            default:
                setImageSrc(imageError);
        }
    }, [props.name])

    const handleDisplay = e => {
        if(e.target.className === 'bid-container'){
            setDisplay('none');
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleDisplay);
    }, []);

    /* currently unavailable because it might inhibit performance
    useEffect(() => {
        if((minutes < 5) && (hours === 0) && (days === 0)){
            setTimer('timer');
        }
    }, [minutes])
    */

    return(
            <div className="product-container" style={{animationName: timer}}>
                <Snackbar 
                    open={bidSuccessOpen} 
                    autoHideDuration={4000} 
                    onClose={handleBidSuccessClose}
                >
                    <Alert 
                        onClose={handleBidSuccessClose} 
                        severity="success" 
                        sx={{ width: '100%' }}
                    >
                        {bid === props.buyNow ? 
                            'Congratulations, you just won this item!' :
                            'Bid was accepted!'
                        }
                    </Alert>
                </Snackbar>
                <Snackbar 
                    open={bidFailureOpen} 
                    autoHideDuration={4000} 
                    onClose={handleBidFailureClose}
                >
                    <Alert 
                        onClose={handleBidFailureClose} 
                        severity="warning" 
                        sx={{ width: '100%' }}
                    >
                        {(bid > currentAsk && bid >= props.initialAsk &&
                             bid <= props.buyNow) ?
                            'Bid could not be placed. Please refresh!' :
                            'Bid is lower than the current ask' + 
                            ' or more than the buy now price.'
                        }
                    </Alert>
                </Snackbar>
                <div className="card-container">
                    <div className="card">
                        <div className="image-container">
                            <img className="product-image" 
                                 src={imageSrc} 
                                 alt={`The ${props.name} being listed`}>
                            </img>
                        </div>
                        <div className="product-details">
                            <div className="product-detail">
                                <span className="product-name">
                                    {props.name}
                                </span>
                            </div>
                            <div className="product-detail">
                                <span>
                                    ${props.initialAsk}
                                </span>
                            </div>
                            <div className="product-detail">
                                {(currentAsk !== 0) &&
                                 <span>
                                     ${currentAsk}
                                </span>}
                            </div>
                            <div className="product-detail product-buynow">
                                <span>
                                    ${props.buyNow}
                                </span>
                            </div>
                            <div className="product-detail">
                                <span>
                                    {duration}
                                </span>
                            </div>
                            </div>
                            {(duration !=='Expired' && !props.disabled)  && 
                                <div>
                                    <Link to={!props.authenticated ? 
                                            '/login' :
                                            '/'
                                             }
                                    >
                                        <button 
                                            onClick={canBid} 
                                            className="bid-button" 
                                            name='Bid'
                                        >
                                            Bid
                                        </button>
                                    </Link>
                                </div>
                            }
                    </div>
                </div>

                <div className="bid-container" style={{display: display}}>
                    <div className="form-container">
                        <form onSubmit={placeBid}>
                            <div className="input-container">
                                <h2>Place Bid</h2>
                                <div>
                                    <input 
                                        className="input-field" 
                                        type="number" 
                                        name="Bid" 
                                        onChange={handleChange} 
                                        placeholder={`Enter a value higher than $${(currentAsk === 0) ? 
                                            props.initialAsk :
                                            currentAsk}`
                                        } 
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    className="button" 
                                    value={bid === props.buyNow ?
                                     'Buy Now' : 
                                     'Bid'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}