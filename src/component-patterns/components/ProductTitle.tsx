import React, {CSSProperties, useContext} from 'react';
import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

/**
 * funtion to paint Product title
 * @constructor
 */
export const ProductTitle =({title,className, style}:ProductTitleProps)=>{
    const{product} = useContext(ProductContext);
    const {title : titleToShow} = product;
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {
                title
                    ? title
                    : titleToShow
            }
        </span>
    );
};