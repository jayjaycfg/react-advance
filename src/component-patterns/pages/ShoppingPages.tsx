import React from 'react';
import {ProductCard,ProductButtons, ProductImage, ProductTitle} from '../components';
import '../styles/custom-style.css';

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
                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image
                        className='custom-image'
                    />
                    <ProductCard.Title
                        title='Look mom'
                        className='text-bold'
                    />
                    <ProductCard.Buttons
                        className='custom-buttons'
                    />
                </ProductCard>

                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage
                        className='custom-image'
                    />
                    <ProductTitle
                        className='text-bold'
                    />
                    <ProductButtons
                        className='custom-buttons'
                    />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,.2)'
                    }}/>
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }}/>
                    <ProductButtons
                        style={{
                        display: 'flex',
                        justifyContent:'end'
                    }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};