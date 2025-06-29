import React from 'react';
import './testimonial.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';;

const TestimonialSection = ({ course }: any) => {

  const renderStars = (rating: any) => {
    return "★ ".repeat(rating);
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-[#f7f7f7] text-black overflow-hidden'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-2 items-center text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium capitalize">Our Testimonials</div>
      </div>
      <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center h-auto'>
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
          loop={true}
          modules={[Autoplay]}
          className="mySwiper testimonialStyle"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="w-80 h-auto flex flex-col gap-5 shadow-lg bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full flex flex-row items-start justify-start gap-2">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div className="flex flex-col text-left">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
              </div>
              <div className="w-full flex items-start text-left gap-2 mb-2">
                <span className='text-yellow-400 text-2xl'>{renderStars(testimonial.rating)}</span>
              </div>
              <div className="text-gray-700 leading-relaxed text-base text-left">{testimonial.testimonial}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialSection

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "2 June 2025",
    rating: 5,
    verified: true,
    testimonial: "Absolutely amazing service! The team went above and beyond to deliver exactly what I needed. Highly recommend!",
    avatar: "S",
    avatarColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Mike Chen",
    date: "1 June 2025",
    rating: 5,
    verified: true,
    testimonial: "Outstanding quality and fast delivery. This exceeded all my expectations. Will definitely use again!",
    avatar: "M",
    avatarColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Emma Wilson",
    date: "31 May 2025",
    rating: 4,
    verified: true,
    testimonial: "Great experience overall. Professional team and good communication throughout the project.",
    avatar: "E",
    avatarColor: "bg-purple-500"
  },
  {
    id: 4,
    name: "David Rodriguez",
    date: "30 May 2025",
    rating: 5,
    verified: true,
    testimonial: "Perfect! Everything was handled smoothly and the results speak for themselves. Top-notch service!",
    avatar: "D",
    avatarColor: "bg-red-500"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    date: "29 May 2025",
    rating: 5,
    verified: true,
    testimonial: "Incredible attention to detail and customer service. They made the whole process effortless.",
    avatar: "L",
    avatarColor: "bg-indigo-500"
  },
  {
    id: 6,
    name: "James Park",
    date: "28 May 2025",
    rating: 4,
    verified: true,
    testimonial: "Very satisfied with the outcome. Good value for money and professional approach throughout.",
    avatar: "J",
    avatarColor: "bg-orange-500"
  },
  {
    id: 7,
    name: "Anna Martinez",
    date: "27 May 2025",
    rating: 5,
    verified: true,
    testimonial: "Fantastic work! They understood my vision perfectly and delivered beyond my expectations.",
    avatar: "A",
    avatarColor: "bg-pink-500"
  },
  {
    id: 8,
    name: "Robert Kim",
    date: "26 May 2025",
    rating: 5,
    verified: true,
    testimonial: "Excellent service from start to finish. Professional, reliable, and high-quality results.",
    avatar: "R",
    avatarColor: "bg-teal-500"
  },
  {
    id: 9,
    name: "Jessica Brown",
    date: "25 May 2025",
    rating: 4,
    verified: true,
    testimonial: "Really happy with the service provided. Good communication and delivered on time as promised.",
    avatar: "J",
    avatarColor: "bg-cyan-500"
  },
  {
    id: 10,
    name: "Alex Turner",
    date: "24 May 2025",
    rating: 5,
    verified: true,
    testimonial: "Amazing experience! The team was responsive, creative, and delivered exactly what I was looking for.",
    avatar: "A",
    avatarColor: "bg-yellow-500"
  }
];