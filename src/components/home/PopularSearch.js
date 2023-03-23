import React, { useContext } from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { searchContext } from '../../context/SerchContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function PopularSearch(props) {
    const {setSearchvalue} = useContext(searchContext)
   
    return (
        <div className='mb-10'>  
            <div className="container_main">
                <div className=" my-[10px] bg-white rounded-md ">
                    <div className='flex pt-[20px] pb-[15px] px-[20px] gap-2 '>
                        <div className=' bg-main-bg w-8 h-8 rounded-full mt-[-4px] flex justify-center items-center'>
                            <HiTrendingUp className='text-white text-[20px] ml-[-1px]'/>
                        </div>
                        <h2 className=' text-[18px] text-main-bg font-[700] '>Tìm kiếm phổ biến</h2>
                    </div>
                    <Slider autoplay={true} speed={1000} slidesToShow={4} dots={true}>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        <div>
                            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2" >Giấy Định Lượng 120</span>
                                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                            </div>
                        </div>
                        
                        
                    </Slider>

                </div>
            </div>
            
        </div>
    );
}

export default PopularSearch;