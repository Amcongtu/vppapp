import React from 'react';
import { BsMessenger } from 'react-icons/bs';

function IconChat(props) {
    return (
        <div>
            <div className="fixed w-[60px] h-[60px]  bottom-[42px] right-[32px] bg-[#0A7CFF] rounded-full items-center justify-center flex">
                <BsMessenger className='text-white text-[40px]'/>
            </div>
          
        </div>
    );
}

export default IconChat;