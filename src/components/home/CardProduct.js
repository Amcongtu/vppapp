import React, { useEffect } from 'react';
import { AiOutlineHeart,AiFillEye,AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./cart.scss"
import { useState } from 'react';
function CardProduct(props) {
        const [dataCardProduct,setDataCartProduct] = useState([])
        useEffect(()=>{
            const handlerGetData = async()=>{
                  const res = await fetch(`${process.env.REACT_APP_SERVER}/category/${props.data.name}/products`)
                  const data = await res.json()
                  setDataCartProduct(data)
            }
            handlerGetData()
            return ()=>handlerGetData()
        },[])
        console.log(dataCardProduct)
    const data = dataCardProduct.map((item,index)=>{
        return (
            index<6 && <Link className="col-span-1 " key={index} to={`/sanpham/${item.TENHH}`}>
                <div className=' relative duration-200 cart-container'>
                    <div className='border-[1px] border-gray-100 cursor-pointer'>
                        <div className='w-[152px] h-[172px] mx-auto rounded-md mt-5 pt-1'>
                            <img src={item.HINHANH[0]} alt="Ảnh minh họa sản phẩm" className='w-full h-full object-contain rounded-md' />
                        </div>
                        <span className=' px-[12px] text-[#343434] text-[16px] font-[500] text-left mx-auto line-clamp-1'>{item.TENHH}</span>
                        <div className='flex px-[12px] mt-[18px] mb-[8px] justify-between'>
                            <span className='block text-main-bg basis-full text-[20px] font-[700] '>{Number(item.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span> 
                            <div className='mt-1'><AiOutlineHeart className='text-[24px] active:scale-90 font-bold'/></div>
                        </div>
                        <div className='px-[12px] mt-[-4px] flex my-12'>
                            <div className=' bg-main-bg rounded-sm flex justify-center items-center text-[14px] select-none text-white font-[500] px-1 '>50%</div>
                            <div className='line-through text-gray-500 text-[14px] px-2 font-[500] select-none'>{Number(item.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                        </div>
                        
                    </div>
                    <div className="absolute border-cart hidden duration-200 top-0 bottom-0 right-0 left-0  hover:cursor-pointer border-[2px] border-[#E54910]">
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#E54910] flex justify-between">
                            <div className='px-[12px] my-auto text-white text-[17.75px] font-[400] select-none'>
                                Mua ngay
                            </div>
                            <div className='my-auto px-[12px] flex text-white text-[22px] pt-1 gap-4'>
                                <div className=""><AiFillEye className=' active:scale-90 font-500'/></div>
                                <div className=""><AiOutlineShoppingCart className=' active:scale-90 font-500'/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className='my-[10px]'>
            <div className="container_main bg-white rounded-md ">

                <h2 className='text-[#4b5563] text-[18px] leading-[27px] font-[700] pt-[20px] pl-[20px] pb-[15px]'>{props.data.name}</h2>
                <div className="grid grid-cols-6">
                    {data}

                    

                   

                   

                   

                  
                  
        
                </div>
            </div>
        </div>
    );
}

export default CardProduct;