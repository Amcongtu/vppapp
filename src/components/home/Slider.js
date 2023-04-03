import React from "react";
import "./Slider.scss";
import { AiFillClockCircle, AiFillGift } from "react-icons/ai";
import { MdLocalShipping, MdDiscount } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/less/autoplay";
import "swiper/css/autoplay";

function Slider(props) {
  return (
    <div className='select-none h-[342px] shadow-sm bg-[url("https://cf.shopee.vn/file/3d8d18abbf445264d2b06638653b364c")] mb-[22px] bg-[100%] bg-cover'>
      <div className="container_main">
        <div className="grid grid-cols-12 py-[30px] gap-[8px]">
          <div className="col-span-8">
            <Swiper
              className="h-[240px] rounded-md select-none"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  className="w-full h-full cursor-pointer"
                  src="https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9"
                  alt="Siêu sale"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-full cursor-pointer"
                  src="https://fast.vn/assets/banner-2023/banner_5.jpg"
                  alt="Banner sale"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-span-4">
            <div className="h-[240px]">
              <img
                src="https://fast.vn/assets/banner-2023/banner_1.jpg"
                alt="asd"
                className=" mb-[8px] h-[116px] w-full rounded-md"
              />
              <img
                src="https://fast.vn/assets/banner-2023/banner_8.jpg"
                alt="asd"
                className="h-[116px]  w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="ml-2 grid grid-cols-4 gap-5 mt-[-6px]">
          <div className="pl-0 col-span-1 gap-2 flex text-[18px] font-[500] opacity-95 text-[#343434]">
            <AiFillClockCircle className=" text-main-bg text-[32px] mt-[-4px]" />
            Giao hàng nhanh trong ngày
          </div>
          <div className="pl-[52px] col-span-1 gap-2 flex text-[18px] font-[500] opacity-95 text-[#343434]">
            <MdLocalShipping className=" text-main-bg text-[32px] mt-[-4px]" />
            Miễn phí giao hàng
          </div>
          <div className=" pl-[40px] col-span-1 gap-2 flex text-[18px] font-[500] opacity-95 text-[#343434]">
            <MdDiscount className=" text-main-bg text-[32px] mt-[-4px]" />
            Giảm giá
          </div>
          <div className="col-span-1 gap-2 flex text-[18px] font-[500] opacity-95 text-[#343434]">
            <AiFillGift className=" text-main-bg text-[32px] mt-[-4px]" />
            Quà tặng
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
