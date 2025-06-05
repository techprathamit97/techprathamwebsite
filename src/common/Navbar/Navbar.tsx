import React from 'react';
import { Input } from '@/components/ui/input';
import { Component1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center shadowBorder'>
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3 flex flex-row gap-6 justify-start items-center'>
          <Link href={'/'} aria-label='Techpratham'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <div className='flex flex-row gap-1 items-center justify-center ml-4 cursor-pointer'>
            <Component1Icon className='rotate-45' />
            <span>Courses</span>
          </div>
          <Input className='max-w-96 bg-white text-black' />
          <div className='flex flex-row gap-1 items-center justify-center cursor-pointer'>
            <Component1Icon className='rotate-45' />
            <span>Corporate Training</span>
          </div>
        </div>
      </div>
      <div className='w-full h-auto py-2 flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3 text-sm flex flex-row gap-6 items-center justify-center'>
          <div className='cursor-pointer'>About Us</div>
          <div className='cursor-pointer'>Training Certificate</div>
          <div className='cursor-pointer'>Job Openings</div>
          <div className='cursor-pointer'>Admission</div>
          <div className='cursor-pointer'>Reviews</div>
          <div className='cursor-pointer'>Blogs</div>
          <div className='cursor-pointer'>Payment</div>
          <div className='cursor-pointer'>Contact Us</div>
          <div className='cursor-pointer'>24/7 Technical Support</div>
          <div className='cursor-pointer'>Student Zone</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar