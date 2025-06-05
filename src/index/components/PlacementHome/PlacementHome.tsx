import Image from 'next/image'
import React from 'react'

const PlacementHome = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-white text-black'>
      <div className="w-11/12 md:text-3xl text-2xl md:font-bold font-medium md:mb-4 mb-0 text-gray-800 text-center">Student Placement Process</div>
      <Image src='/home/placement-process.png' alt='' width={800} height={400} className='w-11/12 h-auto' />
    </div>
  )
}

export default PlacementHome