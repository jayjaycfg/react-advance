import {useEffect, useRef, useState} from 'react';
import {InitialValues, OnChangeArgs, Product} from "../interfaces/interfaces";

interface UseProductProps {
    product: Product;
    onChange?: (args: OnChangeArgs)=>void;
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ({onChange,product,value = 0,initialValues}:UseProductProps) => {
    const [counter, setCounter] = useState( initialValues?.count || value);

    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current) return;

        setCounter(value)
    }, [value]);

    const reset =()=>{
        setCounter( initialValues?.count || value);
    };

    const increaseOrDecreaseHandler = (value: number)=>{
        const maxValueAllow = initialValues?.maxCount;
        const minValueAllow =  Math.max( counter + value,0);

        const newValue = maxValueAllow
            ? Math.min(minValueAllow,maxValueAllow)
            : minValueAllow;

        setCounter(newValue );

        onChange && onChange({count: newValue, product});
    };

    return {
        counter,
        isMaxReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        increaseOrDecreaseHandler,
        reset
    };
};