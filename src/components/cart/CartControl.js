import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartControl(props) {
    const { getTotalPrice,getTotalItems } = useContext(cartContext);
    const toltalPrice = Number(getTotalPrice())
    const TotalItems = Number(getTotalItems())
    const discount = Number(0)
    const toltalPriceCheck = ()=>{
        return toltalPrice-discount
    }
    return (
        <div className='my-5'>
            <div className='container_main bg-white rounded-md p-10 flex justify-end'>
               <div className=' border-[1.75px] rounded-md p-8 border-main-bg'>
                <div className=' w-[400px]'>
                        <div className='flex justify-between'>
                            <div className="text-[#343434] text-[14px] leading-[21px] my-auto">Tổng tiền ({TotalItems} sản phẩm):</div>
                            <div className="text-[#e54910] text-[20px] font-[500] leading-[28.875px] ">{toltalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                        </div>
                        <div className='flex justify-between my-3 border-b-[1px] border-b-gray-200 pb-2'>
                            <div className="text-[#343434] text-[14px] leading-[21px] my-auto">Chiết khấu (0%)</div>
                            <div className="text-[#e54910] text-[20px] font-[500] leading-[28.875px] ">{discount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className="text-[#343434] font-[700] text-[18px] leading-[21px] my-auto">Thành tiền:</div>
                            <div className="text-[#e54910] text-[22px] font-[600] leading-[28.875px] ">{toltalPriceCheck().toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                        </div>
                    </div>
                    <Link className='mt-5 select-none cursor-pointer active:scale-95 bg-main-bg font-[500] text-white rounded-md flex justify-center items-center py-2 hover:opacity-90' to="/thanh-toan">
                        Tiến hành đặt hàng
                    </Link>
               </div>
            </div>
        </div>
    );
}

export default CartControl;