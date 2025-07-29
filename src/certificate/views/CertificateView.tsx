'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import CertificateHeader from '../components/CertificateHeader/CertificateHeader';
import TrainingSection from '@/src/training/components/TrainingSection/TrainingSection';

const CertificateView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <CertificateHeader />

      <TrainingSection />

    </div>
  )
}

export default CertificateView;