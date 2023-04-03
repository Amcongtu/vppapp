import React from 'react';
import { Link  } from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { useLocation } from 'react-router'
function BreadCrumb(props) {
//    decodeURIComponent(component)
   const location = useLocation();
   let currentLink = "";
   const crumbs = location.pathname.split("/")
    .filter(crumb=>crumb!=="")
    .map((crumb,index) =>{
        var name = decodeURIComponent(crumb)

        if(name==="danhmuc"){
            name = "Danh mục"
        }
        if(name==="sanpham"){
            name="Sản phẩm"
        }
        if(name==="gio-hang"){
            name="Giỏ hàng"
        }
        if(name==="thanh-toan"){
            name="Thanh toán"
        }
        currentLink +=`/${crumb}` 
        return (
            <div className='flex' key ={index}>
                <BsFillCaretRightFill className='mx-2 text-main-bg mt-1'/>
                <Link to={currentLink}>{name}</Link>
            </div>            
        )
    })

    return (
        <div>
            <div className='bg-white mb-6'>
                <div className="container_main ">
                    <div className='text-[#343434] text-[14px] leading-[20px] p-4  flex'>
                        <Link to="/">Văn phòng phẩm</Link>
                        {crumbs}
                        
                    </div>
            
                </div>
            </div>
            
        </div>
    );
}

export default BreadCrumb;