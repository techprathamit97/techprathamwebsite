import React from 'react';
import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';

const BannerAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#000] text-white'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='col-span-1 flex flex-col gap-4 items-start justify-center'>
                    <div className='md:text-4xl sm:text-3xl text-xl font-semibold'>Why Students Choose Us to Groom their Career</div>
                    <div className='text-base md:text-lg font-light'>
                        Expand your career opportunities with India's most trusted IT institute. Get job-ready for an in-demand career. Choose from Multiple certification programs with us.
                    </div>
                    <div className="mt-4 grid gap-2">
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <CircleCheckBig className='mr-2 w-5 h-5 text-green-500' />
                            More than 68806+ Students Trained.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <CircleCheckBig className='mr-2 w-5 h-5 text-green-500' />
                            Team of 470+ Experienced & Certified Instructors.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <CircleCheckBig className='mr-2 w-5 h-5 text-green-500' />
                            250+ Collaboration with Universities & Companies.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <CircleCheckBig className='mr-2 w-5 h-5 text-green-500' />
                            ISO 9001:2015 Accredited Company.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <CircleCheckBig className='mr-2 w-5 h-5 text-green-500' />
                            Industry Recognised Verifiable Certificate.
                        </div>
                    </div>
                </div>
                <div className='col-span-1 w-full h-auto transition-all rounded border-4 border-red-600 object-cover boxShadow'>
                    <iframe width="100%" height="320" src='https://www.youtube.com/embed/4_qbhsjIB10' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="shadow-lg h-full"></iframe>
                </div>
            </div>
        </div>
    )
}

export default BannerAbout