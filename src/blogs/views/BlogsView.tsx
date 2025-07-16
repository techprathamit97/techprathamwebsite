'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import BlogsHeader from '../components/BlogsHeader/BlogsHeader';

const BlogsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('blogs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <BlogsHeader />

    </div>
  )
}

export default BlogsView;