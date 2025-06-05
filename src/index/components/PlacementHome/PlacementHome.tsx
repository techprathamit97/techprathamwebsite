import Image from 'next/image'
import React from 'react'

const PlacementHome = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-white text-black'>
      <div className="text-3xl font-bold text-gray-800">Student Placement Process</div>
      <Image src='/home/placement-process.png' alt='' width={800} height={400} className='w-11/12 h-auto' />
    </div>
  )
}

export default PlacementHome