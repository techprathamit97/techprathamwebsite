'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

const ContactView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('contact');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <div className='w-full h-56 flex flex-col items-center justify-center bg-gradient-to-l from-[#CD4647] to-[#7F3B40] text-white'>
        <div className='text-4xl font-semibold'>Contact Page</div>
        <div>Our Mission is to build nation through education and beyond limitation.</div>
      </div>

    </div>
  )
}

export default ContactView;