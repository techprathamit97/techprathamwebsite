import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tv } from 'lucide-react';

const BannerHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-black text-white'>
      <div className='w-10/12 h-auto flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between'>
        <div className='md:w-1/2 w-full flex flex-col gap-4 capitalize'>
          <div className='mb-6'>
            <Badge className='px-6 py-2 text-base font-light cursor-pointer rounded-full border-2 border-[#D1090F] bg-[#d1091076]'>Formula for Growth</Badge>
          </div>
          <div className='md:text-5xl text-4xl font-bold flex flex-col md:gap-2 gap-1'>
            <span>Why should you</span>
            <span className='bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text'>upskill now?</span>
          </div>
          <div>Join techpratham - indias premier training institute for a future-ready career</div>
          <div>
            <Button variant='manual' className='flex items-center justify-center text-base font-normal'>
              Book Free Demo
              <Tv />
            </Button>
          </div>
        </div>
        <Image src='/home/banner/banner.jpg' alt='' width={400} height={400} className='md:w-1/2 w-full h-80 transition-all rounded border-4 border-red-600 object-cover' />
      </div>
    </div>
  )
}

export default BannerHome