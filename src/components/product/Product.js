import React, { useState } from "react";
import FiterLeft from "./FiterLeft";
import ProductListItem from "./ProductListItem";

function Product(props) {
  const [filter, setFilter] = useState(1);

  return (
    <div className="container_main ">
      <div className="flex justify-between bg-white  rounded-md p-4 mb-3 shadow-sm">
        <div className="text-main-bg bg-[#fbf9f9] shadow-sm px-8 ml-1 py-2 rounded-md  text-[28px] font-[700] my-auto">
          Sản phẩm
        </div>
        <div className="my-auto ">
          <div className="flex bg-[#EDEDED] rounded-md py-2 px-4 gap-3">
            <div className="flex justify-center items-center  text-[#555555] text-[14px] leading-[21px] mr-5">
              Sắp xếp theo:
            </div>
            <div
              className={`flex justify-center items-center  active:scale-95 leading-[15px] shadow-sm py-2 px-3 cursor-pointer rounded-md ${
                filter === 1 ? "bg-main-bg text-white" : "bg-white text-[14px]"
              }  text-[14px] select-none `}
              onClick={() => {
                setFilter(1);
              }}
            >
              Liên quan
            </div>
            <div
              className={`leading-[15px] shadow-sm py-2 px-3  flex justify-center items-center cursor-pointer rounded-md  select-none active:scale-95 ${
                filter === 2 ? "bg-main-bg text-white" : "bg-white text-[14px]"
              } `}
              onClick={() => {
                setFilter(2);
              }}
            >
              Mới nhất
            </div>
            <div
              className={`leading-[15px] shadow-sm py-2 px-3 flex justify-center items-center  cursor-pointer rounded-md ${
                filter === 3 ? "bg-main-bg text-white" : "bg-white text-[14px]"
              } text-[14px] select-none active:scale-95`}
              onClick={() => {
                setFilter(3);
              }}
            >
              Bán chạy
            </div>
            <select className="leading-[15px] shadow-sm py-2 px-3 flex justify-center items-center  cursor-pointer rounded-md bg-white text-[14px] w-[180px] outline-none">
              <option value="">Giá</option>
              <option value="">Từ cao tới thấp</option>
              <option value="">Từ thấp tới cao</option>
            </select>
          </div>
        </div>
      </div>
      <div className="rounded-md mb-3">
        <div className="grid grid-cols-11 gap-4">
          <div className="col-span-3 bg-white h-fit  rounded-md shadow-sm">
            <FiterLeft />
          </div>
          <div className="col-span-8 shadow-sm">
            <ProductListItem />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
