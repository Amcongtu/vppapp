import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { HiKey } from 'react-icons/hi';
import { MdOutlinePowerInput, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=' bg-gray-200  border-[1px] border-gray-100 p-10 rounded-md shadow-lg'>
                <div className="text-main-bg text-[32px] text-center font-[700] -tracking-tighter mb-8">
                    Sign in
                </div>
                <div className="w-[400px] mb-8">
                    <div className='border-b-[1px] border-b-gray-400 my-4 flex relative'>
                        <FaUser className='top-1 absolute block left-0'/>
                        <input type="text"  className='block bg-transparent outline-none pb-1 pl-9 pr-20 w-full ' placeholder='Tên đăng nhập...'/>
                        <MdOutlinePowerInput className='top-1 absolute block right-0 text-[24px] cursor-pointer select-none active:scale-90'/>
                    </div>
                    
                    <div className='border-b-[1px] border-b-gray-400 my-4 flex relative'>
                        <HiKey className='top-[4px] absolute block left-0'/>
                        <input type="password"  className='block bg-transparent outline-none pb-1 pl-9 pr-20   w-full' placeholder='Mật khẩu...'/>
                        <AiFillEye className='top-1 absolute block right-8 text-[20px] mr-[1.25px] cursor-pointer select-none active:scale-90'/>
                        <MdPassword className='top-1 absolute block right-0 text-[20px] mr-[1.25px] cursor-pointer select-none active:scale-90'/>
                    </div>
                   
                </div>
                <Link to={"/"} className='block shadow-md p-1 bg-main-bg text-white font-[600] text-[22px] rounded-md text-center cursor-pointer select-none active:scale-90 duration-200 tracking-wide'>
                        Đăng nhập
                </Link>
            </div>
        </div>
    );
}

export default Login;