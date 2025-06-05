import { GlobeIcon } from '@radix-ui/react-icons';
import Image from 'next/image'
import React from 'react'

const CareerHome = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-white text-black'>

      <div className='w-full text-center flex flex-col items-center justify-center gap-10'>
        <div className="text-3xl font-bold text-gray-800">In Association With</div>
        <Image src='/home/career/association.svg' alt='Companies Associated' width={800} height={400} className='w-11/12 h-auto' />
      </div>

      <div className='w-10/12 h-auto flex flex-col text-center gap-10 py-10'>

        <div className='w-full h-auto flex flex-col text-center gap-2'>
          <div className="text-3xl font-bold text-gray-800">Climb your career ladder with world-class professional</div>
          <div className="text-lg text-gray-600 max-w-2xl mx-auto">Learn from industry experts and get certified by prestigious institutions</div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className='bg-blue-500 p-6 rounded-xl text-white flex flex-col items-start justify-center text-left gap-2 transform transition-all hover:scale-[1.025] cursor-pointer'>
            <GlobeIcon className='w-10 h-10 mb-4' />
            <div className='text-xl flex flex-col font-semibold'>
              <span>60+</span>
              <span>Case Studies & Assignments</span>
            </div>
            <div className='text-sm'>Work on 60+ Case Studies and Assignments with 24/7 Assignment support.</div>
          </div>
          <div className='bg-red-500 p-6 rounded-xl text-white flex flex-col items-start justify-center text-left gap-2 transform transition-all hover:scale-[1.025] cursor-pointer'>
            <GlobeIcon className='w-10 h-10 mb-4' />
            <div className='text-xl flex flex-col font-semibold'>
              <span>45+</span>
              <span>Industry Relevant Projects</span>
            </div>
            <div className='text-sm'>Get Industrial experience by working on our Industry Relevant Live Projects.</div>
          </div>
          <div className='bg-yellow-500 p-6 rounded-xl text-white flex flex-col items-start justify-center text-left gap-2 transform transition-all hover:scale-[1.025] cursor-pointer'>
            <GlobeIcon className='w-10 h-10 mb-4' />
            <div className='text-xl flex flex-col font-semibold'>
              <span>250+</span>
              <span>Tied-up with Companies</span>
            </div>
            <div className='text-sm'>Experience the Tied-up with 250+ companies to Provide Jobs to Many Students.</div>
          </div>
          <div className='bg-green-500 p-6 rounded-xl text-white flex flex-col items-start justify-center text-left gap-2 transform transition-all hover:scale-[1.025] cursor-pointer'>
            <GlobeIcon className='w-10 h-10 mb-4' />
            <div className='text-xl flex flex-col font-semibold'>
              <span>Job Readiness Program</span>
            </div>
            <div className='text-sm'>A dedicated placement cell for the participants who completed the course, connecting them with promising career opportunities.</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CareerHome