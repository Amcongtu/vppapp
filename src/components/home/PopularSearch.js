import React from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

function PopularSearch(props) {
    return (
        <div>  
            <div className="container_main">
                <div className=" my-[10px] bg-white rounded-md ">
                    <div className='flex pt-[20px] pb-[15px] px-[20px] gap-2 '>
                        <div className=' bg-main-bg w-8 h-8 rounded-full mt-[-4px] flex justify-center items-center'>
                            <HiTrendingUp className='text-white text-[20px] ml-[-1px]'/>
                        </div>
                        <h2 className=' text-[18px] text-main-bg font-[700] '>Tìm kiếm phổ biến</h2>
                    </div>
                    <div className="grid grid-cols-5 ">
                        <div className="col-span-1 border-[1px] border-gray-100 h-[112px] flex justify-between items-center px-2 hover:cursor-pointer select-none">
                            <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2">Giấy Định Lượng 120</span>
                            <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                        </div>
                        <div className="col-span-1 border-[1px] border-gray-100 h-[112px] flex justify-between items-center px-2 hover:cursor-pointer select-none">
                            <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2">Milo Nắp Vặn 200ml</span>
                            <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                        </div>
                        <div className="col-span-1 border-[1px] border-gray-100 h-[112px] flex justify-between items-center px-2 hover:cursor-pointer select-none">
                            <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2">Con Dấu S830</span>
                            <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                        </div>
                        <div className="col-span-1 border-[1px] border-gray-100 h-[112px] flex justify-between items-center px-2 hover:cursor-pointer select-none">
                            <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2">Double A A4 70gsm</span>
                            <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                        </div>
                        <div className="col-span-1 border-[1px] border-gray-100 h-[112px] flex justify-between items-center px-2 hover:cursor-pointer select-none">
                            <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 pl-2">Giá Giấy A4 Double A 80gsm</span>
                            <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default PopularSearch;