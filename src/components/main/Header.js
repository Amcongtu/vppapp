import React, { useEffect, useState } from 'react';
import { RiFileList3Fill } from 'react-icons/ri';
import { FaBlog,FaRegBell } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiTrendingUp } from 'react-icons/hi';


import "./header.scss"
import { Link } from 'react-router-dom';


function Header(props) {
    const [openInput,setOpenInput] = useState(false)
    useEffect(()=>{
        function clickOutside(){
            setOpenInput(false)
        }
        document.addEventListener("click",clickOutside)
        return ()=>{
            document.removeEventListener("click",clickOutside)
        }
    },[])
 

    return (
        <div className='h-[96px] bg-gradient-to-b from-main-bg to-[#FF6533] shadow-md sticky top-0 z-50'>
            <div className="container_main ">
                <div className="justify-end flex gap-8 text-white p-1 text-[14px] select-none">
                    <div className='flex gap-1 mt-[2px] hover:cursor-pointer active:scale-90 hover:opacity-80'><RiFileList3Fill className='text-[16px] mt-[2px]'/>Nhận báo giá văn phòng phẩm NHANH HƠN</div>
                    <div className='flex gap-1 mt-[2px] hover:cursor-pointer active:scale-90 hover:opacity-80'><FaBlog className='text-[16px] mt-[2px]'/>Blogs</div>
                    <div className='flex gap-1 mt-[2px] hover:cursor-pointer active:scale-90 hover:opacity-80'><MdDiscount className='text-[16px] mt-[2px] '/>Chính sách ưu đãi</div>
                    <div className='flex gap-1 mt-[2px] hover:cursor-pointer active:scale-90 hover:opacity-80'><FaRegBell className='text-[16px] mt-[2px]'/>Thông báo</div>
                    <div className="border py-[2px] px-[8px] rounded-md hover:cursor-pointer active:scale-90 hover:opacity-80 font-[600] shadow-sm">ĐĂNG NHẬP</div>
                    <div className="border py-[2px] px-[8px] rounded-md ml-[-25px]  shadow-sm bg-[#ed2d1ccf] hover:cursor-pointer active:scale-90 hover:opacity-90 font-[600]">ĐĂNG KÝ</div>
                </div>
                <div  className='grid grid-cols-12 mt-[3px]'>
                    <div className='col-span-2 select-none'>
                        <Link className='col-span-2 h-[96px] w-[100px] mt-[-38px] flex' to='/'>
                            <img src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-coffee-rose-stationery-hand-drawn-elements-png-image_7076965.png" alt="Anh logo" className=' h-[100%]' />
                            <span className='text-white text-[44px] mt-[14px] underline font-bold ml-[-10px] z-20'>Rose</span>
                        </Link>
                    </div>
                    <div className='col-span-10 grid grid-cols-10 h-[35px] relative'>
                        <div className="col-span-9 flex"><div className=" bg-white flex justify-center items-center  hover:cursor-pointer w-[50px] rounded-l-md search z-50  hover:text-red-700 serachIconContainer"><FiSearch className='searchIcon text-[22px]'/>
                        </div>
                        <input className='flex-1 z-50 rounded-r-md h-9 focus:outline-none pr-4 focus:rounded-b-none searchInput' onClick={e=>{e.stopPropagation() ;setOpenInput(true)}}/>
                        {openInput && <>
                            <div className="px-[48px] py-[10px] absolute rounded-b-md z-50  shadow-sm bg-white top-[35px] w-[90%] border-t-gray-300 border-t-[1px] " onClick={e=>{e.stopPropagation();}} >
                                <div className="flex gap-2 mb-[12px]">
                                    <div className='w-6 h-6 mt-0 bg-main-bg flex justify-center items-center rounded-full'><HiTrendingUp className='text-white'/> </div>
                                    <span className="font-[500] text-[16px]">Tìm kiếm phổ biến</span>
                                </div>
                                <div className='grid grid-cols-4 gap-1
                                 text-[12px] text-[#242424]'>
                                    <div className=" col-span-1 m-2 p-1 bg-[#fafafa] border-[1px] rounded-md leading-[22px] justify-center flex items-center">lưỡi dao rọc giấy deli 30 độasdasdasdasdasdasd</div>
                                    <div className=" col-span-1 m-2 p-1 bg-[#fafafa] border-[1px] rounded-md leading-[22px] justify-center flex items-center">lưỡi dao rọc giấy deli 30 độasdasdasdasdasdasd</div>
                                    <div className=" col-span-1 m-2 p-1 bg-[#fafafa] border-[1px] rounded-md leading-[22px] justify-center flex items-center">lưỡi dao rọcdasdasdasd</div>
                                    <div className=" col-span-1 m-2 p-1 bg-[#fafafa] border-[1px] rounded-md leading-[22px] justify-center flex items-center">lưỡi dao rọc giấy deli 30 độasdasdasdasdasdasd</div>
                                    <div className=" col-span-1 m-2">123123</div>
                                    <div className=" col-span-1 m-2">123123</div>
                                    <div className=" col-span-1 m-2">123123</div>
                                    <div className=" col-span-1 m-2">123123</div>
                                    <div className=" col-span-1 m-2">123123</div>
                                   
                                </div>
                            </div>
                            <div className=' fixed top-[96px] left-0 right-0 bottom-0 bg-gray-500 opacity-30'></div>
                            </>
                    
                        
                       }
                        </div>      
                        <div className="relative col-span-1 flex justify-center items-center text-white active:scale-90 hover:text-red-700 hover:cursor-pointer pt-2 before:absolute before:content-['7'] before:text-[12px] before:items-center before:flex before:justify-center before:h-4 before:w-4 before:bg-white before:top-[2.3px] before:right-7 before:rounded-xl before:text-gray-500 before:font-[600]">
                            <AiOutlineShoppingCart className=' text-[24px] '/>
                        </div>
                    </div>

                </div>
                <div className="text-[12.25px] mt-[-20px] ml-[204px] text-white gap-4 flex font-bold">
                    <div className="">Túi giấy 2 quai</div>
                    <div className="">Sakura pen touch paint marker</div>
                    <div className="">Bìa ký kết hợp đồng</div>
                    <div className="">In giấy pelure</div>
                    <div className="">Decal dán số thứ tự</div>
                    <div className="">Milo nắp vặn 200mL</div>
                    <div className="">Con dấu s830</div>
                </div>
            </div>
        </div>
    );
}

export default Header;