'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto bg-gradient-to-r from-[#371414] to-[#D1090F] text-white flex items-start justify-center'>
      <div className='w-10/12 h-auto flex flex-col py-10'>
        Hello Everyone
        <div className='text-2xl font-bold mt-4'>Welcome to the Home Page</div>
      </div>
    </div>
  )
}

export default IndexView;