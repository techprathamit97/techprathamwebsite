'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto bg-white flex flex-col items-center justify-center'>
      Hello Everyone
      <div className='text-2xl font-bold mt-4'>Welcome to the Home Page</div>
    </div>
  )
}

export default IndexView;