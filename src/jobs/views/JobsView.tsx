'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import Image from 'next/image';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { Clock3, MapPin } from 'lucide-react';
import HeaderJobs from '../components/HeaderJobs/HeaderJobs';
import CardJobs from '../components/CardJobs/CardJobs';

const JobsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('jobs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderJobs />

      <CardJobs />

    </div>
  )
}

export default JobsView;