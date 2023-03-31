import defaultLayout from "../layouts/defaultLayout"
import home from "../pages/home/home"
import login from './../pages/login/login';
import category from './../pages/category/category';
import pageNotFound from './../pages/PageNotFound/pageNotFound';
import product from './../pages/product/product';
import Cart from './../pages/cart/cart';


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
        path:'/sanpham/:id',
        element:product,
        layout:defaultLayout,
    },
    {
        path:'/login',
        element:login,
        layout:null,
    }, 
    {
        path:'/gio-hang',
        element:Cart,
        layout:defaultLayout,
    },
    {
        path:"*",
        element:pageNotFound,
        layout:defaultLayout
    }
]

export default route 