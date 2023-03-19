import defaultLayout from "../layouts/defaultLayout"
import home from "../pages/home/home"
import trangchitiet from "../pages/trangchitiet/trangchitiet"
import login from './../pages/login/login';


const route = [
    {
        path:'/',
        element:home,
        layout:defaultLayout,
    },
    {
        path:'/trangchitiet',
        element:trangchitiet,
        layout:defaultLayout,
    },
    {
        path:'/login',
        element:login,
        layout:null,
    },
]

export default route 