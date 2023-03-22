import React from 'react';
import { Link } from 'react-router-dom';
function Propose(props) {
    
    const data = props.data.map((item,index)=>{
        return (
            <div key={index} className="col-span-1">
                <Link to={`/danhmuc/`+`${item.name}`} className="border-x-[1px] border-gray-200 block py-2 hover:text-main-bg hover:border-[1px] hover:border-blue-500 hover:duration-150 container-propose text-[#343434]">
                    <div className='h-[68px] w-[76%] mx-auto mt-1 px-2 hover:text-main-bg '>
                        <img src={item.image} alt={item.name} className='w-full h-full' />
                    </div>
                    <div className="line-clamp-1 text-[12.6px]  px-[8px] py-1 flex justify-center items-center hover:text-main-bg text-center ">
                    {item.name}
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className='my-[20px]'>
            <div className="container_main bg-white rounded-md">
                <div className="grid grid-cols-8">
                    
                    {data}
                   
                </div>
            </div>
        </div>
    );
}

export default Propose;