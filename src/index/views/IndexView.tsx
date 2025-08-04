'use client';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';

import ClientHome from '../components/ClientHome/ClientHome';
import CoursesHome from '../components/CoursesHome/CoursesHome';
import CareerHome from '../components/CareerHome/CareerHome';
import CertificationHome from '../components/CertificationHome/CertificationHome';
import EducatorHome from '../components/EducatorHome/EducatorHome';
import RecognitionHome from '../components/RecognitionHome/RecognitionHome';
import PlacementHome from '../components/PlacementHome/PlacementHome';
import SpecialityHome from '../components/SpecialityHome/SpecialityHome';
import BannerHome from '../components/BannerHome/BannerHome';
import AlumniHome from '../components/AlumniHome/AlumniHome';
import TestmonialHome from '../components/TestmonialHome/TestmonialHome';
import BlogsHome from '../components/BlogsHome/BlogsHome';
import ContactHome from '../components/ContactHome/ContactHome';
import HeroHome from '../components/HeroHome/HeroHome';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
  shortDesc: string;
  level: string;
  rating: number;
  duration: string;
  description: string;
}

interface CourseCategory {
  name: string;
  courses: Course[];
}

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  const [course, setCourse] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourseData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/course/fetch`);
        if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

        const data: Course[] = await res.json();
        setCourse(data);
      } catch (error: any) {
        console.error("Failed to fetch course data:", error);
        toast.error("Failed to fetch course data. Please try again.");
        setCourse([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  const coursesByCategory = React.useMemo((): CourseCategory[] => {
    if (!course || course.length === 0) return [];

    const categories = [...new Set(course.map(c => c?.category).filter(Boolean))];

    return categories.map(category => ({
      name: category,
      courses: course.filter(c => c?.category === category)
    }));
  }, [course]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center relative'>

      <HeroHome />

      <ClientHome />

      <CoursesHome course={course} coursesByCategory={coursesByCategory} />

      <CareerHome />

      <CertificationHome />

      <RecognitionHome />

      <PlacementHome />

      <SpecialityHome />

      <EducatorHome />

      <BannerHome />

      <AlumniHome />

      <TestmonialHome />

      <BlogsHome />

      <ContactHome />

    </div>
  )
}

export default IndexView;