import Image from 'next/image'
import React from 'react'

const MainAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='md:col-span-1 text-justify'>
                    <div className='md:text-3xl text-xl md:font-sem
                     font-normal'>About Us</div>
                    <div>
                        At Tech Pratham, our Founders bring a collective experience of 35 years in the IT industry. As esteemed alumni of top institutions, their deep industry expertise and forward thinking vision drive our programs. They have worked with top MNCs, gaining invaluable insights into the industry's needs and future. We are a forward to IT education institute dedicated to empowering individuals with the skills they need to thrive in the digital age.
                        <br />
                        Our mission is to bridge the gap between traditional learning and the evolving demands of the tech industry by offering innovative, industry relevant training programs. What sets us apart is our commitment to creating a learning environment that is not only accessible but also engaging and impactful. With flexible schedules, expert mentorship, and real world project experience, we ensure every student is equipped to achieve their career goals.
                    </div>
                </div>
                <div className='col-span-1'>
                    <Image src='/home/banner/banner.jpg' alt='' width={400} height={400} className='w-full h-96 transition-all rounded object-cover' />
                </div>
            </div>
        </div>
    )
}

export default MainAbout