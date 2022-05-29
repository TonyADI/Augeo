import React from 'react';
import { Category } from '../Category/Category';


export const CategoryList = ({categories, handleClick}) => {
    return (
        <div className="category-list">
            {categories ? 
                categories.length ?
                    categories.map(category => 
                        <Category 
                            handleClick={handleClick} 
                            name={category.name} 
                            key={category.id}
                            src={category.image_src}
                        />
                    ) 
                :
                    <div>No categories to display</div> 
            : 
                <div>Server is currently down</div>
            }
        </div>
    );
}