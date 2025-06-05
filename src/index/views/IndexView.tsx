'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import HeaderHome from '../components/HeaderHome/HeaderHome';
import ClientHome from '../components/ClientHome/ClientHome';
import CoursesHome from '../components/CoursesHome/CoursesHome';
import CareerHome from '../components/CareerHome/CareerHome';
import CertificationHome from '../components/CertificationHome/CertificationHome';
import EducatorHome from '../components/EducatorHome/EducatorHome';
import RecognitionHome from '../components/RecognitionHome/RecognitionHome';
import PlacementHome from '../components/PlacementHome/PlacementHome';
import SpecialityHome from '../components/SpecialityHome/SpecialityHome';
import BannerHome from '../components/BannerHome/BannerHome';
import AlumniHome from '../components/AlumniHome/AlumniHome';
import TestmonialHome from '../components/TestmonialHome/TestmonialHome';
import BlogsHome from '../components/BlogsHome/BlogsHome';
import ContactHome from '../components/ContactHome/ContactHome';

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

      <RecognitionHome />

      <PlacementHome />

      <SpecialityHome />

      <EducatorHome />

      <BannerHome />

      <AlumniHome />

      <TestmonialHome />

      <BlogsHome />

      <ContactHome />
      
    </div>
  )
}

export default IndexView;