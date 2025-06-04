'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import HeaderHome from '../components/HeaderHome/HeaderHome';
import ClientHome from '../components/ClientHome/ClientHome';
import CoursesHome from '../components/CoursesHome/CoursesHome';
import CareerHome from '../components/CareerHome/CareerHome';
import CertificationHome from '../components/CertificationHome/CertificationHome';

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderHome />

      <ClientHome />

      <CoursesHome />

      <CareerHome />

      <CertificationHome />
      
    </div>
  )
}

export default IndexView;