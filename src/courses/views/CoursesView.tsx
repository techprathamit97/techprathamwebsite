'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderCourse from '../components/HeaderCourse/HeaderCourse';
import MainCourse from '../components/MainCourse/MainCourse';

const CoursesView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderCourse />

      <MainCourse />

    </div>
  )
}

export default CoursesView;