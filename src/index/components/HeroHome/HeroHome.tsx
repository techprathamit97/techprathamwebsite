import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

const HeroHome = () => {
    return (
        <div className='w-full h-[600px] flex flex-col items-center justify-center text-white overflow-hidden relative'>
            <video src='/home/hero/hero.mp4' className='w-full h-full absolute top-0 right-0 object-cover' autoPlay loop muted playsInline />
            <div className='absolute top-0 right-0 w-full h-full bg-[#0d0e1848] blur-xl'></div>

            <div className='h-full md:w-10/12 w-full z-10 py-20 flex flex-col justify-end'>
                <div className='w-auto lg:text-4xl md:text-3xl text-xl font-bold md:bg-transparent bg-[#1f1f1fd4] md:px-0 px-4'>
                    <span>India's Leading Job Oriented Project based Upskilling platform.</span>
                </div>
            </div>
        </div>
    )
}

export default HeroHome