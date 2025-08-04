import React, { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

const ToolTip = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-auto flex flex-col items-center justify-center'>
            <div onClick={() => setIsOpen(!isOpen)} className='w-16 h-16 rounded-full shadow border border-[#dddedd] p-2 bg-white text-black fixed bottom-10 left-10 z-[100] grid place-content-center'>
                {!isOpen ? (
                    <Image src='/home/contact/call-us.png' alt='' width={50} height={50} className='w-full h-full object-cover' />
                ) : (
                    <Cross2Icon className='w-8 h-8' />
                )}
            </div>
            {isOpen && (
                <div className='w-auto flex flex-col gap-2 bottom-28 left-10 fixed z-[100]'>
                    <div className='w-full flex flex-row gap-2 items-center justify-center relative'>
                        <div className='w-16 h-16 rounded-full bg-white text-black shadow border border-[#dddedd] p-2'>
                            <Image src='/home/contact/whatsapp.png' alt='' width={50} height={50} className='w-full h-full object-cover' />
                        </div>
                        <p className='bg-black text-white px-2 py-1 rounded absolute left-20 w-auto text-nowrap'>Chat with us</p>
                    </div>
                    <div className='w-full flex flex-row gap-2 items-center justify-center relative'>
                        <div className='w-16 h-16 rounded-full bg-white text-black shadow border border-[#dddedd] p-2'>
                            <Image src='/home/contact/call-us.png' alt='' width={50} height={50} className='w-full h-full object-cover' />
                        </div>
                        <p className='bg-black text-white px-2 py-1 rounded absolute left-20 w-auto text-nowrap'>Call us now</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ToolTip