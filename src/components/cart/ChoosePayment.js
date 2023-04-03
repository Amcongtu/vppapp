import React from 'react';
import { FaCcAmazonPay, FaRegMoneyBillAlt } from 'react-icons/fa';

function ChoosePayment(props) {
    return (
        <div className='my-4 rounded-md bg-white p-4'>
            <div className="text-main-bg text-[18px] font-[500] mb-2">Phương thức thanh toán</div>
            <div className="mt-2">

                <div className='flex gap-5 my-1'>
                    <input type="radio" name="payment" id="payment_1" className=' cursor-pointer' checked={true}></input>
                    <div className='flex text-[#343434] '><FaRegMoneyBillAlt className='my-auto mr-2 text-green-600 text-[22px]'/> Thanh toán tiền mặt khi nhận hàng</div>
                </div>
                <div className='flex gap-5 my-1'>
                    <input type="radio" name="payment" id="payment_2" className='mt-[1.5px] cursor-pointer'></input>
                    <div className='flex text-[#343434] mt-[1px]'><FaCcAmazonPay className=' mt-[2px] my-auto mr-2 text-blue-700 text-[22px]'/> Thanh toán tiền mặt khi nhận hàng</div>
                </div>
            </div>
        </div>
    );
}

export default ChoosePayment;