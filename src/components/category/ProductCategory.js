import React, { useState } from 'react';
import { AiOutlineHeart,AiFillEye,AiOutlineShoppingCart, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


function ProductCategory({data}) {
    const product = data.map((item,index)=>{
        return (
            <div className="col-span-1 " key={index}>
                            <div className=' relative duration-200 cart-container border-[1px] border-gray-100'>
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
                    </div>
        )
    });

    const [active, setActive] = useState(1)
    return (
        <div>
            <div className="container_main">
                <div className="flex justify-end mt-[20px] select-none"> 
                    <div className="flex gap-4">
                        <div className={`hover:cursor-pointer ${active===1?'text-main-bg':''}`} onClick={()=>{
                            setActive(1)
                        }}>Phổ biến</div>
                        <div className={`hover:cursor-pointer ${active===2?'text-main-bg':''}`} onClick={()=>{
                            setActive(2)
                        }}>Giá cao</div>
                        <div className={`hover:cursor-pointer ${active===3?'text-main-bg':''}`} onClick={()=>{
                            setActive(3)
                        }}>Giá thấp</div>
                    </div>
                </div>
                <div className="grid grid-cols-6 mt-[20px] mb-[10px] bg-white">
                   {product}
                    



                </div>
                <div className="flex justify-end gap-3 text-main-bg">
                    <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center  hover:cursor-pointer active:scale-90 hover:opacity-50">
                        <AiFillCaretLeft/>
                    </div>
                    <div className="rounded-full w-8 h-8 bg-main-bg text-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50">
                        1
                    </div>

                    <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50">
                        2
                    </div>

                    <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50">
                        3
                    </div>
                    <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50">
                        <AiFillCaretRight/>
                    </div>

                </div>

            </div>
              
        </div>
    );
}

export default ProductCategory;