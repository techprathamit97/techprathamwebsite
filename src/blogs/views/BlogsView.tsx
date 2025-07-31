'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import BlogsHeader from '../components/BlogsHeader/BlogsHeader';
import BlogsSection from '../components/BlogsSection/BlogsSection';

const BlogsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('blogs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <BlogsHeader />

      <BlogsSection />

    </div>
  )
}

export default BlogsView;