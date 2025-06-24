'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import Image from 'next/image';

const CertificateView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10'>
        <div className='px-4 py-1 rounded border-2 border-black text-black uppercase font-semibold'>
          Certificate
        </div>
        <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
          Training Certificate
        </div>
        <div className='text-center text-base md:text-lg'>
          View and download your training certificate here.<br />
          For assistance, contact us at <a href="mailto:certificate@techpratham.com" className="text-blue-600 underline">certificate@techpratham.com</a>.
        </div>

        <Image src='/support/support.svg' alt='' width={400} height={500} className='md:w-9/12 w-11/12 h-96 object-cover mt-8 rounded-t-3xl' />
      </div>

    </div>
  )
}

export default CertificateView;