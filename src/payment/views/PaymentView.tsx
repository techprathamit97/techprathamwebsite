'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import PaymentHeader from '../components/PaymentHeader/PaymentHeader';
import PaymentSection from '../components/PaymentSection/PaymentSection';

const PaymentView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('payment');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <PaymentHeader />

      <PaymentSection />

    </div>
  )
}

export default PaymentView;