import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = props => {
    const [term, setTerm] = useState('');
    const [focus, setFocus] = useState(false);

    const handleChange = e => {
        setTerm(e.target.value)
    }

   const handleKeyPress = e => {
   }
    
    return (
        <div 
            id="search-container" 
            style={{boxShadow: focus ? 
                        '0px 0px 1px 1px #007bff': 
                        '0px 0px 1px 1px #e5e5e5'
                  }}>
            <i className="fa fa-search search-icon"></i>
            <input 
                id="search-field" 
                value={term} 
                placeholder="Search" 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </div>
    )
}