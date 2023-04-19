import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FetchAdress from './FetchAdress';
import  { validateContext } from '../../context/Validate';

function CheckoutInf(props) {
    const {dcValue,sdtValue,setSDTValue, setDcValue,tenValue,setTenValue} = useContext(validateContext); 
    
    const [statusSDT,setStatusSDT] = useState(false)
    const [statusDC,setStatusDC] = useState(false)
    const [statusTen,setStatusTen] = useState(false)
    const [message,setMessage] = useState("")
    useEffect(()=>{
       
        if(dcValue!==""){
           

            setStatusDC(true)
        }
        else{
            
            if(sdtValue===""&&dcValue===""){
                setMessage("Ô tô đỏ là không được bỏ trống.")
    
            }

            setStatusDC(false)
        }
        if(tenValue!==""){
            setStatusTen(true)
        }
        else{
            setStatusTen(false)
        }
        if(sdtValue!==""){

            var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (vnf_regex.test(sdtValue) === true) {
                if(sdtValue===""||dcValue===""){
                    setMessage("Ô tô đỏ là không được bỏ trống.")
        
                }
                setStatusSDT(true)}
            else{

                if(sdtValue===""||dcValue===""){
                    setMessage("Ô tô đỏ là không được bỏ trống.")
        
                }
                setMessage("Số điện thoại không đúng định dạng")


                setStatusSDT(false)

            }
        }
        else{
            // setMessage("Ô tô đỏ là không được bỏ trống.")

            setStatusSDT(false)
        }
       
        
        
    
    },[dcValue,sdtValue,tenValue,message])
    // console.log(message)
    return (
        <div>
            <div className="bg-white rounded-md p-5">
                <span className="text-main-bg text-[18px] font-[500] block">Thông tin thanh toán</span>
                <span className='text-[#343434] text-[14px] leading-[22px] my-[14px] block'>
                Nếu bạn đã có tài khoản. Vui lòng <Link className='text-blue-700 hover:text-blue-500 cursor-pointer'>Đăng nhập</Link> / <Link className='text-blue-700 hover:text-blue-500 cursor-pointer'>Đăng ký</Link> để có thể nhận được các chương trình khuyến mãi hấp dẫn từ <Link className='text-main-bg cursor-pointer hover:opacity-70 font-bold   ' to={"/"}>ROSE</Link>. <strong className='text-[18px] leading-[30px]'>Lưu ý, các ô được tô đỏ là phải nhập.</strong> 
                </span>
                <div className=''>
                    <input type="text" className="w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px]" placeholder='Họ tên' value={tenValue} onChange={e=>{setTenValue(e.target.value)}} />
                    <div className='grid grid-cols-2 my-[14px] gap-5'>
                        <div className="col-span-1">
                            <input type="Email" className=' w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] border-[2px] border-gray-200 rounded-md  outline-[1.5px]' placeholder='Email' />
                        </div>
                        <div className="col-span-1">
                            <input type="text" className={`${!statusSDT?"outline-[2.75px] outline-[#FA4F30] outline":""} w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] rounded-md border-[2px] border-gray-200 `} placeholder='Số điện thoại' value={sdtValue} onChange={e=>{setSDTValue(e.target.value)}} />
                        </div>
                    </div>
                    <input type="text" className={`${statusDC===false?"outline-[2.75px] outline-[#FA4F30] outline":""} w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#495057] rounded-md border-[2px] border-gray-200 `} placeholder='Địa chỉ' value={dcValue} onChange={e=>{setDcValue(e.target.value)}} />
                    <div>
                    {!statusDC&&<div className='mt-2 text-main-bg'>{message}</div>}
                    {/* <FetchAdress/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutInf;