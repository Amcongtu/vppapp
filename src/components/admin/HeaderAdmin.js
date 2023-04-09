import React from 'react';

function HeaderAdmin(props) {
    return (
        <div>
            <div className="h-14 bg-main-bg text-white shadow-md">
                <div className="grid grid-cols-10">
                    <div className="col-span-2 flex  items-center my-auto">
                        <span className='text-[22px] font-[500] -tracking-tighter h-14 block leading-[3.5rem] ml-4'>Dashboard</span>
                        </div>
                    <div className="col-span-8">
                        <div className='flex leading-[3.5rem] justify-end mr-4 gap-5'>
                            <div className="">Thông báo</div>
                            <div className="">Thông tin cá nhân</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;