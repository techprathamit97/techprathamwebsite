'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import TrainingHeader from '../components/TrainingHeader/TrainingHeader';
import TrainingSection from '../components/TrainingSection/TrainingSection';

const TrainingView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <TrainingHeader />

      <TrainingSection />

    </div>
  )
}

export default TrainingView;