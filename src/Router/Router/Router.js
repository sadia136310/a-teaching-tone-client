import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Course from "../../components/Course/Course";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Main from "../../layouts/Main";
import LogIn from "../../components/LogIn/LogIn/LogIn";
import Register from "../../components/Register/Register/Register";
import Category from "../../components/Category/Category";
import CheckOut from "../../components/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute";

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
        path:'/course',
        element:<Course></Course>,
        loader: () => fetch('https://a-teaching-tone-server.vercel.app/course')
       },
       {
        path:'/course/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://a-teaching-tone-server.vercel.app/course/${params.id}`)
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
        element:<LogIn></LogIn>
       },
       {
        path:'/register',
        element:<Register></Register>
       },
       {
        path:'/check/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params}) => fetch(`https://a-teaching-tone-server.vercel.app/check/${params.id}`)
     
       },

     


    ]
}
]);