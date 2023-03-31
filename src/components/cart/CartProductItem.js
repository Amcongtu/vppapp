import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
function CartProductItem({data}) {
    const [quantity,setQuantity] = useState(Number(data.quantity))
    console.log(data)
    const { updateCart,checkProductQuantity } = useContext(cartContext);
    const handleQuantityChange = (productId, newQuantity) => {
        updateCart(productId, newQuantity);
        checkProductQuantity(productId);

    }
    const cashCalculation = (number,price)=>{
        return Number(number)*Number(price)
    }
    return (
        
            <div className="border-b-[1px] border-b-gray-200 mb-3">
            <div className="grid grid-cols-8">
                <div className="col-span-3">
                    <Link className="mx-4 my-1 h-[100px] w-[86px] inline-block hover:opacity-90" to={`/sanpham/${data.TENHH}`}>
                        <img src={`${data.HINHANH[0]}`} alt={`${data.TENHH}`} className='w-full h-full object-contain'/>
                    </Link>
                    <Link className='text-[14px] font-[500] leading-[22px] hover:text-main-bg align-top' to={`/sanpham/${data.TENHH}`}>
                        {data.TENHH}
                    </Link>
                </div>
                <div className="col-span-1">
                    <div className='px-2'>
                        <span className="block text-main-bg text-[18px] font-[600] leading-[22px]">{data.DONGIA.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                        <span className="block line-through text-[14px] leading-[21px] text-[#343434] py-1">82.000đ</span>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className='flex'>
                        <div className="text-main-bg hover:cursor-pointer my-auto text-[24px] select-none active:scale-95"><AiFillMinusCircle className='' onClick={()=>{if(Number(quantity)<=1){setQuantity(0)}else{setQuantity(Number(quantity)-1)};handleQuantityChange(data.id,Number(quantity-1))}}/></div>
                        <input type="text" className='mx-2 outline-[12px] outline-main-bg w-10 text-center bg-[#F7F4F4] rounded-md' value={quantity} min={0} onChange={e=>setQuantity(e.target.value)} />
                        <div className="text-main-bg hover:cursor-pointer my-auto text-[24px] select-none active:scale-95"><AiFillPlusCircle className='' onClick={()=>{setQuantity(Number(quantity)+1);handleQuantityChange(data.id,Number(quantity+1))}}/></div>
                    </div>
                </div>
                <div className="col-span-1">
                    <span className='text-[#343434] text-[16.75px] font-[700] p-3 text-left'>
                        {cashCalculation(quantity,data.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                    </span>
                </div>
                <div className="col-span-1">
                    <span className='text-main-bg text-[16px] font-[500] p-4 text-left select-none cursor-pointer active:text-[15.5px] hover:opacity-70'>
                        Xóa
                    </span>
                </div>

            </div>
        </div>
        
    );
}

export default CartProductItem;