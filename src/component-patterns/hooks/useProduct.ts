import {useState} from 'react';

export const useProduct = (initialState: number) => {
    const [counter, setCounter] = useState(initialState);

    const increaseOrDecreaseHandler = (value: number)=>{
        setCounter(prevState => Math.max( prevState + value,0));
    };

    return {counter,increaseOrDecreaseHandler};
};