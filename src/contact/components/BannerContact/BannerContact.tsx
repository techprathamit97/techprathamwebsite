import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const BannerContact = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-10 gap-10 bg-black text-white'>
            <div className='w-10/12 h-auto flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between'>
                <div className='md:w-1/2 w-full flex flex-col gap-4 capitalize'>
                    <div className='lg:text-3xl md:text-2xl text-xl font-bold flex flex-col md:gap-2 gap-1'>
                        Stay Connected with Us!
                    </div>
                    <div>Follow our social media channels for the latest updates, events, and exclusive content. Don’t miss out—join our community today!</div>
                </div>
                <div className='md:w-1/2 w-full h-full flex flex-row flex-wrap items-center justify-center'>
                    <div className='w-full h-auto grid grid-cols-4 gap-8 place-items-center'>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                        <div className='w-24 h-24 flex items-center justify-center bg-white text-black rounded'>
                            <FaFacebook className='w-20 h-20' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerContact