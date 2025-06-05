import React from 'react';
import Image from 'next/image';
import { GlobeIcon } from '@radix-ui/react-icons';

const CareerHome = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-white text-black'>

      <div className='w-full text-center flex flex-col items-center justify-center gap-10'>
        <div className="md:text-3xl text-2xl md:font-bold font-medium text-gray-800">In Association With</div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-11/12 justify-items-center items-center'>
          <Image src='/home/career/mcagi.png' alt='Companies Associated' width={800} height={400} className='w-32 h-24 object-contain' />
          <Image src='/home/career/msde.png' alt='Companies Associated' width={800} height={400} className='w-40 h-24 object-contain' />
          <Image src='/home/career/nsdc.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/skill-india.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/egac.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/iso-certified.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/microsoft.png' alt='Companies Associated' width={800} height={400} className='w-40 h-24 object-contain' />
          <Image src='/home/career/ibm.png' alt='Companies Associated' width={800} height={400} className='w-32 h-24 object-contain' />
          <Image src='/home/career/google-analytics.png' alt='Companies Associated' width={800} height={400} className='w-36 h-24 object-contain' />
          <Image src='/home/career/otabu.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/iaf.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
          <Image src='/home/career/rapl.png' alt='Companies Associated' width={800} height={400} className='w-full h-24 object-contain' />
        </div>
      </div>

      <div className='md:w-10/12 w-11/12 h-auto flex flex-col text-center gap-10 py-10'>

        <div className='w-full h-auto flex flex-col text-center gap-2'>
          <div className="md:text-3xl text-2xl md:font-bold font-medium text-gray-800">Climb your career ladder with world-class professional</div>
          <div className="md:text-lg text-base text-gray-600 max-w-2xl mx-auto">Learn from industry experts and get certified by prestigious institutions</div>
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