import React, { useEffect, useState } from 'react';

function FetchAdress(props) {
    const [quan,setquan] = useState(null)
    const [thanhPho,setThanhPho] = useState(null)
    const [huyen,sethuyen] = useState(null)
    useEffect(()=>{
        const getTinh = async()=>{
            const res = await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/district',{
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'token': '97617b3a-b132-11ed-9dc6-f64f768dbc22',   
                },
                body: JSON.stringify({
                    province_id: 202
                })
            })
            const {data} = await res.json()
            setquan(data)
        }
        getTinh()
        return ()=>getTinh()
    },[])
    const getHuyen = async(id)=>{
        const res = await fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${id}`,{
                method: 'get',
                headers: {
                    'Content-type': 'application/json',
                    'token': '97617b3a-b132-11ed-9dc6-f64f768dbc22',   
                },
                // body: JSON.stringify({
                //     district_id: id
                // })
            })
            const {data} = await res.json()
            sethuyen(data)
    }
    const checkTP = "TP. Hồ Chí Minh"
    return (
        <div className='mt-[14px]'>
            <div  className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <select name="" id="" onChange={(e)=>{setThanhPho(e.target.value)}} className='bg-white w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#444444] font-[400] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30] focus:border-[#FA4F30] cursor-pointer' disabled={thanhPho===checkTP?true:false}>
                        <option value="">Chọn thành phố</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    </select>            
                </div>
                <div className="col-span-1">
                    <select name="quan" id="quan" onChange={e=>getHuyen(e.target.value)} disabled={thanhPho?false:true}
                    className='bg-white w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#444444] font-[400] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30] focus:border-[#FA4F30] cursor-pointer'>
                        <option value="">Chọn Quận</option>
                        {quan?.map((item)=>(
                            
                            <option value={item.DistrictID
                            } key={item.DistrictID}>
                                {item.DistrictName}
                            </option>
                        ))}
                       
                    </select>
                </div>
                <div className="col-span-1">
                    <select name="huyen" id="huyen" disabled={huyen ? false : true} className='bg-white w-full py-[5.25px] px-[16px] leading-[22px] text-[14px] text-[#444444] font-[400] border-[2px] border-gray-200 rounded-md  outline-[1.5px] outline-[#FA4F30] focus:border-[#FA4F30] cursor-pointer'>
                        <option value="">Chọn vùng</option>
                        {huyen ?(
                            huyen.map(item=>(
                                <option value={item.WardCode} className="" key={item.WardCode}>
                                    {item.WardName}
                                </option>
                            ))
                        ):'Loading...'}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FetchAdress;