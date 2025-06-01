import React from 'react';

import './header.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { certificate } from '@/components/assets/certificate';
import Image from 'next/image';

const HeaderHome = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-[#371414] to-[#D1090F] text-white'>
            <div className='w-10/12 h-auto flex md:flex-row flex-col py-10'>
                <div className='w-full flex flex-col'>
                    <div className='text-2xl font-bold mt-4'>India's Leading Job Oriented Project Based Upskilling Platform.</div>
                    <div>
                        <h2>Our Mission</h2>
                        <p>1 Skill = 1 Job = 1 Family = 6 Person = Happy Life</p>
                        <p>Gain hands-on experience with real projects guided by industry experts</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-96 h-auto'>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper swiperHome"
                    >
                        {certificate.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-full h-full object-cover' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome