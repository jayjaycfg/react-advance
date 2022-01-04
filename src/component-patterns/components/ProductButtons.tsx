import React, {CSSProperties, useCallback, useContext} from 'react';
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
    const {counter,increaseOrDecreaseHandler,initialValues} = useContext(ProductContext);
    const max_count = initialValues?.maxCount;

    const isMaxReached = useCallback(
        () => !!max_count && counter === max_count,
        [counter,max_count],
    );


    return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                className={`${styles.buttonMinus}`}
                onClick={()=>increaseOrDecreaseHandler(-1)}>-</button>
            <div className={`${styles.countLabel}`}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={()=>increaseOrDecreaseHandler(1)}
                disabled={isMaxReached()}>+</button>
        </div>
    )};