import React, {useContext} from 'react';
import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';

/**
 * funtion to paint Product title
 * @constructor
 */
export const ProductTitle =({title}:{title?:string})=>{
    const{product} = useContext(ProductContext);
    const {title : titleToShow} = product;
    return (
        <span className={styles.productDescription}>
            {
                title
                    ? title
                    : titleToShow
            }
        </span>
    );
};