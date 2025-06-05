import React from 'react';
import './certification.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { client } from '@/components/assets/client';

const CertificationHome = () => {
  return (
    <div className='w-10/12 h-auto flex flex-col gap-10 py-10 mb-20 bg-[#f3f8ff] rounded-2xl shadowBorder overflow-hidden'>
      <div className="text-3xl font-bold mb-4 text-gray-800 text-center">Certification Partners</div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper swiperCertificate"
      >
        {client.map((item, index) => (
          <SwiperSlide key={index} className='w-80 h-80 flex items-center justify-center bg-[#fff] p-6'>
            <Image src={item.image} alt={item.altText} width={300} height={300} className='w-full h-auto object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CertificationHome