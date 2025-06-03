import Image from 'next/image'
import React from 'react'

const CareerHome = () => {
  return (
    <div className='w-10/12 h-auto flex flex-col items-center justify-center py-10 bg-white text-black'>
      <div>In Association With</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 w-full justify-items-center py-4">
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
      </div>
      <div className='w-full h-auto flex flex-col text-center py-10'>
        <div>Our Courses</div>
        <div>Programs to Help you upskill which lands you to your Dream Job</div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-auto'>
        <div>category</div>
        <div>cards</div>
      </div>
    </div>
  )
}

export default CareerHome