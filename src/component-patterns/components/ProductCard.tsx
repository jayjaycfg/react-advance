import React, {createContext, CSSProperties, ReactElement} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from '../hooks/useProduct';
import {ProductContextProps, Product, OnChangeArgs} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface ProductCardProps {
    children?: ReactElement | ReactElement[]
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?:(args: OnChangeArgs)=>void;
    value?: number
}


export const ProductCard = ({children,product, className,style, onChange, value}:ProductCardProps) => {
    const {counter, increaseOrDecreaseHandler }= useProduct({onChange,product, value});

    return (
        <Provider value={{counter,increaseOrDecreaseHandler,product}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};