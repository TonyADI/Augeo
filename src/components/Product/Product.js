import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { createData } from '../../utilities/projectAPI';
import { AuthenticatedContext, AlertContext } from '../App/App';
import { Info } from '../Info/Info';
import { Modal } from '../Modal/Modal';
import './Product.css';

export const Product = props => {
    const [duration, setDuration] = useState('');
    const [currentAsk, setCurrentAsk] = useState(props.currentAsk);
    const [bid, setBid] = useState('');
    const [display, setDisplay] = useState('none');
    const authenticated = useContext(AuthenticatedContext);
    const setAlertData = useContext(AlertContext);

    const data = {  id: props.id, 
                    current_ask: bid, 
                    userid: props.userId
                 };

    const handleChange = e => {
        setBid(parseInt(e.target.value) || '');
    }

    const canBid = e => {
        // More cases will be added to handle archiving products.
        switch(e.target.name){
            case 'Bid':
                if(authenticated){
                    props.setTransform(); // Reset product list transform style
                    setDisplay('block');
                }
                break;
            default:
                console.log('There was a problem with the handle click function in product');
        }
    }

    const handleTimeout = () => {
        if(duration === 'Expired'){
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
        }
    }

    const placeBid = e => {
        if(bid > currentAsk && bid >= props.initialAsk && bid < props.buyNow){
            createData(`https://tonyadi.loca.lt/products/${props.id}/?action=bid`, data)
            .then(value => {
               if(value){
                    setCurrentAsk(bid);
                    setAlertData({message: 'Congratulations, you just won this item!', severity: 'success', open: true});
                    // removed set display none from here
                }
                else{
                    setAlertData({message: 'Bid could not be placed. Please refresh!', severity: 'warning', open: true});
                }
            });
        }
        else if(bid === props.buyNow){
            createData(`https://tonyadi.loca.lt/products/${props.id}/?action=sell`, data)
            .then(value => {
                if(value){
                    setCurrentAsk(bid);
                    setAlertData({message: 'Congratulations, you just won this item!', severity: 'success', open: true});
                }
                else{
                    setAlertData({message: 'Bid could not be placed. Please refresh!', severity: 'warning', open: true});
                }
            })
        }
        else{
            setAlertData({message: 'Bid is lower than the current ask or more than the buy now price.',
             severity: 'warning', open: true});
        }
        e.preventDefault();
        setDisplay('none'); 
    }

    // utils
    const isPlural = item => {
        return (item !== 1) ? 's' : '';
    }
    
    // Calculates the duration
    useEffect(()=> {
        const countDownDate = new Date(props.duration).getTime();
        const durationFunction = () => {
            const now = new Date().getTime();
            // Adds a second delay so timeout function is called at the right time
            const distance = countDownDate - now + 1000;
            // Checks if the duration has run out or if the product has been bought
            if(distance > 0 && (currentAsk !== props.buyNow)) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if(days > 0){
                    setDuration(`${days} Day${isPlural(days)} ${hours ? 
                                `${hours} Hour${isPlural(hours)}` : ''}`);
                }
                else if(hours > 0){
                    setDuration(`${hours} Hour${isPlural(hours)} ${minutes ? 
                                `${minutes} Minute${isPlural(minutes)}` : ''}`);
                }
                else if(minutes > 0){
                    setDuration(`${minutes} Minute${isPlural(minutes)} ${seconds ? 
                                `${seconds} Second${isPlural(seconds)}` : ''}`);
                }
                else if(seconds > 0){
                    setDuration(`${seconds} Second${isPlural(seconds)}`);
                }
            }
            else if(distance === 0){
                handleTimeout();
                setDuration('Expired');
                clearInterval(durationInterval); 
            }
            else{
                setDuration('Expired')
                clearInterval(durationInterval); 
            }
          };
        durationFunction();
        var durationInterval = setInterval(durationFunction, 1000); 
        return () => clearInterval(durationInterval);
     }, [props.duration, currentAsk, props.buyNow]); // revise

    const handleDisplay = e => {
        if(e.target.className === 'bid-container'){
            setDisplay('none');
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleDisplay);
    }, []);

    let details = [ {infoStyle: 'product-name', info: props.name},
                    {info: `$${props.initialAsk}`},
                    {info: (currentAsk !== 0) && `$${currentAsk}`},
                    {containerStyle: 'product-buynow', info: `$${props.buyNow}`},
                    {info: duration}]
    return(
        <div className="product-container">
            <div className="card-container">
                <div className="card">
                    <div className="image-container">
                        <img className="product-image" 
                             src={props.imageSrc} 
                             alt={`The ${props.name} being listed`}
                        />
                    </div>
                    {details.map(detail => 
                        <Info 
                            key={detail.info}
                            info={detail.info}
                            containerStyle={detail.containerStyle}
                            infoStyle={detail.infoStyle}/>
                    )}
                    {(duration !=='Expired' && !props.disabled)  && 
                        <Link 
                            onClick={canBid}
                            className="bid-button"
                            name="Bid"
                            to={!authenticated ? '/login' : '/'}>
                                Bid
                        </Link>
                    }
                </div>
            </div>
                    
            <Modal 
                modalStyle='bid-container'
                containerStyle='form-container'
                heading='Place Bid'
                handleChange={handleChange}
                handleSubmit={placeBid}
                display={display}
                name='Bid'
                value={bid}
                type='number'
                submitValue={bid === props.buyNow ? 'Buy Now' : 'Bid'}
                placeholder={`Enter a value higher than $${(currentAsk === 0) ? 
                    props.initialAsk : currentAsk}`}
                />
            </div>
    );
}

