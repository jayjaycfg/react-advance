import {useState} from 'react';
import {OnChangeArgs} from '../interfaces/interfaces';
import {ProductInCart} from '../pages/ShoppingPages';

interface ShoppingCart {
    [key: string] : ProductInCart
}

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

    const productCountChangeHandler =({count,product}:OnChangeArgs)=>{
        setShoppingCart(prevState => {
            console.log(count);
                if( count === 0){
                    const {[product.id]: toDelete,...rest} = prevState;
                    return {...rest}
                }

                return {
                    ...prevState,
                    [product.id] : {...product, count}
                }
            }
        );
    };

    return{
        shoppingCart,
        productCountChangeHandler
    };
};