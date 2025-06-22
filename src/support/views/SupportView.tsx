'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import Image from 'next/image';

const SupportView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10'>
        <div className='px-4 py-1 rounded border-2 border-black text-black uppercase font-semibold'>
          Technical Support
        </div>
        <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
          Need Technical Assistance?
        </div>
        <div className='text-center text-base md:text-lg'>
          Our support team is here to help you with any technical issues or questions.<br />
          Please reach out to us at <a href="mailto:support@techpratham.com" className="text-blue-600 underline">support@techpratham.com</a> or use the chat below.
        </div>
        
        <Image src='/support/support.svg' alt='' width={400} height={500} className='md:w-9/12 w-11/12 h-96 object-cover mt-8 rounded-t-3xl' />
      </div>

    </div>
  )
}

export default SupportView;