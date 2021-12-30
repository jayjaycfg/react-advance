import {lazy, LazyExoticComponent} from 'react';

type JSXComponent =()=> JSX.Element;

interface Route {
    to: string,
    path: string,
    component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string
}

const Lazy = lazy(()=>import(/*webpackChunkName: 'LazyPage'*/'../lazyload/pages/LazyPage'));
const Lazy1 = lazy(()=>import(/*webpackChunkName: 'LazyPage1'*/'../lazyload/pages/LazyPage1'));
const Lazy2 = lazy(()=>import(/*webpackChunkName: 'LazyPage2'*/'../lazyload/pages/LazyPage2'));

export const routes: Route[] = [
    {
        to: '/lazy',
        path: 'lazy',
        component: Lazy,
        name: 'Lazy'
    },
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy2'
    }
];