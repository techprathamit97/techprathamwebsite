import React from 'react';

import './clientHome.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { certificate } from '@/components/assets/certificate';
import Image from 'next/image';

const ClientHome = () => {
    return (
        <div className='w-10/12 h-auto flex flex-col items-center justify-center bg-white text-black'>
            <div className='w-full h-auto flex md:flex-row flex-col py-10'>
                Placement Client
            </div>
            <div className='flex flex-col items-center justify-center w-full h-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
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
                    className="mySwiper swiperClient"
                >
                    {certificate.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-80 h-full object-cover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ClientHome