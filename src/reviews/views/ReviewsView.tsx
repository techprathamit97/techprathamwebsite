'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import ReviewsHeader from '../components/ReviewsHeader/ReviewsHeader';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';

const ReviewsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('reviews');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <ReviewsHeader />

      <ReviewsSection />

    </div>
  )
}

export default ReviewsView;