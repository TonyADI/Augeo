import React, { useState, useEffect } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { ProductList } from '../../components/ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import './Browse.css';

export const Browse = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);
    
    const retrieveCategories = () => {
        retrieveData('https://augeo-server.herokuapp.com/categories').then(data => {
            setCategories(data);
        })
    }

    const retrieveProducts = (name, orderBy ='duration') => {
        retrieveData(`https://augeo-server.herokuapp.com/categories/${encodeURI(name)}/products?orderBy=${orderBy}`)
        .then(data => {setProducts(data)});
    }

    const handleClick = name => {
        setCategory(name);
        retrieveProducts(name);
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

    const handleChange = e => {
        retrieveProducts(category, e.target.value);
    }

   return (
        <div className="browse-container">
            <div className="sortBy-container">
                <form className="filter-form">
                    <select className="cursor-pointer" id="filter" name="filter">
                        <option value="max">Max Buy-Now</option>
                    </select>
                </form>
                <form className="sortBy-form">
                    <select className="cursor-pointer" id="order-by" name="order-by" onChange={handleChange}>
                        <option value="duration">Duration</option>
                        <option value="current_ask">Current Ask</option>
                        <option value="initial_ask">Initial Ask</option>
                        <option value="buy_now">Buy Now</option>
                    </select>
                </form>
            </div>
            <div>
                <h1>
                    Categories
                </h1>
                <CategoryList 
                    categories={categories} 
                    handleClick={handleClick}
                />
            </div>
            <div className="browse-products">
                {category && 
                    <ProductList 
                        heading={category}
                        products={products}/>
                }
            </div>
        </div>
    )
}