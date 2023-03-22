import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

function ScrollToTop(props) {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(()=>{
        const scrollEvent = ()=>{
            if(window.scrollY>150){
                setBackToTop(true);
            }
            else{
                setBackToTop(false);
            }
        }
        window.addEventListener("scroll",scrollEvent)

        
    } ,[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <div>
            {
                backToTop && 
                <div className=' fixed  bottom-[116px] right-[40px] rounded-full w-12 h-12 z-50 bg-gray-300 cursor-pointer active:scale-95 flex justify-center items-center shadow-lg text-main-bg' onClick={scrollUp}>
                    <BiArrowToTop className='font-bold text-main-bg text-[22px]'/>
                </div>
            }
        </div>
    );
}

export default ScrollToTop;