import React from 'react';
import { useState } from 'react';

function ProductDetail(props) {
    const [activeThumnail,setActiveThumnail]= useState(1)
    return (
        <div className='mb-[20px]'>
            <div className="container_main bg-white p-[20px] rounded-md ">
                <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-2">
                        <div>
                            <div className='rounded-md h-[300px] p-2 select-none'>
                                <img src="https://vanphongpham.fast.vn/wp-content/uploads/2021/12/giay-A4-Excel-70gsm-1.jpg" alt="chua anh" className='w-full h-full rounded-md ' />
                            </div>
                            <div className="flex justify-center items-center gap-4 my-2 select-none">
                                <div className={`border-[1.25px]  ${activeThumnail==1?"border-red-700":"border-[#f48665bd]"}  active:scale-95 duration-200 p-1 hover:border-red-700 rounded-sm w-16 h-16 hover:cursor-pointer`}>
                                    <img src="https://vanphongpham.fast.vn/wp-content/uploads/2021/12/giay-A4-Excel-70gsm-1.jpg" alt="Anh minh hoa" className='w-full h-full rounded-sm' />
                                </div>
                                <div className='border-[1.25px] border-[#f48665bd] active:scale-95 duration-200 p-1 hover:border-red-700 rounded-sm w-16 h-16 hover:cursor-pointer'>
                                    <img src="https://vanphongpham.fast.vn/wp-content/uploads/2021/12/giay-A4-Excel-70gsm-1.jpg" alt="Anh minh hoa" className='w-full h-full rounded-sm' />
                                </div>
                                <div className='border-[1.25px] border-[#f48665bd] active:scale-95 duration-200 p-1 hover:border-red-700 rounded-sm w-16 h-16 hover:cursor-pointer'>
                                    <img src="https://vanphongpham.fast.vn/wp-content/uploads/2021/12/giay-A4-Excel-70gsm-1.jpg" alt="Anh minh hoa" className='w-full h-full rounded-sm' />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-span-3">asd</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;