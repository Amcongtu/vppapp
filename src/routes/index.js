import defaultLayout from "../layouts/defaultLayout"
import home from "../pages/home/home"
import login from './../pages/login/login';
import category from './../pages/category/category';
import pageNotFound from './../pages/PageNotFound/pageNotFound';


const route = [
    {
        path:'/',
        element:home,
        layout:defaultLayout,
    },
    {
        path:'/danhmuc/:id',
        element:category,
        layout:defaultLayout,
    },
    {
        path:'/login',
        element:login,
        layout:null,
    },
    {
        path:"*",
        element:pageNotFound,
        layout:defaultLayout
    }
]

export default route 