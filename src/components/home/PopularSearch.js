import React from 'react';
import { HiTrendingUp } from 'react-icons/hi';
function PopularSearch(props) {
    return (
        <div>
            <div className="container_main">
                <div className=" my-[10px] bg-white rounded-md h-[174px]">
                    <div className='flex pt-[20px] pb-[15px] px-[20px] gap-2 '>
                        <div className=' bg-main-bg w-8 h-8 rounded-full mt-[-4px] flex justify-center items-center'>
                            <HiTrendingUp className='text-white text-[20px] ml-[-1px]'/>
                        </div>
                        <h2 className=' text-[18px] text-main-bg font-[700] '>Tìm kiếm phổ biến</h2>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default PopularSearch;