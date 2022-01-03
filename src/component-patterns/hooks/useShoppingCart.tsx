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
                const productInCart: ProductInCart = prevState[product.id] || {...product,count:0};

                if(Math.max(productInCart.count + count,0)>0){
                    productInCart.count += count;
                    return{
                        ...prevState,
                        [product.id] : productInCart
                    }
                }
                const {[product.id]: toDelete,...rest} = prevState;
                return {...rest};
            }
        );
    };

    return{
        shoppingCart,
        productCountChangeHandler
    };
};