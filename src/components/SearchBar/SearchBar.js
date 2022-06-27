import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({handleSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [focus, setFocus] = useState(false);

    const handleChange = e => {
        setSearchTerm(e.target.value);
        handleSubmit(e, e.target.value);
    }

    const handleFormSubmit = e => {
        handleSubmit(e, searchTerm);
    }
    
    return (
        <div id="search-container" 
             style={{boxShadow: focus ? 
                        '0px 0px 1px 1px #007bff': 
                        '0px 0px 1px 1px #e5e5e5'
                  }}>
            <form onSubmit={handleFormSubmit}>
                <i className="fa fa-search search-icon"/>
                    <input 
                        id="search-field" 
                        value={searchTerm} 
                        placeholder="Search" 
                        onChange={handleChange}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}/>
            </form>
        </div>
    )
}