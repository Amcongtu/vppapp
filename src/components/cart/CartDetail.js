import React from 'react';


import CartProductItem from './CartProductItem';

import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';



function CartDetail(props) {
    const {getTotalItems} = useContext(cartContext)
    

    var cart = JSON.parse( localStorage.getItem("cartItems"));
    
    const getCartItemCount = getTotalItems()

    const getCartProduct = cart.map((item,index)=>{
        
        return (<CartProductItem key={index} data={item}></CartProductItem>)
    })
   
    return (
        <div >
            <div className="container_main">
            
                {Number(getCartItemCount)>0 &&(
                    
                <div>
                    <div className='flex gap-2 my-4'>
                        <span className='block text-[#e54910] font-[600] text-[22px] leading-[26px] pl-5'>Giỏ hàng</span>
                        <span className="block text-[18px] font-[300] leading-[22px] text-[#e54910] my-auto">({getCartItemCount} sản phẩm)</span>
                </div>
                <div className="bg-white rounded-md ">
                        <div className='border-b-[1px] border-b-gray-200 py-4'>
                            <div className="grid grid-cols-8">
                                <div className="col-span-3">
                                    <span className='text-[#343434] text-[16px] font-[600] p-3 text-left'>
                                        Sản phẩm
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <span className='text-[#343434] text-[16px] font-[500] p-3 text-left'>
                                        Đơn giá
                                    </span>
                                </div>
                                <div className="col-span-2">
                                    <span className='text-[#343434] text-[16px] font-[500] p-3 text-left'>
                                        Số lượng
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <span className='text-[#343434] text-[16px] font-[500] p-3 text-left'>
                                        Số tiền
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <span className='text-[#343434] text-[16px] font-[500] p-3 text-left'>
                                    Thao tác
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            {getCartProduct}
                        </div>
                </div>
                </div>
                
                )}
                {(Number(getCartItemCount)<1)&&(
                    <div className='bg-white rounded-md p-5 flex justify-center items-center'>
                        <div className="flex gap-8">
                            <div><img src="https://cdn3d.iconscout.com/3d/premium/thumb/cart-5590712-4652404.png" alt="" className='w-full h-full select-none' /></div>
                            <div className='mt-[110px]'>
                                <div className='text-main-bg text-[42px] font-[700] my-4'>Giỏ hàng trống</div>
                                <div className='my-5'>Không có sản phẩm nào trong giỏ hàng của bạn.</div>
                                <Link to="/" className='text-blue-500 flex hover:text-blue-700'>
                                    <BsArrowLeftShort className='text-[20px] my-auto'/>
                                    Tiếp tục mua hàng
                                    </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          
            
            
        </div>
    );
}

export default CartDetail;