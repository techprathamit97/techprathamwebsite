'use client';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';
import HeaderCourse from '../components/HeaderCourse/HeaderCourse';
import MainCourse from '../components/MainCourse/MainCourse';
import { toast } from 'sonner';
import ReachForm from '@/components/common/ReachForm/ReachForm';
import ToolTip from '@/components/common/ToolTip/ToolTip';
import { useRouter } from 'next/router';

interface CoursesViewProps {
  routeId: string;
}

const CoursesView: React.FC<CoursesViewProps> = ({ routeId }) => {
  const { setActiveTab } = useContext(UserContext);
  const router = useRouter();

  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const res = await fetch(`/api/get-course/total-count?id=${routeId}`);
        const data = await res.json();

        const totalCount = data.count;
        const calculatedTotalPages = Math.ceil(totalCount / 20);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error fetching total courses count:', error);
        toast.error('Failed to load course count');
      }
    };

    fetchTotalCount();
  }, [routeId]);

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/get-course/pages?page=${page}&id=${routeId}`);
        const data = await res.json();

        if (res.status === 400) {
          toast.error('Unauthorized access');
          setIsLoading(false);
          return;
        }

        setCourse(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        toast.error('Failed to load courses');
        setIsLoading(false);
      }
    };

    const page = parseInt(router.query.page as string, 10) || 1;
    setCurrentPage(page);

    if (routeId) {
      fetchData(page);
    }
  }, [router.query.page, routeId]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push(`/courses?page=${currentPage + 1}`);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push(`/courses?page=${currentPage - 1}`);
    }
  };

  useEffect(() => {
    setActiveTab('training');
  }, [setActiveTab]);

  const PaginationControls = () => (
    <div className="flex items-center justify-center gap-4 my-8">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
      >
        Previous
      </button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 bg-red-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
      >
        Next
      </button>
    </div>
  );

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <ReachForm />

      <ToolTip />

      <HeaderCourse />

      <MainCourse course={course} isLoading={isLoading} />

      {course.length > 0 && totalPages > 1 && <PaginationControls />}

    </div>
  )
}

export default CoursesView;