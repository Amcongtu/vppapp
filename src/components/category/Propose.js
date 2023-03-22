import React from 'react';
import { Link } from 'react-router-dom';
function Propose(props) {
    return (
        <div className='my-[20px]'>
            <div className="container_main bg-white rounded-md">
                <div className="grid grid-cols-8">
                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://cdn.fast.vn/tmp/20211227104547-giay-in-giay-photo-va-cac-loai-kich-co-thuong-gap.jpg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px]  px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                            Giấy in văn phòng - Giấy photo chất lượng
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://fast.vn/assets/art-and-design.svg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px] px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                            Giấy in liên tục -In bill -Fax nhiệt
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://fast.vn/assets/art-and-design.svg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px] px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                                Giấy note - Giấy phân trang
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://cdn.fast.vn/tmp/20210729105243-cac-loai-decal-ghi-chu-huu-dung-nhieu-hinh-dang-kich-co.jpg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px]  px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                            Decal đế xanh - Decal đế vàng -Tomy
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://fast.vn/assets/art-and-design.svg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px] px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                                Giấy note - Giấy phân trang
                            </div>
                        </Link>
                    </div>

                    <div className="col-span-1">
                        <Link className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                            <div className='h-[64px] w-[90%] mx-auto mt-1 px-2 hover:text-main-bg '>
                                <img src="https://cdn.fast.vn/tmp/20211029204606-giay-than-cong-cu-nhan-doi-van-ban-anh-dai-dien.jpg" alt="Ảnh minh họa" className='w-full h-full' />
                            </div>
                            <div className="line-clamp-2 text-[12.6px] px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center">
                            Giấy than - Giấy kẽ ngang - Giấy Roky
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Propose;