import React from 'react';

function OutputOrder(props) {
    return (
        <div className='my-5 bg-white rounded-md p-5'>
            <div className='text-main-bg text-[18px] font-[500] mb-2'>Xuất hóa đơn</div>
            <div className='text-[#343434] gap-4 flex'>
                <input type="checkbox" name="outOrder1" id="outOrder1" className='ml-1 cursor-pointer'/>
                <label htmlFor='outOrder1' className='block cursor-pointer'>Xuất hóa đơn cá nhân</label >
            </div>
            <div className='text-[#343434] gap-4 flex'>
                <input type="checkbox" name="outOrder2" id="outOrder2" className='ml-1 cursor-pointer'/>
                <label htmlFor='outOrder2'className='block cursor-pointer'>Xuất hóa đơn doanh nghiệp</label>
            </div>
        </div>
    );
} 

export default OutputOrder;