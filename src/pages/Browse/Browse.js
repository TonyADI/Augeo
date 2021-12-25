import React, { useState, useEffect } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { ProductList } from '../../components/ProductList/ProductList';
import { retrieveData } from '../../utilities/projectAPI';
import './Browse.css';

export const Browse = props => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);
    
    const retrieveCategories = () => {
        retrieveData('https://tonyadi.loca.lt/categories').then(data => {
            setCategories(data);
        })
    }

    const retrieveProducts = name => {
        retrieveData(`https://tonyadi.loca.lt/categories/${encodeURI(name)}/products`).then(data => {
            setProducts(data)});
    }

    const handleClick = name => {
        setCategory(name);
        retrieveProducts(name);
    }

    // Dummy Categories to show functionality
    const dummyCategories = [{id: 1, name: 'iPhone 11', image_src: 
    'https://img.icons8.com/pastel-glyph/564/000000/iphone-x--v1.png'},
    {id: 2, name: 'HP Spectre x360', image_src: 'https://img.icons8.com/cotton/564/000000/laptop--v1.png'},
    {id: 3, name: 'G-Shock', image_src: 'https://img.icons8.com/officel/564/000000/apple-watch-apps.png'}]

    useEffect(() => {
        retrieveCategories();
    }, [])

    return (
        <div className="browse-container">
            <div className="sortBy-container">
                <span></span>
                <form className="filter-form">
                    <select className="cursor-pointer" id="filter" name="filter">
                        <option value="max">Max Buy-Now</option>
                    </select>
                    {/*<input type="submit"/>*/}
                </form>
                <form className="sortBy-form">
                    <select className="cursor-pointer" id="order-by" name="order-by">
                        <option value="duration">Duration</option>
                        <option value="current_ask">Current Ask</option>
                        <option value="initial_price">Initial Ask</option>
                        <option value="buy_now">Buy Now</option>
                    </select>
                    {/*<input type="submit"/>*/}
                </form>
            </div>
            {!categories ? <div>
                <div><h1>Dummy Categories</h1></div>
                <div><CategoryList categories={dummyCategories} handleClick={handleClick}/></div>
            </div>:
            <div>
                <div><h1>Categories</h1></div>
                <div><CategoryList categories={categories} handleClick={handleClick}/></div>
            </div>}
            <div>
                <div><h2>{category}</h2></div>
                <div className="browse-products">
                    {category && <ProductList products={products} authenticated={props.authenticated}/>}</div>
            </div>
        </div>
    )
}