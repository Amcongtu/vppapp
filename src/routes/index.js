import defaultLayout from "../layouts/defaultLayout"
import ProductList from "../pages/product/ProductList";

import home from "../pages/home/home"
import login from './../pages/login/login';
import category from './../pages/category/category';
import pageNotFound from './../pages/PageNotFound/pageNotFound';
import Productdetail from '../pages/product/ProductDetail';
import Cart from './../pages/cart/cart';
import Checkout from "../pages/checkout/Checkout";
import Admin from "../pages/admin/Admin";
import OrderDetail from "../pages/admin/OrderDetail";
import EditOrderDetail from "../pages/admin/editOrderDetail";


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
        element:Productdetail,
        layout:defaultLayout,
    },
    {
        path:'/dang-nhap',
        element:login,
        layout:null,
    }, 
    {
        path:'/gio-hang',
        element:Cart,
        layout:defaultLayout,
    },
    {
        path:'/thanh-toan',
        element:Checkout,
        layout:defaultLayout,
    },
    {
        path:'/sanpham',
        element:ProductList,
        layout:defaultLayout,
    },
    {
        path:'/admin',
        element:Admin,
        layout:null,
    }, 
    {
        path:'/admin/orderdetail/:id',
        element:OrderDetail,
        layout:null,
    }, 
    {
        path:'/admin/edit-orderdetail/:id',
        element:EditOrderDetail,
        layout:null,
    }, 
    {
        path:"*",
        element:pageNotFound,
        layout:defaultLayout
    }
]

export default route 