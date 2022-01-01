import React, {useContext} from 'react';
import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';

/**
 * function to paint Product buttons
 * @constructor
 */
export const ProductButtons =()=>{
    const {counter,increaseOrDecreaseHandler} = useContext(ProductContext);
    return(
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={()=>increaseOrDecreaseHandler(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={styles.buttonAdd}
                onClick={()=>increaseOrDecreaseHandler(1)}>+</button>
        </div>
    )};