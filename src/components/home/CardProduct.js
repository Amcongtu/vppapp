import React from 'react';
import { AiOutlineHeart,AiFillEye,AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./cart.scss"
function CardProduct(props) {
    
    const data = props.data.map((item,index)=>{
        return (
            <Link className="col-span-1 " key={index} to={`/sanpham/${item.name}`}>
                <div className=' relative duration-200 cart-container'>
                    <div className='border-[1px] border-gray-100 cursor-pointer'>
                        <div className='w-[152px] h-[172px] mx-auto rounded-md mt-5 pt-1'>
                            <img src={item.image} alt="Ảnh minh họa sản phẩm" className='w-full h-full object-contain rounded-md' />
                        </div>
                        <span className=' line-clamp-1 px-[12px] text-[#343434] text-[16px] font-[500] block'>{item.name}</span>
                        <div className='flex px-[12px] mt-[18px] mb-[8px] justify-between'>
                            <span className='block text-main-bg basis-full text-[20px] font-[700] '>{item.discountPrice.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span> 
                            <div className='mt-1'><AiOutlineHeart className='text-[24px] active:scale-90 font-bold'/></div>
                        </div>
                        <div className='px-[12px] mt-[-4px] flex my-12'>
                            <div className=' bg-main-bg rounded-sm flex justify-center items-center text-[14px] select-none text-white font-[500] px-1 '>{item.discountPercent}%</div>
                            <div className='line-through text-gray-500 text-[14px] px-2 font-[500] select-none'>{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
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

                <h2 className='text-[#4b5563] text-[18px] leading-[27px] font-[700] pt-[20px] pl-[20px] pb-[15px]'>GIẤY IN VĂN PHÒNG - GIẤY PHOTO CHẤT LƯỢNG</h2>
                <div className="grid grid-cols-6">
                    {data}

                    

                   

                   

                   

                  
                  
        
                </div>
            </div>
        </div>
    );
}

export default CardProduct;