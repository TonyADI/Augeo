import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from "react-router-dom";
import { createData } from '../../utilities/projectAPI';
import { AuthenticatedContext, AlertContext } from '../../App';
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
                    setDisplay('block');
                }
                else{
                    setAlertData({message: 'You need to login first.', open: true, severity: 'info'})
                }
                break;
            default:
                return;
        }
    }

    const handleTimeout = () => {
        if(duration === 'Expired'){
            if(currentAsk){
                createData(`https://augeo-server.herokuapp.com/products/${props.id}/?action=timeout`, data);
            }
        }
    }

    const placeBid = e => {
        if(bid > currentAsk && bid >= props.initialAsk && bid < props.buyNow){
            createData(`https://augeo-server.herokuapp.com/products/${props.id}/?action=bid`, data)
            .then(value => {
               if(value){
                    setCurrentAsk(bid);
                    setAlertData({message: 'Bid was placed!', severity: 'success', open: true});
                    // removed set display none from here
                }
                else{
                    setAlertData({message: 'Bid could not be placed. Please refresh!', severity: 'warning', open: true});
                }
            });
        }
        else if(bid === props.buyNow){
            createData(`https://augeo-server.herokuapp.com/products/${props.id}/?action=sell`, data)
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
                             alt={`The ${props.name} being listed`}/>
                    </div>
                    {details.map((detail, i) => 
                        <Info 
                            key={detail.info + i}
                            info={detail.info}
                            containerStyle={detail.containerStyle}
                            infoStyle={detail.infoStyle}/>
                    )}
                    {(duration !=='Expired' && !props.disabled)  && 
                        <button 
                            onClick={canBid}
                            className="product-button"
                            name="Bid">
                                Bid
                        </button>
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
                placeholder={`At least $${(currentAsk === 0) ? 
                    props.initialAsk : currentAsk}`}
                />
            </div>
    );
}