import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
    return (
        <div className='my-[20px]'>
            <div className="container_main  bg-white py-[68px] rounded-md">
                <div className='flex justify-center items-center select-none'>
                    <div>
                        <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png" alt="Ảnh minh họa page not found" />
                    </div>
                    <div className='mx-10 mt-[52px]'>
                        <h1 className='text-[50px] text-main-bg font-[700]'>404</h1>
                        <span>Xin lỗi, trang này không tồn tại!</span>
                        <Link className=' text-blue-600 hover:text-blue-400 py-7 flex gap-2' to="/">
                            <BiArrowBack className='mt-1'/>
                            Quay lại trang chủ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;