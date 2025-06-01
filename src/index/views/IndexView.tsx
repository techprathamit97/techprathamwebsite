'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import HeaderHome from '../components/HeaderHome/HeaderHome';
import ClientHome from '../components/ClientHome/ClientHome';

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderHome />

      <ClientHome />
      
    </div>
  )
}

export default IndexView;