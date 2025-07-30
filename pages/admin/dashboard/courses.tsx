import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';
import { Badge } from '@/components/ui/badge';

const courses = () => {
  const { authenticated, loading, isAdmin, currentTab, setCurrentTab } = useContext(UserContext);

  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourseData = async () => {
    setIsLoading(true);
    try {
      if (!authenticated) {
        return;
      }

      const res = await fetch(`/api/course/fetch`);
      if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

      const data = await res.json();
      setCourseData(data);
    } catch (error) {
      console.error("Failed to fetch alumni data:", error);
      if (authenticated) {
        setCourseData([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchCourseData();
    }
  }, [authenticated])

  useEffect(() => {
    setCurrentTab("courses");
  }, [currentTab]);

  return (
    <React.Fragment>
      {loading ? (
        <AdminLoader />
      ) : (!authenticated || !isAdmin) ? (
        <SignOut />
      ) : (
        <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>

          <AdminSidebar />

          <div className='bg-[#000] flex flex-col w-full h-full md:relative fixed'>

            <AdminTopBar />

            {isLoading ? (
              <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading course data...</p>
                </div>
              </div>
            ) : (
              <div className="bg-black p-6 overflow-y-auto">
                <div className='w-full h-auto flex flex-row items-center justify-between'>
                  <h2 className="text-xl font-semibold text-white mb-4">All Courses</h2>
                  <Link href='/admin/dashboard/courses/create' className=''>
                    <Button variant='default'>Create Course</Button>
                  </Link>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
                  {courseData.map((course: any, index: any) => (
                    <div
                      key={index}
                      className="w-full max-w-sm h-auto flex flex-col p-6 shadow-md transition-all duration-300 bg-[#1a1a1a] text-white hover:transform"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-xl font-semibold text-white leading-tight flex-1 pr-2">{course.title}</div>

                      </div>

                      <div className="mb-3 w-full flex flex-row justify-between items-center">
                        <Badge variant='secondary'>
                          {course.category}
                        </Badge>
                        <Badge variant='secondary'>
                          {course.level}
                        </Badge>
                      </div>

                      <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.shortDesc}</div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-600 font-medium">{course.rating}</span>
                        </div>
                        <Badge variant='secondary'>
                          {course.duration}
                        </Badge>
                      </div>

                      <Link href={`/courses/${course.link}`} className="w-full">
                        <Button
                          variant="default"
                          className="w-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] transition-all duration-200"
                        >
                          Explore Course
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default courses