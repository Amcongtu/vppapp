import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
    return (
        <div className='my-[10px]'>
            <div className="container_main">
                <div className='bg-white rounded-md'>
                    <h2 className=' pt-[20px] pb-[15px] px-[20px] text-[18px] text-gray-600 font-[700]'>Danh mục văn phòng phẩm</h2>
                    <div className="grid grid-cols-6">
                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-200 rounde4-sm flex flex-col" to="/danhmuc/Giấy In Ấn - Photo">
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122100125-gia%CC%82%CC%81y-in-a%CC%82%CC%81n-photo.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Giấy In Ấn - Photo</div>
                        </Link>

                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]   border-[1px] border-gray-200 rounded-sm flex flex-col" to="/danhmuc/Dụng Cụ Văn Phòng Chất Lượng" >
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122100048-do%CC%82%CC%80-du%CC%80ng-va%CC%86n-pho%CC%80ng-cha%CC%82%CC%81t-lu%CC%9Bo%CC%9B%CC%A3ng.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Dụng Cụ Văn Phòng Chất Lượng</div>
                        </Link>
                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-200 rounded-sm flex flex-col" to="/danhmuc/Bút Mực Chất Lượng">
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122095941-bu%CC%81t-mu%CC%9B%CC%A3c-cha%CC%82%CC%81t-lu%CC%9Bo%CC%9B%CC%A3ng-cao.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Bút Mực Chất Lượng</div>
                        </Link>
                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-200 rounded-sm flex flex-col" to="/danhmuc/Sổ - Tập - Bao Thư">
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122101554-so%CC%82%CC%89-ta%CC%A3%CC%82p-bao-thu%CC%9B.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Sổ - Tập - Bao Thư</div>
                        </Link>
                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-200 rounded-sm flex flex-col" to="/danhmuc/Băng Keo - Dao - Kéo">
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122095756-ba%CC%86ng-keo-dao-ke%CC%81o.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Băng Keo - Dao - Kéo</div>
                        </Link>
                        <Link className=" hover:opacity-80 duration-100 col-span-1 h-[132px]  border-[1px] border-gray-200 rounded-sm flex flex-col" to="/danhmuc/Máy tính casio">
                            <div className='w-[68px] h-[68px] rounded-full mb-1 mx-auto mt-4'>
                                <img src="https://cdn.fast.vn/tmp/20211122100147-ma%CC%81y-ti%CC%81nh-casio.png" alt="Ảnh minh họa" className='w-full h-full object-center'/>
                            </div>
                            <div className='text-[12px] text-center max-w-[80%] mx-auto line-clamp-1'>Máy tính casio</div>
                        </Link>
                       
                     
                      
                    </div>

                </div>
              
            </div>
        </div>
    );
}

export default Category;