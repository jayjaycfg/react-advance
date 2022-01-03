import {useEffect,useState} from 'react';
import {OnChangeArgs, Product} from "../interfaces/interfaces";

interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs)=>void;
    value?: number
}

export const useProduct = ({onChange,product,value = 0}:UseProductProps) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value)
    }, [value]);


    const increaseOrDecreaseHandler = (value: number)=>{
        const newValue = Math.max( counter + value,0);
        setCounter(newValue );

        onChange && onChange({count: newValue, product});
    };

    return {counter,increaseOrDecreaseHandler};
};