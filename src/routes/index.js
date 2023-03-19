import defaultLayout from "../layouts/defaultLayout"
import home from "../pages/home/home"


const route = [
    {
        path:'/',
        element:home,
        layout:defaultLayout,
    },
    {
        path:'/:id',
        element:home,
        layout:defaultLayout,
    },
]

export default route 