'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import CertificateHeader from '../components/CertificateHeader/CertificateHeader';
import CertificateSection from '../components/CertificateSection/CertificateSection';

const CertificateView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <CertificateHeader />

      <CertificateSection />

    </div>
  )
}

export default CertificateView;