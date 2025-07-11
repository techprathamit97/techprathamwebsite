'use client';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderCourse from '../components/HeaderCourse/HeaderCourse';
import MainCourse from '../components/MainCourse/MainCourse';
import { toast } from 'sonner';

const CoursesView = () => {
  const { setActiveTab } = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchCourseData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/course/fetch`);
        if (!res.ok) throw new Error(`API request failed with status ${res.status}`);
        
        const data = await res.json();
        setCourse(data);
      } catch (error: any) {
        toast("Failed to fetch banners data:", error);
        setCourse([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCourseData();
  }, []);

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HeaderCourse />

      <MainCourse course={course} isLoading={isLoading} />

    </div>
  )
}

export default CoursesView;