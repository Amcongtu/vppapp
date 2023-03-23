import React, { useContext } from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { searchContext } from '../../context/SerchContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} mr-4 z-10` }
        style={{ ...style, display: "block", background: "#FB5130", borderRadius:"100%" }}
        onClick={onClick}>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ml-4 z-10` }
        style={{ ...style, display: "block", background: "#FB5130",borderRadius:"100%" }}
        onClick={onClick}
      />
    );
  }
  

function PopularSearch(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const {setSearchvalue} = useContext(searchContext)
    const data = props.data.map((item,index)=>{
        return (
         <div>
            <div className="border-[1px]  border-gray-100 h-[112px]  flex justify-between items-center  px-2 hover:cursor-pointer select-none"  onClick={(e)=>{setSearchvalue(e.target.innerText)}} >
                <span className="block font-[500] text-[14px] text-[#343434] capitalize line-clamp-2 p-4" >{item.content}</span>
                <div className=''><BsSearch className=" text-[28px] mr-3"/></div>
            </div>
        </div>
    )
    })
    return (
        <div className='mb-10'>  
            <div className="container_main">
                <div className=" my-[10px] bg-white rounded-md ">
                    <div className='flex pt-[20px] pb-[15px] px-[20px] gap-2 '>
                        <div className=' bg-main-bg w-8 h-8 rounded-full mt-[-4px] flex justify-center items-center'>
                            <HiTrendingUp className='text-white text-[20px] ml-[-1px]'/>
                        </div>
                        <h2 className=' text-[18px] text-main-bg font-[700] '>Tìm kiếm phổ biến</h2>
                    </div>
                    <Slider {...settings}>
                       
                            {data}
                       
                       
                        
                        
                    </Slider>

                </div>
            </div>
            
        </div>
    );
}

export default PopularSearch;