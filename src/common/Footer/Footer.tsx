import { Separator } from '@/components/ui/separator';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center bg-[#1E2328] text-white'>
      <div className='md:w-10/12 w-11/12 flex flex-col py-10 gap-10'>
        
        <div className='w-full flex flex-col'>
          <div className='text-xl font-semibold mb-1'>Follow Us!</div>
          <Separator className='mb-4 w-80' />
          <div className='flex flex-row gap-3'>
            <FaFacebook className='w-8 h-8' />
            <FaLinkedin className='w-8 h-8' />
            <FaYoutube className='w-8 h-8' />
            <FaInstagram className='w-8 h-8' />
            <FaTwitter className='w-8 h-8' />
          </div>
        </div>

        <div className='w-full flex flex-col gap-2'>
          <div className='text-xl font-semibold'>Techpratham</div>
          <div>At Techpratham, we </div>
        </div>

      </div>
    </div>
  )
}

export default Footer