/*
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { createData } from '../../utilities/projectAPI';
import { AuthenticatedContext, AlertContext } from '../App/App';
import watch from '../../utilities/images/gshock.jfif';
import imageError from '../../utilities/images/image-error.png';
import './Product.css';

export const Product = props => {
    const [duration, setDuration] = useState(''); 
    const [timer, setTimer] = useState('');
    const [currentAsk, setCurrentAsk] = useState('');
    const [bid, setBid] = useState('');
    const [display, setDisplay] = useState('none');
    const [imageSrc, setImageSrc] = useState('');
    const authenticated = useContext(AuthenticatedContext);
    const setAlertData = useContext(AlertContext);

    const data = {  id: props.id, 
                    current_ask: bid, 
                    userid: props.userId
                 };

    const handleChange = e => {
        setBid(parseInt(e.target.value));
    }

    const canBid = e => {
        // More cases will be added to handle archiving products.
        switch(e.target.name){
            case 'Bid':
                if(authenticated){
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
                    setAlertData({message: 'Congratulations, you just won this item!', severity: 'success', open: true});
                    setDisplay('none');
                }
                else{
                    setAlertData({message: 'Bid could not be placed. Please refresh!', severity: 'warning', open: true});
                }
            });
        }
        else if(bid === props.buyNow){
            createData(`https://tonyadi.loca.lt/products/${props.id}/?action=sell`, data)
            .then(value => {
                if(value){
                    setCurrentAsk(bid);
                    setAlertData({message: 'Congratulations, you just won this item!', severity: 'success', open: true});
                    setDisplay('none');
                }
                else{
                    setAlertData({message: 'Bid could not be placed. Please refresh!', severity: 'warning', open: true});
                }
            })
        }
        else{
            setAlertData({message: 'Bid is lower than the current ask or more than the buy now price.', severity: 'warning', open: true});
        }
        e.preventDefault();
    }

    const isPlural = item => {
        return (item !== 1) ? 's' : '';
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
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if(days > 0){
                    setDuration(`${days} Day${isPlural(days)} ${hours} Hour${isPlural(hours)}`);
                }
                else if(hours > 0){
                    setDuration(`${hours} Hour${isPlural(hours)} ${minutes} Minute${isPlural(minutes)}`);
                }
                else if(minutes > 0){
                    setDuration(`${minutes} Minute${isPlural(minutes)} ${seconds} Second${isPlural(seconds)}`);
                }
                else if(seconds > 0){
                    setDuration(`${seconds} Second${isPlural(seconds)}`);
                }
            }
            else if(distance === 0){
                handleTimeout();
                setDuration('Expired');
                clearInterval(durationInterval); 
            }
            else{
                setDuration('Expired')
                clearInterval(durationInterval); 
            }
          };
        durationFunction();
        var durationInterval = setInterval(durationFunction, 1000); 
        return () => clearInterval(durationInterval);
     }, [props.duration, currentAsk, props.buyNow]); // is this correct?

     useEffect(() => setCurrentAsk(props.currentAsk), 
     [props.currentAsk]);


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
                                    <Link to={!authenticated ? 
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

*/
