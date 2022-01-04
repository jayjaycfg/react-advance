import React, {createContext, CSSProperties} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from '../hooks/useProduct';
import {ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardArgs} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export interface ProductCardProps {
    children?: (args: ProductCardArgs)=>JSX.Element
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?:(args: OnChangeArgs)=>void;
    value?: number
    initialValues?: InitialValues
}


export const ProductCard = ({children,product, className,style, onChange, value,initialValues}:ProductCardProps) => {
    const {counter, isMaxReached ,increaseOrDecreaseHandler, reset }= useProduct({onChange,product, value, initialValues});

    return (
        <Provider value={{counter,increaseOrDecreaseHandler,product,initialValues}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children!({
                    count: counter,
                    isMaxReached,
                    product,
                    increaseOrDecreaseHandler,
                    reset
                })}
            </div>
        </Provider>
    );
};