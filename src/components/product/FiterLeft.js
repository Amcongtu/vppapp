import React from "react";
import { AiFillFilter } from "react-icons/ai";

function FiterLeft(props) {
  return (
    <div className="rounded-md">
      <div className="p-4 rounded-md">
        <div className="text-[16px] font-[600] text-[#343434] uppercase flex gap-3">
          <AiFillFilter className="flex justify-center items-center my-auto text-main-bg" />
          BỘ LỌC TÌM KIẾM
        </div>
        <div className="text-[14px] my-2 border-b-[1px] border-b-gray-300">
          <div className="p-1 ">
            <span className="block my-2 text-[16px]">Nơi Bán:</span>
            <div className="flex">
              <input type="checkbox" name="check1" id="check1" />
              <label
                htmlFor="check1"
                className="select-none px-3 py-1 cursor-pointer">
                Hà Nội
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check2" id="check2" />
              <label
                htmlFor="check2"
                className="select-none px-3 py-1 cursor-pointer"
              >
                TP. Hồ Chí Minh
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check3" id="check3" />
              <label
                htmlFor="check3"
                className="select-none px-3 py-1 cursor-pointer"
              >
                Cần Thơ
              </label>
            </div>
          </div>
        </div>
        <div className="text-[14px] my-2 border-b-[1px] border-b-gray-300">
          <div className="p-1 ">
            <span className="block my-2 text-[16px]">Đơn Vị Vận Chuyển:</span>
            <div className="flex">
              <input type="checkbox" name="check4" id="check4" />
              <label
                htmlFor="check4"
                className="select-none px-3 py-1 cursor-pointer">
                Hỏa tốc
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check5" id="check5" />
              <label
                htmlFor="check5"
                className="select-none px-3 py-1 cursor-pointer"
              >
                Giao hàng nhanh
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check6" id="check6" />
              <label
                htmlFor="check6"
                className="select-none px-3 py-1 cursor-pointer"
              >
                VNPost
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check7" id="check7" />
              <label
                htmlFor="check7"
                className="select-none px-3 py-1 cursor-pointer">
                Giao hàng tiết kiệm
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="check8" id="check8" />
              <label
                htmlFor="check8"
                className="select-none px-3 py-1 cursor-pointer">
                Ninja Van
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiterLeft;
