import React from 'react';
import { teams } from './teams';
import Image from 'next/image';

const EducatorHome = () => {
  return (
    <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-10 items-center justify-center bg-white text-black py-20'>

      <div className='md:w-full w-11/12 h-auto flex flex-col text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Meet Your Educators & Mentors</div>
        <div className="md:text-lg text-base text-gray-600 md:max-w-2xl w-full mx-auto">Learn from the cast knowledge of top faculty in the field of data science</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full items-center justify-center">
        {teams.map((item: any, index: any) => (
          <div key={index} className='flex flex-col'>
            <Image src={item.image} alt={item.name} width={400} height={400} className='w-full h-64 object-cover transition-all rounded-lg grayscale duration-300 hover:grayscale-0' />
            <div className='flex flex-col items-center justify-center my-3'>
              <div className='font-semibold text-lg transition-all hover:underline cursor-pointer'>{item.name}</div>
              <div className='font-medium text-base text-[#CD4647]'>{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducatorHome