import React from 'react';
import Image from 'next/image';
import './header.css';

const HeaderAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center lg:pt-30 md:pt-24 sm:pt-24 pt-10'>
            <Image src='/about/banner.png' alt='' width={1920} height={1080} className='w-full h-96 object-cover' />
            <div className='w-10/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 text-left text-base py-16'>
                <div className='col-span-2 w-full h-auto flex items-center justify-center text-justify'>
                    At Tech Pratham, our Founders bring a collective experience of 35 years in the IT industry. As esteemed alumni of top institutions, their deep industry expertise and forward thinking vision drive our programs. They have worked with top MNCs, gaining invaluable insights into the industry's needs and future. We are a forward to IT education institute dedicated to empowering individuals with the skills they need to thrive in the digital age.
                    <br /><br />
                    Our mission is to bridge the gap between traditional learning and the evolving demands of the tech industry by offering innovative, industry relevant training programs. What sets us apart is our commitment to creating a learning environment that is not only accessible but also engaging and impactful. With flexible schedules, expert mentorship, and real world project experience, we ensure every student is equipped to achieve their career goals.
                </div>
                <Image src='/about/mission.jpg' alt='' width={400} height={300} className='col-span-1 w-auto h-96 rounded-md shadow-md object-cover' />
            </div>

        </div>
    )
}

export default HeaderAbout