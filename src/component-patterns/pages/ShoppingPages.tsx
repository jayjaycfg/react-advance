import React from 'react';
import {ProductCard,ProductButtons, ProductImage, ProductTitle} from '../components';
import '../styles/custom-style.css';
import {Product} from '../interfaces/interfaces';
import {products} from '../data/products';
import {useShoppingCart} from '../hooks/useShoppingCart';

export interface ProductInCart extends Product{
    count: number;
}

export const ShoppingPages = () => {

    const{shoppingCart,productCountChangeHandler} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {
                    products.map(product=>(
                        <ProductCard
                            className='bg-dark text-white'
                            key={product.id}
                            onChange={productCountChangeHandler}
                            product={product}
                            value={shoppingCart[product.id]?.count || 0}>
                            <ProductImage
                                className='custom-image'/>
                            <ProductTitle
                                className='text-bold'/>
                            <ProductButtons
                                className='custom-buttons'/>
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                  Object.entries(shoppingCart).map(([key,shoppingElement])=>(
                      <ProductCard
                          className='bg-dark text-white'
                          key={key}
                          onChange={productCountChangeHandler}
                          product={shoppingElement}
                          style={{width:'100px'}}
                          value={shoppingElement.count}>
                          <ProductImage
                              className='custom-image'
                              style={{boxShadow: '10px 10px 10px rgba(0,0,0,.2)'}}/>
                          <ProductButtons
                              className='custom-buttons'/>
                      </ProductCard>
                  ))
                }
            </div>
        </div>
    );
};