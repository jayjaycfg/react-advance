import {ProductCardProps} from '../components/ProductCard';
import {ProductTitleProps} from "../components/ProductTitle";
import {ProductImageProps} from "../components/ProductImage";
import {ProductButtonsProps} from "../components/ProductButtons";

export interface Product{
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number;
    increaseOrDecreaseHandler: (value: number)=>void;
    initialValues? : InitialValues;
    product: Product
}

export interface ProductCardHOCProps {
    (Props:ProductCardProps): JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product;
    count: number
}

export interface InitialValues {
    count: number;
    maxCount: number;
}

export interface ProductCardArgs {
    count: number;
    isMaxReached: boolean;
    product: Product;
    increaseOrDecreaseHandler: (value: number)=>void;
    reset:()=>void;
}