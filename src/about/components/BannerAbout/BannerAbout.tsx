import { DotFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const BannerAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='col-span-1 flex flex-col gap-4 items-start justify-center'>
                    <div className='md:text-4xl sm:text-3xl text-xl font-bold'>Why Students Choose Us to Groom their Career</div>
                    <div className='text-base md:text-lg'>
                        Expand your career opportunities with India's most trusted IT institute. Get job-ready for an in-demand career. Choose from Multiple certification programs with us.
                    </div>
                    <div className="mt-4 grid gap-2">
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <DotFilledIcon className='mr-2' />
                            More than 68806+ Students Trained.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <DotFilledIcon className='mr-2' />
                            Team of 470+ Experienced & Certified Instructors.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <DotFilledIcon className='mr-2' />
                            250+ Collaboration with Universities & Companies.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <DotFilledIcon className='mr-2' />
                            ISO 9001:2015 Accredited Company.
                        </div>
                        <div className="text-base md:text-lg font-normal flex items-center">
                            <DotFilledIcon className='mr-2' />
                            Industry Recognised Verifiable Certificate.
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <Image src='/home/banner/banner.jpg' alt='' width={400} height={400} className='w-full h-auto transition-all rounded object-cover' />
                </div>
            </div>
        </div>
    )
}

export default BannerAbout