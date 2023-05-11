import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard";
import Category from "../components/Category";
import Furnitures from "../pages/Furnitures";

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
                path: '/category/:id',
                element: <Furnitures></Furnitures>,
                loader:({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: "/products/:id",
                element: <Product></Product>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/login",
                element: <Login></Login>,
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