import React from 'react';
import { Input } from '@/components/ui/input';
import { Component1Icon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center shadowBorder'>
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3 flex flex-row gap-6 justify-start items-center'>
          <div>TechPratham</div>
          <div className='flex flex-row gap-2 items-center justify-center pl-4'>
            <Component1Icon className='rotate-45' />
            <span>Courses</span>
          </div>
          <Input className='max-w-96 bg-white text-black' />
          <div className='flex flex-row gap-2 items-center justify-center'>
            <Component1Icon className='rotate-45' />
            <span>Corporate Training</span>
          </div>
        </div>
      </div>
      <div className='w-full h-auto py-2 flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3 text-sm flex flex-row gap-6 items-center justify-center'>
          <div>About Us</div>
          <div>Training Certificate</div>
          <div>Job Openings</div>
          <div>Admission</div>
          <div>Reviews</div>
          <div>Blogs</div>
          <div>Payment</div>
          <div>Contact Us</div>
          <div>24/7 Technical Support</div>
          <div>Student Zone</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar