import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BannerHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-black text-white'>
      <div className='w-10/12 h-auto flex flex-row items-center justify-between'>
        <div className='md:w-1/2 w-full flex flex-col gap-4 capitalize'>
          <div>
            <Badge>Formula for Growth</Badge>
          </div>
          <div className='text-3xl font-bold'>Why should you upskill now?</div>
          <div>Join techpratham - indias premier training institute for a future-ready career</div>
          <div>
            <Button>Book Free Demo</Button>
          </div>
        </div>
        <Image src='/home/certificate.png' alt='' width={400} height={400} className='md:w-1/2 w-full h-80 transition-all rounded border border-red-600' />
      </div>
    </div>
  )
}

export default BannerHome