import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { cartContext } from '../../context/CartContext';
// import { useContext } from 'react';
// import { cartContext } from '../../context/CartContext';
function CartProductItem({data,so}) {
    const {updateCartItemQuantity } = useContext(cartContext);

    const [soluong,setsoluong] = useState(data.quantity)

    // const { updateCart,checkProductQuantity } = useContext(cartContext);
    const handlesoluongChange = (product, newsoluong) => {
        window.location.reload()

        if(Number(newsoluong)===0){
            window.location.reload()
        }
        setsoluong(newsoluong)
        updateCartItemQuantity(product, newsoluong);
    }
    const cashCalculation = (number,price)=>{
        return Number(number)*Number(price)
    }
    
    return (
        (Number(soluong)>0)&&
        <>
         <div className={`border-b-[1px] border-b-gray-200 mt-[10px]`}>
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
                        <div className="text-main-bg hover:cursor-pointer my-auto text-[24px] select-none active:scale-95">
                            <AiFillMinusCircle className='' onClick={()=>{handlesoluongChange(data,Number(soluong-1))}}/>
                        </div>
                        <input type="text" className='mx-2 outline-[12px] outline-main-bg w-10 text-center bg-[#F7F4F4] rounded-md' value={soluong} min={0} onChange={e=>setsoluong(e.target.value)} />
                        <div className="text-main-bg hover:cursor-pointer my-auto text-[24px] select-none active:scale-95">
                            <AiFillPlusCircle className='' onClick={()=>{handlesoluongChange(data,Number(soluong+1))}}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <span className='text-[#343434] text-[16.75px] font-[700] p-3 text-left'>
                        {cashCalculation(soluong,data.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                    </span>
                </div>
                <div className="col-span-1">
                    <span className='text-main-bg text-[16px] font-[500] p-4 text-left select-none cursor-pointer active:text-[15.5px] hover:opacity-70'>
                        Xóa
                    </span>
                </div>

            </div>
        </div>
        
        </>
       
    );
}

export default CartProductItem;