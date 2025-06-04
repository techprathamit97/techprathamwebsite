import { Separator } from '@/components/ui/separator'
import React from 'react'
import { teams } from './teams'
import Image from 'next/image'

const EducatorHome = () => {
  return (
    <div className='w-10/12 h-auto flex flex-col gap-10 items-center justify-center bg-white text-black py-10'>
      <div className="text-3xl font-bold mb-4 text-gray-800 text-center">Our Team</div>
      <div className='flex flex-row flex-wrap items-center gap-10 md:justify-between justify-center'>
        {teams.map((item: any, index: any) => (
          <div key={index} className='flex flex-col gap-2'>
            <Image src={item.image} alt={item.name} width={400} height={400} className='w-80 h-80 transition-all rounded-full grayscale hover:grayscale-0' />
            <div className='flex flex-col items-center justify-center mt-2'>
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