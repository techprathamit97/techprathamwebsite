'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderJobs from '../components/HeaderJobs/HeaderJobs';
import JobsSection from '../components/JobsSection/JobsSection';

const JobsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('jobs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderJobs />

      <JobsSection />

    </div>
  )
}

export default JobsView;