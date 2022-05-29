import React from 'react';
import defaultCategory from '../../utilities/images/default-category.png';
import './Category.css';

export const Category = ({name, handleClick, src}) => {
    return (
        <div className="category-container cursor-pointer" 
             onClick={() => handleClick(name)}>
            <div className="category-background">
                <img src={src} alt={`${name} category`}/>
            </div>
            <div className="category-name">
                <span>
                    {name}
                </span>
            </div>
        </div>
    )
}

Category.defaultProps = {
    src: defaultCategory
}