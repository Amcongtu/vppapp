import React from 'react';
import { useParams } from 'react-router-dom';

function Introduce(props) {
    const currentLink = useParams()
    return (
        <div>
            <div className="container_main">
                <div className="text-main-bg font-[600] text-[21px] leading-[21px]">
                    {currentLink.id}
                </div>
                <div className=' mt-[10px]'>
                    <img src="https://cdn.fast.vn/tmp/20230318133601-banner-danh-muc-1-01.jpg" alt="Ảnh minh họa banner" />
                </div>
                <div className='text-[#343434] my-[20px]'>
                    <h2 className=' text-[28px] font-[500] leading-[34px] mb-3'>Chuyên Cung Cấp Các Loại Giấy In, Giấy A4 Chất Lượng Chiết khấu Cao</h2>
                    <span className='line-clamp-4'>
                        Đặc biệt, với các loại giấy in A4, vì đây là loại giấy phục vụ rất nhiều cho công việc in ấn trong văn phòng hiện nay. Vậy nên, khi chọn mua các loại giấy A4 dùng trong in ấn bạn cần biết tiêu chuẩn để có thể mua đúng loại giấy bạn cần dùng. Fast chuyên cung cấp các loại giấy in ấn Giấy A4 Excel 70 Gsm, Giấy A4 Double A 70 Gsm, Giấy in bill tính tiền 8F (80x45mm), Giấy kraft (tờ) size A0, Decal Tomy mũi tên - 1cm - hình vuông, Decal A3 đế xanh giấy nhám (xấp 100 tờ), Giấy in bill tính tiền 8F dầy đặc biệt (80x65mm), Giấy scan Gateway 73gsm A4 (250 tờ), Giấy A0 - tờ, Giấy Fort màu 80 A3 Gsm...
                    </span>
                </div>
              
            </div>
        </div>
    );
}

export default Introduce;