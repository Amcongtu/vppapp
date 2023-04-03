import React from "react";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/less/autoplay";
import "swiper/css/autoplay"
function SliderProduct() {
  return (
    <div className="container_main mt-[10px] mb-5">
      <Swiper
        className="h-[350px] rounded-md shadow-sm mt-[10px] mb-5 select-none"
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 1000,
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
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ce709113389695.60269c221352f.jpg"
            alt="Banner sale"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderProduct;
