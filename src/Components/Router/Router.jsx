import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../login/Login";
import Home from "../HomeLayout/Home";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import PrivateProvider from "../PrivateProvider/PrivateProvider";

const Router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProduct',
                element:<PrivateProvider><AddProduct></AddProduct></PrivateProvider>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

export default Router;