'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderAbout from '../components/HeaderAbout/HeaderAbout';
import MainAbout from '../components/MainAbout/MainAbout';
import MissionAbout from '../components/MissionAbout/MissionAbout';
import SpecialityAbout from '../components/SpecialityAbout/SpecialityAbout';
import BannerAbout from '../components/BannerAbout/BannerAbout';
import TeamsAbout from '../components/TeamsAbout/TeamsAbout';

const AboutView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('about');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderAbout />

      <MainAbout />

      <MissionAbout />

      <SpecialityAbout />

      <BannerAbout />

      <TeamsAbout />

    </div>
  )
}

export default AboutView;