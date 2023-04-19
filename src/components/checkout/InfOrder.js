import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
// import { validateContext } from '../../context/Validate';
import  { validateContext } from '../../context/Validate';
function InfOrder(props) {
    var cart = JSON.parse( localStorage.getItem("cartItems"));
    const { getTotalPrice,getTotalItems } = useContext(cartContext);
    const toltalPrice = Number(getTotalPrice())
    const TotalItems = Number(getTotalItems())
    const discount = Number(0)

    const dataCart =cart.map((item,index)=>{
        return (
            <div key={index} className=' border-b-[1px] py-2 border-gray-200 '>
                    <div className='pb-3 grid grid-cols-7 gap-4 h-[100px]'>
                        <Link className="col-span-2 block hover:opacity-80 h-[100px]" to={`/sanpham/${item.TENHH}`}>
                            <img src={`${item.HINHANH[0]}`} alt={`${item.TENHH}`} className="w-full h-full p-1" />
                        </Link>
                        <Link className="col-span-3 block" to={`/sanpham/${item.TENHH}`}>
                            <span className='text-[#343434] text-[15px] hover:text-main-bg  font-[500] line-clamp-2 pt-1'>{item.TENHH}</span>
                        </Link>
                        <div className="col-span-2">
                            <div className="flex gap-3">
                                <div className=' pt-1'>
                                    <div className="text-main-bg text-[16px] font-[500]">{item.DONGIA.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                                    <div className="line-through text-[#343434] text-[14px] font-[400]">93.600 đ</div>
                                </div>
                                <div className='my-auto text-[#343434]'>x{item.quantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })
    const [status,setStatus] = useState(false)
    const {dcValue,sdtValue,tenValue} = useContext(validateContext); 

    // const [dathang,setDatHang] = useState(false)
    const createForm = async()=>{
        const products=cart.map(item => ({ product: item._id, quantity: item.quantity,price: Number(item.DONGIA)*Number(item.quantity) }));
        try{
           
            const res = await fetch(`${process.env.REACT_APP_SERVER}/order`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  customer: tenValue,
                  sdt:sdtValue,
                  diachi:dcValue,
                  products: products
                })
              })
              if(res.status===201){
                alert("Đặt hàng thành công")

              }
              else{
                alert("Đặt hàng thất bại")

              }
            //   if(res.status===){

            //   }
            
    
        }
        catch(error){
         alert("Đặt hàng thất bại")

        }
    }
    useEffect(()=>{
        if(dcValue !==""&&sdtValue!==""){
            setStatus(true)
        }
        else{
            setStatus(false)
        }
        
    
    },[dcValue,sdtValue])
    
    return (
        <div>
            <div className='bg-white rounded-md'>
                <div className="flex justify-between p-4 mb-[-4px]">
                    <div className="text-[#e54910] text-[18px] font-[500]">Thông tin đơn hàng</div>
                    <Link className="block text-[#e54910] text-[14px] leading-[22px] active:scale-95 hover:opacity-70" to={"/gio-hang"}>Sửa</Link>
                </div>
                <div className="mb-4">
                    {dataCart}
                </div>
                <div className="mb-4">
                    <div className="flex justify-between px-8 my-2">
                        <div className="text-[#343434] text-[14px]">Tổng tiền ({TotalItems} sản phẩm)</div>
                        <div className="font-bold">{toltalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                    <div className="flex justify-between px-8 my-2">
                        <div className="text-[#343434] text-[14px]">Chiết khấu (0%):</div>
                        <div className="">{discount.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                    <div className="flex justify-between px-8 my-2">
                        <div className="text-[#343434] text-[14px]">Phí vận chuyển:</div>
                        <div className="">{Number(0).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                    <div className="flex justify-between px-8 my-2">
                        <div className="text-main-bg text-[18px] font-bold my-2">Tổng thanh toán:</div>
                        <div className="text-main-bg text-[22px] font-bold ">{toltalPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    </div>
                </div>
                <div className='mb-1 p-5'>
                    <span className='block text-[#343434] text-[14px]'>Ghi chú:</span>
                    <textarea name="" id="" rows="5" className='border-[1px] w-full block mt-3 p-2 text-[#343434] text-[14px] outline-main-bg' placeholder='Ghi chú cho đơn hàng....'></textarea>
                </div>
                <div className='p-5 mt-[-12px]'>
                    {(status ?<> <div className="text-white text-[18px] rounded-md select-none p-2 hover:opacity-90 active:scale-95 cursor-pointer font-[500] flex justify-center items-center bg-main-bg"  onClick={()=>{createForm()}}>ĐẶT HÀNG</div></>:<div className="text-white text-[18px] rounded-md select-none p-2  active:scale-95 font-[500] cursor-not-allowed flex justify-center items-center bg-slate-500">Đặt hàng</div> )}
                    {/* {(!status && )} */}
                    {/* {dathang &&<>thành công</>} */}

                   
                </div>
            </div>
        </div>
    );
}

export default InfOrder;