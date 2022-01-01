import React from 'react';
import {ProductCard,ProductButtons, ProductImage, ProductTitle} from '../components';


const product ={
    id: '1',
    title: 'Coffee - Mug',
    img:'./coffee-mug.png'
};

export const ShoppingPages = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title='Look mom'/>
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};