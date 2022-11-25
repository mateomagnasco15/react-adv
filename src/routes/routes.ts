import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/components/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent 
}

export const routes : Route[] =  [
    {
        to: "/lazylayout",
        path: "/lazylayout",
        Component: lazy(() => import(/*webpackChunckName: "LazyLayout"*/"../01-lazyload/layout/LazyLayout")),
        name: "LazyLoading Nested"
    },
    {
        to: "/no-lazy",
        path: "/no-lazy",
        Component: NoLazy,
        name: "No Lazy Loading"
    },
];