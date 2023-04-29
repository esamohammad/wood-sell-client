import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Faq from "../pages/Faq";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Use from "../pages/Use";
import Main from "../layout/Main";
import Dashboard from "../pages/Dashboard";

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
                path: "/use",
                element: <Use></Use>
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