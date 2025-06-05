import React from 'react';
import { teams } from './teams';
import Image from 'next/image';

const EducatorHome = () => {
  return (
    <div className='w-10/12 h-auto flex flex-col gap-10 items-center justify-center bg-white text-black py-20'>
      <div className='w-full h-auto flex flex-col text-center'>
        <div className="text-3xl font-bold text-gray-800">Meet Your Educators & Mentors</div>
        <div className="text-lg text-gray-600 capitalize">Learn from the cast knowledge of top faculty in the field of data science</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full items-center justify-center">
        {teams.map((item: any, index: any) => (
          <div key={index} className='flex flex-col bg-gray-300'>
            <Image src={item.image} alt={item.name} width={400} height={400} className='w-full h-64 transition-all rounded grayscale hover:grayscale-0' />
            <div className='flex flex-col items-center justify-center my-2'>
              <div className='font-semibold text-lg transition-all hover:underline cursor-pointer'>{item.name}</div>
              <div className='font-medium text-base text-[#1967d2]'>{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducatorHome