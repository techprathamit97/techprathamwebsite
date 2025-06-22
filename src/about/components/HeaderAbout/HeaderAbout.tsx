import Image from 'next/image';
import React from 'react';

const HeaderAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-8 lg:pt-40 md:pt-24 sm:pt-24 pt-10'>
            <div className='px-4 py-1 rounded border-2 border-black text-black uppercase font-semibold'>
                About Us
            </div>
            <div className='w-9/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Our Mission is to build nation through education and beyond limitation.
            </div>
            <div className='w-10/12 text-center text-base md:text-lg'>
                At Tech Pratham, our Founders bring a collective experience of 35 years in the IT industry. As esteemed alumni of top institutions, their deep industry expertise and forward thinking vision drive our programs. They have worked with top MNCs, gaining invaluable insights into the industry's needs and future. We are a forward to IT education institute dedicated to empowering individuals with the skills they need to thrive in the digital age.
                <br /><br />
                Our mission is to bridge the gap between traditional learning and the evolving demands of the tech industry by offering innovative, industry relevant training programs. What sets us apart is our commitment to creating a learning environment that is not only accessible but also engaging and impactful. With flexible schedules, expert mentorship, and real world project experience, we ensure every student is equipped to achieve their career goals.
            </div>

            <Image src='/home/banner/banner.jpg' alt='' width={400} height={500} className='md:w-9/12 w-11/12 h-96 object-cover mt-8 rounded-t-3xl' />
        </div>
    )
}

export default HeaderAbout