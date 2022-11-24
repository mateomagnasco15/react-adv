import { LazyPage3 } from "../01-lazyload/components/pages";
import { lazy, LazyExoticComponent} from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent 
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "Lazy 1 "*/"../01-lazyload/components/pages/LazyPage1"))
const Lazy2 = lazy(() => import("../01-lazyload/components/pages/LazyPage2"))


export const routes : Route[] =  [
    {
        to: "/lazy1",
        path: "/lazy1",
        Component: Lazy1,
        name: "Lazy-1"
    },
    {
        to: "/lazy2",
        path: "/lazy2",
        Component: Lazy2,
        name: "Lazy-2"
    },
    {
        to: "/lazy3",
        path: "/lazy3",
        Component: LazyPage3,
        name: "Lazy-3"
    },
];