import React, { useEffect, useState }  from 'react';
import HeaderAdmin from '../../components/admin/HeaderAdmin';
import { useParams, Link } from 'react-router-dom';


function EditOrderDetail(props) {
    const [active, setActive] = useState(4)
    const paramURLProduct = useParams()
   const [data,setData] = useState(null)
   const handleData = (name,value)=>{
    setData(prev=>{
        return {
            ...prev,
            [name]:value
        }
    })
   }
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
    // const handleItemQuantity=(quantity,)
    const handleQuantity = (id)=>{
        // const newdata = data.products.map(item=>{
        //     console.log(item.product._id === id);
        //     return item.product._id === id ? {...item,quantity: item.quantity+1} : item
        // })
        // setData(newdata)
        // console.log(data.products)
    }
    const handleCapnhat = async()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/order/${paramURLProduct.id}`,{
                method:"put",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
            })
            if(res.status===200){
                alert("Cập nhật thành công")
            }
            else if(res.status!==200){
                alert("Cập nhật thất bại")
            }
        } catch (error) {
            alert("Cập nhật thất bại")
            
        }
        
        // const dl = await res.json()
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
                {/* <div className="grid-col-1">{item.quantity}</div> */}
                <input type="number" min={1} value={item.quantity}className="grid-col-1" onClick={e=>{handleQuantity(item.product._id)}} />
                <div className="grid-col-1">{item.product.DONGIA.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                <div className="grid-col-1 text-red-500 font-[500] text-[16.75px]">{tt(item.quantity,item.product.DONGIA).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
            </div>
        )
    })
   console.log(data)
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
                    <div className="bg-white p-4 rounded-md shadow-md mb-2 flex justify-end"><button className=' px-4 py-2 text-white rounded-md font-[500] hover:scale-105 active:scale-95 bg-main-bg' onClick={()=>{
                        handleCapnhat()
                    }}>Cập nhật</button></div>

                    <div className="p-4 rounded-md shadow-md">

                        {(active===4)&&(
                            <div>

                                <div className="grid grid-cols-4 bg-white  border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.75px] font-[500]">Mã hóa đơn</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tên khách hàng</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Tổng tiền</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Trạng thái</div>
                                  
                                </div>
                                <div className="grid grid-cols-4 bg-white  border-b-[1px] border-b-gray-200 p-2">
                                    <div className="col-span-1 text-[16.25px] font-[400]">{data?._id}</div>
                                    <input value={data?.customer||""} onChange={(e)=>{handleData("customer",e.target.value)}} className="col-span-1 text-[16.25px] font-[400]"/>
                                    <div className="col-span-1 text-[16.25px] font-[500] text-red-500">{data?.total.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                                    <select
                                    name="status" id="status" 
                                    value={data?.status||""}

                                    onChange={(e) => handleData("status",(e.target.value))}
                                  >
                                        <option className="col-span-1 text-[16.25px] font-[400]" value={`pending`} >pending</option>
                                        <option className="col-span-1 text-[16.25px] font-[400]" value={`confirmed`}>confirmed</option>
                                        <option className="col-span-1 text-[16.25px] font-[400]" value={`delivered`} >delivered</option>
                                        <option className="col-span-1 text-[16.25px] font-[400]" value={`canceled`}>canceled</option>
                                    </select>
                                  
                                   
                                </div>
                                <div className="bg-white grid grid-cols-2 border-b-[1px] border-b-gray-200 p-2 mt-2">
                                    <div className="col-span-1 text-[16.75px] font-[500]">Địa chỉ</div>
                                    <div className="col-span-1 text-[16.75px] font-[500]">Số điện thoại</div>
                                </div>
                                <div className="bg-white grid grid-cols-2 border-b-[1px] border-b-gray-200 p-2">
                                    <input className="col-span-1 text-[16.75px] " onChange={(e)=>{handleData("diachi",e.target.value)}} value={data?.diachi}/>
                                    <input className="col-span-1 text-[16.75px] " onChange={(e)=>{handleData("sdt",e.target.value)}} value={data?.sdt}/>
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

export default EditOrderDetail;