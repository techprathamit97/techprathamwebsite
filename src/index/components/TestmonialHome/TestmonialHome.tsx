import React from 'react';
import './testmonial.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { certificate } from '@/components/assets/certificate';
import Image from 'next/image';

const TestmonialHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-gradient-to-r from-[#371414] to-[#D1090F] text-white overflow-hidden'>
      <div className='w-10/12 h-auto flex flex-col items-center text-center'>
        <div className="text-2xl font-semibold capitalize">Our success lies in our learner's, success stories</div>
        <div className='w-1/2'>Explore our student's experiences and discover how we've healped them achieve their goals through excellence and dedications.</div>
      </div>
      <div className='w-10/12 flex flex-col items-center justify-center h-auto'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper swiperClient"
        >
          {certificate.map((item, index) => (
            <SwiperSlide key={index} className='shadow'>
              <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-80 h-full object-cover' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TestmonialHome