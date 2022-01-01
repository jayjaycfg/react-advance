import React, {createContext} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children,product}:ProductCardProps) => {
    const {counter, increaseOrDecreaseHandler }= useProduct(0);

    return (
        <Provider value={{counter,increaseOrDecreaseHandler,product}}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};