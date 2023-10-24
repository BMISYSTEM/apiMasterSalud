import { lazy,LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyLoad/pages/NoLazy";


type JSXComponent = ()=> JSX.Element;
interface Route {
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}
// lazyload

const Lazy1 = lazy(()=> import(/*webpackChunckName: "lazyPage1"*/'../01-lazyLoad/pages/LazyPage'));
const Lazy2 = lazy(()=> import(/*webpackChunckName: "lazyPage2"*/'../01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(()=> import(/*webpackChunckName: "lazyPage3"*/'../01-lazyLoad/pages/LazyPage3'));
const LazyLayout = lazy(()=> import(/*webpackChunckName: "LazyLoyout"*/'../01-lazyLoad/layout/LazyLayout'));



export const routes:Route[] = [

    // sin lazyloading
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'NoLazy'
    },
    // con lazyloading
    {
        path:'/lazy/*',
        to:'/lazy/',
        Component: LazyLayout,
        name: 'lazy'
    },
]