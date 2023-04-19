import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../components/admin/HeaderAdmin';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function OrderDetail(props) {
    const [active, setActive] = useState(4)
    const paramURLProduct = useParams()
   const [data,setData] = useState(null)
    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch(`https://vppbackend.onrender.com/api/order/${paramURLProduct.id}`)
            const data =await response.json()
            setData(data)
        }

        getData()
        return ()=>{getData()}

    },[paramURLProduct.id])
    const tt = (dg,sl)=>{
        return Number(dg)*Number(sl)
    }
    const orderdetail = data?.products.map((item,index)=>{
        return (
            <div key={index} className="grid grid-cols-7 border-b-[1px] pb-2">
            <div className="grid-col-1 ">
                <div className="py-2 px-4 h-[100px]">
                <img src={item.product.HINHANH[0]} alt={item.product.MAHH} className='w-full h-full'/>

                </div>
            </div>
                <div className="grid-col-1">{item.product.MAHH}</div>
                <div className="grid-col-1">{item.product.TENHH}</div>
                <div className="grid-col-1">{item.product.DVT}</div>
                <div className="grid-col-1">{item.quantity}</div>
                <div className="grid-col-1">{item.product.DONGIA.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                <div className="grid-col-1 text-red-500 font-[500] text-[16.75px]">{tt(item.quantity,item.product.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
            </div>
        )
    })

    return (
        <div>
            <HeaderAdmin/>
            <div>
            <div className="grid grid-cols-10 p-2 gap-4">
                <div className="col-span-2">
                    <div className=" rounded-md shadow-md">
                        <div className={`${active===1?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(1)}}>Quản lý người dùng</div>
                        <div className={`${active===2?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(2)}}>Quản lý danh mục</div>
                        <div className={`${active===3 ?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(3)}}>Quản lý sản phẩm</div>
                        <Link to={"/admin"} className={`${active===4 ?'block text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` }  onClick={()=>{setActive(4)}}>Quản lý hóa đơn</Link>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className=" p-4 rounded-md shadow-md">
                        {(active===4)&&(
                            <div>
                                <div className="bg-white grid grid-cols-4 border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.75px] font-[500]">Mã hóa đơn</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tên khách hàng</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tổng tiền</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Trạng thái</div>
                                  
                                </div>
                                <div className="bg-white grid grid-cols-4 border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.25px] font-[400]">{data?._id}</div>
                                    <div className="col-span-1 text-[16.25px] font-[400]">{data?.customer}</div>
                                    <div className="col-span-1 text-[16.25px] font-[500] text-red-500">{data?.total.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                                    <div className="col-span-1 text-[16.25px] font-[400]">{data?.status}</div>
                                   
                                </div>
                                <div className="bg-white grid grid-cols-2 border-b-[1px] border-b-gray-200 p-2 mt-2">
                                    <div className="col-span-1 text-[16.75px] font-[500]">Địa chỉ</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Số điện thoại</div>
                                </div>
                                <div className="bg-white grid grid-cols-2 border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.75px] ">{data?.diachi}</div>
                                    <div className="col-span-1 text-[16.75px] ">{data?.sdt}</div>
                                </div>
                             
                               
                            
                            </div>
                             
                        )}
                        {(active!==4)&&(
                            <div>
                                Chức năng không có sẵn.
                            </div>
                        )}
                    </div>
                    <div className='bg-white p-4 rounded-md shadow-md mt-3'>
                        <div className="font-[500] text-[18px] text-red-500 ">Chi tiết hóa đơn</div>               
                        <div className='mt-3'>
                            <div className="grid grid-cols-7 border-b-[1px] pb-2 font-semibold">
                            <div className="grid-col-1 ">Hình</div>
                                <div className="grid-col-1">Mã hàng</div>
                                <div className="grid-col-1">Tên hàng</div>
                                <div className="grid-col-1">Đơn vị tính</div>
                                <div className="grid-col-1">Số lượng</div>
                                <div className="grid-col-1">Đơn giá</div>
                                <div className="grid-col-1">Thành tiền</div>
                            </div>
                          {orderdetail}
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default OrderDetail;