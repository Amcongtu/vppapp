import React, { useContext } from 'react';
import { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineHeart } from 'react-icons/ai';
import  { cartContext } from './../../context/CartContext';

function ProductDetail({data}) {
 
    const [quantity, setQuantity] = useState(1);
  
    const { addToCart } = useContext(cartContext); // lấy hàm addToCart từ context
  const handleAddToCart = () => {
    addToCart(data, quantity); // thêm sản phẩm vào giỏ hàng với số lượng là 1
  };

    const [activeThumnail,setActiveThumnail]= useState(0)
    const [imageProduct, setImageProduct] = useState(data?.HINHANH[0])


    const imageThumbnail = data?.HINHANH.map((item,index)=>{
        return(
            <div key={index} className={`border-[1.25px]  ${index===activeThumnail?"border-red-700":"border-[#f48665bd]"}  active:scale-95 duration-200 p-1 hover:border-red-700 rounded-sm w-16 h-16 hover:cursor-pointer`}>
                <img src={item} alt="Anh minh hoa" className='w-full h-full rounded-sm' onClick={e=>{setImageProduct(item);setActiveThumnail(index)}}/>
            </div>
        )
    })

    return (
        <div className='mb-[20px]'>
            <div className="container_main bg-white p-[20px] rounded-md ">
                <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-2">
                        <div>
                            <div className='rounded-md h-[300px] p-2 select-none'>
                                <img src={imageProduct} alt="chua anh" className='w-full h-full rounded-md ' />
                            </div>
                            <div className="flex justify-center items-center gap-4 my-2 select-none">
                                {imageThumbnail}
                                
                            </div>
                        </div> 
                    </div>
                    <div className="col-span-3">
                        <div>
                            <div className='font-[600] py-2'>
                                <span>Thương hiệu: </span>
                                <span className='text-main-bg'>Excel</span>
                            </div>
                            <h2 className='text-[#343434] font-[600] text-[22px] mb-4 mt-1'>{data?.TENHH}</h2>
                            <div className='gap-4 flex mb-[12px]'>
                                <span className='block text-[#e54910] text-[26px] font-[600]  leading-[36.75px]'>{data.DONGIA.toLocaleString('vi', {style : 'currency', currency : 'VND'})
                                }</span>
                                <span className='block text-[#343434] text-[14px] leading-[21px] line-through my-auto'>48.000đ</span>
                                <span className='my-auto  bg-[#f05a26] py-[2.75px] px-[6px] text-[11.75px] text-white font-[300] rounded-sm'>
                                    38%
                                </span>
                            </div>
                            <div className='flex mb-5'>
                                <div className='pr-4 my-auto'>Số lượng:</div>
                                <div className='gap-2 flex '>
                                    <div className='my-auto'>
                                        <AiFillMinusCircle className='select-none hover:opacity-90 text-main-bg text-[26px] active:scale-95 cursor-pointer' onClick={()=>{if(Number(quantity)<=1){setQuantity(1)}else{setQuantity(Number(quantity)-1)}}}/>
                                    </div>
                                    <input type="number" min={1}  value={quantity} onChange={e=>setQuantity(e.target.value)} className='w-[50px] pl-[12px] text-[14.75px] font-[500] text-center h-[34px] outline-none bg-[#f7f4f4] text-[#343434] rounded-md'/>
                                    <div className='my-auto'>
                                        <AiFillPlusCircle className='select-none hover:opacity-90 text-main-bg text-[26px] active:scale-95 cursor-pointer' onClick={()=>setQuantity(Number(quantity)+1)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5 select-none'>
                                <div className='border-[1px] border-[#e54910] rounded-md text-[16.75px] duration-150 text-[#e54910] px-[20px] py-[12px] font-[500] cursor-pointer active:scale-90 hover:bg-[#e54910] hover:text-white'>Mua ngay</div>
                                <div className='border-[1px] border-[#e54910] bg-[#e54910] hover:opacity-80 duration-150 text-white rounded-md text-[16.75px] px-[20px] py-[12px] font-[500] cursor-pointer active:scale-90' onClick={handleAddToCart}>Thêm vào giỏ hàng</div>
                                <div className='ml-2 flex text-[#858585] hover:text-main-bg cursor-pointer  active:scale-90 my-auto'>
                                    <div><AiOutlineHeart className='text-[32px]'/></div>
                                    <div className='text-[18px] leading-[21px] my-auto px-1'>Yêu thích</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;