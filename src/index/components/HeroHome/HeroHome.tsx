import Image from 'next/image';
import React from 'react';

const HeroHome = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden relative'>
            <video src='/home/hero/hero.mp4' className='w-full h-full absolute top-0 right-0 object-cover' autoPlay loop muted playsInline />
            <div className='absolute top-0 right-0 w-full h-full bg-[#0d0e1848] blur-xl'></div>

            <div className='w-11/12 h-16 md:pt-40 pt-24 flex flex-row items-start justify-end z-10'>
                <div className='w-auto h-full flex flex-row items-center justify-center gap-2 text-xl font-normal'>
                    <div>In Association with</div>
                    <Image src='/home/hero/logo/microsoft.svg' alt='microsoft logo' width={60} height={20} className='w-auto h-6' /> |
                    <Image src='/home/hero/logo/ibm.svg' alt='microsoft logo' width={60} height={20} className='w-auto h-6' />
                </div>
            </div>

            <div className='h-full w-11/12 z-10 py-10 flex flex-col items-start justify-end'>
                <div className='md:w-1/2 w-full lg:text-6xl md:text-5xl text-2xl font-semibold capitalize libre-baskerville-bold'>
                    ❝Our Mision is to <span className='text-orange-500'>build nation</span> through Education!❞
                </div>
                <div className='md:text-3xl text-xl md:mt-5 mt-2 font-normal'>That is Beyond Limitation</div>
            </div>
        </div>
    )
}

export default HeroHome
