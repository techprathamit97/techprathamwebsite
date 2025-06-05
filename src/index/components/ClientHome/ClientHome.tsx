import React from 'react';

import './clientHome.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { client } from '@/components/assets/client';

const ClientHome = () => {
    return (
        <div className='w-10/12 h-auto flex flex-col items-center justify-center py-20 gap-10 bg-white text-black'>
            <div className='w-full h-auto flex flex-col text-center'>
                <div className="text-3xl font-bold uppercase text-red-600">Placement Client</div>
            </div>
            <div className='flex flex-col items-center justify-center w-full h-auto'>
                <Swiper
                    slidesPerView={2}
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
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="swiperClient swiperClient"
                >
                    {client.map((item, index) => (
                        <SwiperSlide key={index} className='w-full h-auto p-4 flex items-center justify-center shadowBorder'>
                            <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-44 object-contain' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ClientHome