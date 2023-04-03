import React from 'react';
import { Link } from 'react-router-dom';
import FetchAdress from './FetchAdress';

function CheckoutInf(props) {
    
    return (
        <div>
            <div className="bg-white rounded-md p-5">
                <span className="text-main-bg text-[18px] font-[500] block">Thông tin thanh toán</span>
                <span className='text-[#343434] text-[14px] leading-[22px] my-[14px] block'>
                Nếu bạn đã có tài khoản. Vui lòng <Link className='text-blue-700 hover:text-blue-500 cursor-pointer'>Đăng nhập</Link> / <Link className='text-blue-700 hover:text-blue-500 cursor-pointer'>Đăng ký</Link> để có thể nhận được các chương trình khuyến mãi hấp dẫn từ <Link className='text-main-bg cursor-pointer hover:opacity-70 font-bold   ' to={"/"}>ROSE</Link>.
                </span>
                <div className=''>
                    <input type="text" className="w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30]" placeholder='Họ tên' />
                    <div className='grid grid-cols-2 my-[14px] gap-5'>
                        <div className="col-span-1">
                            <input type="Email" className=' w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30]' placeholder='Email' />
                        </div>
                        <div className="col-span-1">
                            <input type="text" className=' w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30]' placeholder='Số điện thoại' />
                        </div>
                    </div>
                    <input type="text" className="w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30]" placeholder='Địa chỉ' />
                    <div>
                    <FetchAdress/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutInf;