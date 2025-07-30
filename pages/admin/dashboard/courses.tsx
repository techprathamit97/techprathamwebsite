import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

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
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading course data...</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#242935] shadow-sm rounded-lg p-6 m-6">
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
                      className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.title}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap`}>
                          {course.level}
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium`}>
                          {course.category}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.shortDesc}</div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-600 font-medium">{course.rating}</span>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {course.duration}
                        </div>
                      </div>

                      <Link href={`/courses/${course.link}`} className="w-full">
                        <Button
                          variant="default"
                          className="w-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:from-[#B73E3F] hover:to-[#6F3336] transition-all duration-200"
                        >
                          Enroll Now
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