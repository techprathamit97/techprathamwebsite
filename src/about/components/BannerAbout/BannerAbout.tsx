import Image from 'next/image'
import React from 'react'

const BannerAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='col-span-1 text-justify flex flex-col gap-4 items-start justify-center'>
                <div className='md:text-2xl text-xl md:font-semibold font-medium'>Why Students Choose Us to Groom their Career</div>
                    <div>
                        Expand your career opportunities with India's most trusted IT &i@nstitute. Get job-ready for an in-demand career. Choose from Multiple certification programs with us.
                    </div>
                    <div>
                        <div>More than 68806+ Students Trained.</div>
                        <div>Team of 470+ Experienced & Certified Instructors.</div>
                        <div>250+ Collaboration with Universities & Companies.</div>
                        <div>ISO 9001:2015 Accredited Company.</div>
                        <div>Industry Recognised Verifiable Certificate.</div>
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