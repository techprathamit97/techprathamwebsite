import React from 'react';
import { GoGoal } from "react-icons/go";
import { TbDeviceVisionProFilled } from "react-icons/tb";

const MissionAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center'>

                <div className='col-span-1 flex flex-col items-center justify-center p-4 rounded-md bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
                    <div className='bg-black text-white p-2 rounded-full w-16 h-16 flex items-center justify-center'>
                        <GoGoal className='w-12 h-12' />
                    </div>
                    <div className='md:text-3xl text-xl font-semibold pt-4'>Our Mission</div>
                    <div className='flex flex-col gap-3 pt-2'>
                        Our mission is to empower individuals with cutting-edge IT skills through innovative, hands-on training programs. We aim to bridge the gap between education and industry requirements, fostering a new generation of tech professionals who are prepared to excel in an ever evolving digital world.
                    </div>
                </div>
                <div className='col-span-1 flex flex-col items-center justify-center p-4 rounded-md bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
                    <div className='bg-black text-white p-2 rounded-full w-16 h-16 flex items-center justify-center'>
                        <TbDeviceVisionProFilled className='w-12 h-12' />
                    </div>
                    <div className='md:text-3xl text-xl font-semibold pt-4'>Our Vision</div>
                    <div className='flex flex-col gap-3 pt-2'>
                        To be a leading IT training provider, shaping a future where technology education empowers individuals to achieve their career aspirations and drives innovation in the digital world. Through our commitment to excellence, accessibility,lifelong learning, we aim to shape a future where technology education transforms lives and empowers communities worldwide.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionAbout