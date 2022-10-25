import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Course from "../../components/Course/Course";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Main from "../../layouts/Main";
import Login from "../../components/LogIn/LogIn/LogIn";
import SignUp from "../../components/SignUp/SignUp/SignUp";

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