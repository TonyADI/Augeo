import React from 'react';
import defaultCategory from '../../utilities/images/default-category.png';
import './Category.css';

export const Category = props => {
    const handleClick = () => {
        props.handleClick(props.name)
    }
    return (
        <div className="category-container cursor-pointer" onClick={handleClick}>
            <div className="category-background">
                <img 
                    src={props.src} 
                    alt={`${props.name} category`}
                />
            </div>
            <div className="category-name">
                <span>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

Category.defaultProps = {
    src: defaultCategory
}