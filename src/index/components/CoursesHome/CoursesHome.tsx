import { Button } from '@/components/ui/button'
import { CalendarDays, ChevronRightIcon, Handshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaYoutube } from 'react-icons/fa';

interface Course {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
  shortDesc: string;
  level: string;
  rating: number;
  duration: string;
  description: string;
}

interface CoursesHomeProps {
  courses: Course[];
}

const CoursesHome: React.FC<CoursesHomeProps> = ({ courses }) => {
  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-[#f7f7f7] text-black'>

      <div className='md:w-full w-11/12 h-auto flex flex-col text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Trending Courses</div>
        <div className="md:text-lg text-base text-gray-600 md:max-w-2xl w-full mx-auto">Programs to Help you upskill which lands you to your Dream Job</div>
      </div>

      <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center h-auto'>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center pt-8">
          {courses.slice(0, 4).map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className="w-full max-w-sm h-auto flex flex-col p-2 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              <Image
                src={course?.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4 border border-[#dddedd]"
              />

              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600 font-medium">Rating </span>
                  <span className="text-yellow-500 text-2xl">★★★★★</span>
                  <span className="text-yellow-600 font-medium">{course.rating}</span>
                </div>
              </div>

              <div className="text-base font-semibold text-gray-800 leading-tight w-full">{course.title}</div>

              <div className="flex flex-col gap-1 items-start my-4">
                <div className="text-sm text-gray-800 flex flex-row gap-1 items-center justify-start">
                  <Handshake />
                  <span>100% Job Assistance</span>
                </div>
                <div className="text-sm text-gray-800 flex flex-row gap-1 items-center justify-start">
                  <CalendarDays />
                  <span>{course.duration}</span>
                </div>
                <div className="text-sm text-gray-800 flex flex-row gap-1 items-center justify-start">
                  <FaYoutube className='text-2xl' />
                  <span>Live Project</span>
                </div>
              </div>

              <Link href={`/courses/${course?.link}`} className='mt-auto'>
                <Button variant="manual" className="w-full">
                  View More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <Link href='/courses' className='mt-10'>
          <Button className='flex items-center justify-center text-base font-normal rounded-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] text-white'>
            <span>View More Courses</span>
            <ChevronRightIcon />
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default CoursesHome