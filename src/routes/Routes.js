import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";

import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Faq from '../pages/Faq';
import AllProducts from "../pages/AllProducts";


// import AllProduct from "../pages/AllProduct";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)

            },
            {
                path: "/product/;id",
                element: <Product></Product>,
                
            },
            {
                path: "/allproducts",
                element: <AllProducts></AllProducts>,
                loader: () => fetch("http://localhost:5000/products"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/error",
                element: <ErrorPage></ErrorPage>,
            },
        ],
    },
]);