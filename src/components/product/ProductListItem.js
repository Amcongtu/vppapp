import React, { useEffect, useState } from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductListItem(props) {
  const [product, setProduct] = useState(null);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/product/products?page=${page}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        throw error;
      }
    };
   fetchProduct();
  }, [page]);
  const lengthProduct = product?.length
  const data = product?.map((item, index) => {
    return (
      <Link className="col-span-2 shadow-sm" key={index} to={`/sanpham/${item.TENHH}`}>
        <div className=" relative duration-200 cart-container">
          <div className="border-[1px] border-gray-100 cursor-pointer">
            <div className="w-[152px] h-[172px] mx-auto rounded-md mt-5 pt-1">
              <img
                src={item.HINHANH[0]}
                alt="Ảnh minh họa sản phẩm"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <span className=" px-[12px] text-[#343434] text-[16px] font-[500] text-left mx-auto line-clamp-1">
              {item.TENHH}
            </span>
            <div className="flex px-[12px] mt-[18px] mb-[8px] justify-between">
              <span className="block text-main-bg basis-full text-[20px] font-[700] ">
                {Number(item.DONGIA).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <div className="mt-1">
                <AiOutlineHeart className="text-[24px] active:scale-90 font-bold" />
              </div>
            </div>
            <div className="px-[12px] mt-[-4px] flex my-12">
              <div className=" bg-main-bg rounded-sm flex justify-center items-center text-[14px] select-none text-white font-[500] px-1 ">
                50%
              </div>
              <div className="line-through text-gray-500 text-[14px] px-2 font-[500] select-none">
                {Number(item.DONGIA).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          </div>
          <div className="absolute border-cart hidden duration-200 top-0 bottom-0 right-0 left-0  hover:cursor-pointer border-[2px] border-[#E54910]">
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#E54910] flex justify-between">
              <div className="px-[12px] my-auto text-white text-[17.75px] font-[400] select-none">
                Mua ngay
              </div>
              <div className="my-auto px-[12px] flex text-white text-[22px] pt-1 gap-4">
                <div className="">
                  <AiFillEye className=" active:scale-90 font-500" />
                </div>
                <div className="">
                  <AiOutlineShoppingCart className=" active:scale-90 font-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className="p-3  bg-white">
        {(lengthProduct>0)&&<div className="grid grid-cols-8  gap-2 ">{data}</div>}
        {(lengthProduct<1)&&<div className="h-[200px] flex justify-center items-center text-[30px] text-main-bg font-[500] rounded-md">Không có sản phẩm nào</div>}
    
      </div>
      <div className="flex justify-end pr-2 mb-3 mt-3 gap-3 text-main-bg">
        <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center  hover:cursor-pointer active:scale-90 hover:opacity-50">
          <AiFillCaretLeft />
        </div>
        <div className={`${page===1?"bg-main-bg text-white":" bg-white"} rounded-full w-8 h-8  shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50`} onClick={()=>{setPage(1)}}>
          1
        </div>

        <div className={`${page===2?"bg-main-bg text-white":" bg-white"} rounded-full w-8 h-8 shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50`} onClick={()=>{setPage(2)}}>
          2
        </div>

        <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50" onClick={()=>{setPage(3)}}>
          3
        </div>
        <div className="rounded-full w-8 h-8 bg-white shadow-md flex justify-center items-center hover:cursor-pointer active:scale-90 hover:opacity-50">
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
