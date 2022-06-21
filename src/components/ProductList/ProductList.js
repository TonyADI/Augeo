import React, { useState, useEffect, useRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Product } from '../Product/Product';
import './ProductList.css';

export const ProductList = ({heading, disabled, products}) => { 
    const [width, setWidth] = useState(1000);
    const productListContainerRef = useRef(null);

    const updateWidth = () => {
        let innerDivWidth = productListContainerRef.current &&
                            productListContainerRef.current.firstChild && 
                            productListContainerRef.current.firstChild.firstChild &&
                            productListContainerRef.current.firstChild.firstChild.style &&
                            productListContainerRef.current.firstChild.firstChild.style.width;
        const innerDivWidthNum = parseInt((innerDivWidth && innerDivWidth.match(/(\d+)/) && 
                                           innerDivWidth.match(/(\d+)/)[0]));
        const newWidth = Math.floor(92/100 * window.innerWidth) > innerDivWidthNum ? 
                         innerDivWidthNum : 
                         Math.floor(92/100 * window.innerWidth);
        setWidth(newWidth)
    }
    
    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [products]);
    
    const Column = ({ index, data, style }) => (
        <div style={style}>
            <Product 
                id={data[index].id} 
                name={data[index].category_name} 
                imageSrc={data[index].product_img} 
                currentAsk={data[index].current_ask} 
                initialAsk={data[index].initial_price}
                disabled={disabled} 
                buyNow={data[index].buy_now} 
                duration={data[index].duration}
                key={data[index].id}
            />
        </div>
      );
  
      return(
          <div>
              <h2>{heading || 'Products'}</h2>
              <div className='product-list-container'
                   ref={productListContainerRef}>
                    {products ? 
                        products.length ?
                          <List
                            className="product-list"
                            height={375}
                            itemData={products}
                            itemCount={products.length}
                            itemSize={260}
                            layout="horizontal"
                            width={width}
                          >
                            {Column}
                          </List>
                              :
                        <div>No Products to display</div> 
                          :
                      <div>Server is currently down</div>}
              </div>
          </div>
      )
}