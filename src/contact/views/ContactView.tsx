'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderContact from '../components/HeaderContact/HeaderContact';
import FormContact from '../components/FormContact/FormContact';
import AddressContact from '../components/AddressContact/AddressContact';

const ContactView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('contact');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderContact />

      <AddressContact />

      <FormContact />

    </div>
  )
}

export default ContactView;