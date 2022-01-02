import React, {CSSProperties, useContext} from 'react';
import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';

export interface ProductButtonsProps {
    className?: string;
    style? : CSSProperties
}

/**
 * function to paint Product buttons
 * @constructor
 */
export const ProductButtons =({className, style}:ProductButtonsProps)=>{
    const {counter,increaseOrDecreaseHandler} = useContext(ProductContext);
    return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                className={`${styles.buttonMinus}`}
                onClick={()=>increaseOrDecreaseHandler(-1)}>-</button>
            <div className={`${styles.countLabel}`}>{counter}</div>
            <button
                className={`${styles.buttonAdd}`}
                onClick={()=>increaseOrDecreaseHandler(1)}>+</button>
        </div>
    )};