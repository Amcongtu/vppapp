import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminComp(props) {
    const [active, setActive] = useState(4)
    // console.log(active)

    const [data,setData]=useState([])
    useEffect(()=>{
        const getOrder = async()=>{
            try{
                const response = await fetch(`${process.env.REACT_APP_SERVER}/order`)
                const data = await response.json()

                setData(data)

            }catch(err){
                throw err
            }
        }
        getOrder()
       return ()=>{ getOrder()}
    },[])
    const handleDeleteOrder = async(id)=>{
        await fetch(`${process.env.REACT_APP_SERVER}/order/${id}`, {
            method: 'DELETE'
        })
        window.location.reload()
    }
    const order = data?.map((item,index)=>{
        return <div key={index} className="grid grid-cols-5 border-b-[1px] border-b-gray-200 p-2">
            <Link to={`/admin/orderdetail/${item._id}`} className="col-span-1 hover:text-main-bg">{item._id}</Link>
            <div className="col-span-1">{item.customer}</div>
            <div className="col-span-1 text-main-bg text-[16.75] font-[500]">{item.total.toLocaleString('vi', {style : 'currency', currency : 'VND'})    }</div>
            <div className="col-span-1">{item.status}</div>
            <div className="col-span-1 flex">
                <Link to={`/admin/edit-orderdetail/${item._id}`} className="text-blue-500 hover:cursor-pointer hover:opacity-50">Sửa</Link>
                <div className="px-2">|</div>
                <div className="text-orange-500 hover:cursor-pointer hover:opacity-50" onClick={()=>{handleDeleteOrder(item._id)}}>Xóa</div>
            </div>            
        </div>
    })
    return (
        <div>
            <div className="grid grid-cols-10 p-2 gap-4">
                <div className="col-span-2">
                    <div className=" rounded-md shadow-md">
                        <div className={`${active===1?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(1)}}>Quản lý người dùng</div>
                        <div className={`${active===2?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(2)}}>Quản lý danh mục</div>
                        <div className={`${active===3 ?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` } onClick={()=>{setActive(3)}}>Quản lý sản phẩm</div>
                        <div className={`${active===4 ?'text-main-bg ':''}border-b-[1px] border-b-gray-200 px-2 py-3 select-none cursor-pointer hover:text-[16.5px] duration-100` }  onClick={()=>{setActive(4)}}>Quản lý hóa đơn</div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        {(active===4)&&(
                            <div>
                                <div className="grid grid-cols-5 border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.75px] font-[500]">Mã hóa đơn</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tên khách hàng</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tổng tiền</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Trạng thái</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Xử lý</div>
                                </div>
                                <div>
                                    {order}
                                </div>
                                
                            </div>
                        )}
                        {(active!==4)&&(
                            <div>
                                Chức năng không có sẵn.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminComp;