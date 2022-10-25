import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Course from "../../Course/Course";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Faq from "../../Faq/Faq";
import Home from "../../Home/Home";
import Main from "../../layouts/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../SignUp/SignUp/SignUp";

export const routes=createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
        path:'/',
        element: <Home></Home>
       },
       {
        path:'/home',
        element: <Home></Home>
       },
       {
        path:'/course/:id',
        element:<Course></Course>
       },
       
       {
        path:'/faq',
        element:<Faq></Faq>
       },
       {
        path:'/blog',
        element:<Blog></Blog>
       },
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/signup',
        element:<SignUp></SignUp>
       },

     


    ]
}
]);