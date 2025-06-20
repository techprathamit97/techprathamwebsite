'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

const AboutView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('about');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <div className='w-full h-80 flex flex-col items-center justify-center text-black overflow-hidden relative'>
        <div className='h-full md:w-10/12 w-full z-10 py-20 flex flex-col justify-end'>
          <div className='w-auto lg:text-4xl md:text-3xl text-xl font-bold md:bg-transparent bg-[#1f1f1fd4] md:px-0 px-4'>
            <span>
              About Us Page
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutView;