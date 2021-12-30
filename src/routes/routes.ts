import {lazy, LazyExoticComponent} from 'react';
import NoLazy from '../lazyload/pages/NoLazy';

type JSXComponent =()=> JSX.Element;

interface Route {
    to: string,
    path: string,
    component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string
}

const LazyLayout = lazy(()=>import(/*webpackChunkName: 'LazyLayout'*/'../lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    }
];