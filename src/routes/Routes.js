import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Faq from '../pages/Faq';
import AllProducts from "../pages/AllProducts";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../pages/Dashboard/ManageProduct/ManageProduct";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentList from "../pages/Dashboard/Payment/PaymentList";
import AllSeller from "../pages/Dashboard/AllSeller/AllSeller";
import AllBuyers from "../pages/Dashboard/AllBuyer/AllBuyer";


// import AllProduct from "../pages/AllProduct";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/error",
                element: <ErrorPage></ErrorPage>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: "/dashboard/manageproducts",
                element: <AdminRoute><ManageProduct></ManageProduct></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }, ,
            {
                path: '/dashboard/paymentsList',
                element: <AdminRoute><PaymentList></PaymentList></AdminRoute>,
                loader: () => fetch("http://localhost:5000/payments"),
            },
            {
                path: '/dashboard/allSeller',
                element: <AdminRoute><AllSeller></AllSeller>></AdminRoute>,
                
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
                
            }
        ]
    }
]);