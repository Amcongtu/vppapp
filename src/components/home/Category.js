import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
    const data = props.data.map((item,index)=>{
        return(index < 6 && (
            <Link key={index} className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-100 rounde4-sm flex flex-col" to={`/danhmuc/${item.name}`}>
            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                <img src={item.image} alt="Ảnh minh họa" className='w-full h-full object-center'/>
            </div>
            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>{item.name}</div>
            </Link>
        ))
    })
    return (
        <div className='my-[10px]'>
            <div className="container_main">
                <div className='bg-white rounded-md'>
                    <h2 className=' pt-[20px] pb-[15px] px-[20px] text-[18px] text-gray-600 font-[700]'>Danh mục văn phòng phẩm</h2>
                    <div className="grid grid-cols-6">
                        
                        {data}
                      
                    </div>

                </div>
              
            </div>
        </div>
    );
}

export default Category;