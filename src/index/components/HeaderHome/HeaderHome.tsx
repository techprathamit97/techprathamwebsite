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
import { Card } from '@/components/ui/card';

const HeaderHome = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-[#371414] to-[#D1090F] text-white overflow-hidden'>
            <div className='w-10/12 h-auto flex md:flex-row flex-col items-start gap-20 pt-16 pb-24'>
                <div className='w-8/12 flex flex-col gap-10'>
                    <div className='text-3xl font-bold'>India's <span className='text-[#f8da52]'>Leading Job oriented Project</span> based Upskilling platform.</div>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-xl font-bold text-[#f8da52]'>Our Mission</h2>
                        <p>1 Skill = 1 Job = 1 Family = 6 Person = Happy Life</p>
                        <p>Gain hands-on experience with real projects guided by industry experts</p>
                    </div>
                    <section className='text-white overflow-x-hidden h-auto w-full'>
                        <div className='flex nowrap whitespace-nowrap'>
                            <section className="message">
                                {certificate.map((item, index) => (
                                    <Card key={index}>
                                        <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-44 h-full object-cover' />
                                    </Card>
                                ))}
                            </section>
                            <section className="message mx-4">
                                {certificate.map((item, index) => (
                                    <Card key={index}>
                                        <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-44 h-full object-cover' />
                                    </Card>
                                ))}
                            </section>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col items-center justify-center min-w-96 h-auto'>
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