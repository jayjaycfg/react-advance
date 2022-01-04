import React from 'react';
import {ProductCard,ProductButtons, ProductImage, ProductTitle} from '../components';
import '../styles/custom-style.css';
import {Product} from '../interfaces/interfaces';
import {products} from '../data/products';

export interface ProductInCart extends Product{
    count: number;
}

const product = products[0];

export const ShoppingPages = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <ProductCard
                className='bg-dark text-white'
                product={product}
                initialValues={{
                    count: 4,
                    maxCount:10
                }}>
                {
                    ({count,reset,isMaxReached,increaseOrDecreaseHandler})=>(
                        <>
                            <ProductImage className='custom-image'/>
                            <ProductTitle className='text-bold'/>
                            <ProductButtons className='custom-buttons'/>
                            <button onClick={reset}>reset</button>
                            <button onClick={()=>increaseOrDecreaseHandler(-2)}>-2</button>
                            {!isMaxReached && <button onClick={()=>increaseOrDecreaseHandler(+2)}>+2</button>}
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
};