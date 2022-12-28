import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About/About";
import Home from "../Component/Home/Home";
import PostDataDetails from "../Component/Home/PostDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/posts/:id',
            element:<PrivateRoute><PostDataDetails/></PrivateRoute>,
            loader: async ({ params }) => {
                return fetch(`http://localhost:5000/posts/${params.id}`)
              }
        },
        {
            path:'/about',
            element:<About/>
        }
    ]
}
])
export default router