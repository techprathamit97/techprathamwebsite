import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import UserLoader from '@/src/account/common/UserLoader';
import UserSidebar from '@/src/account/common/UserSidebar';
import UserTopBar from '@/src/account/common/UserTopBar';

const UserCourses = () => {
  const { authenticated, loading, userData } = useContext(UserContext);

  const [appliedCourses, setAppliedCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (authenticated && userData?.email) {
      fetchEnrolledCourses();
    }
  }, [authenticated, userData]);

  const fetchEnrolledCourses = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/course/enrolled?email=${userData.email}`);
      if (response.ok) {
        const data = await response.json();

        const applied = data.filter((course: { verifyPayment: any; }) => !course.verifyPayment);
        const enrolled = data.filter((course: { verifyPayment: any; }) => course.verifyPayment);

        setAppliedCourses(applied);
        setEnrolledCourses(enrolled);
      } else {
        console.error('Failed to fetch enrolled courses');
      }
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <UserLoader />
      ) : !authenticated ? (
        <SignOut />
      ) : (
        <div className="h-screen w-full fixed bg-[#121421]">
          <div className="grid grid-cols-5 h-full">

            <UserSidebar />

            <div className="col-span-4 w-full h-full overflow-y-auto p-8">

              <UserTopBar />

              {isLoading ? (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading course data...</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Applied Courses Section */}
                  <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                    <div className='w-full h-auto flex flex-row items-center justify-between'>
                      <h2 className="text-xl font-semibold text-white mb-4">Applied Courses</h2>
                      <span className="text-orange-400 text-sm">Payment Pending</span>
                    </div>

                    {appliedCourses.length > 0 ? (
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
                        {appliedCourses.map((course: any, index: any) => (
                          <div
                            key={index}
                            className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.course_title}</div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 text-blue-800`}>
                                {course.level}
                              </span>
                            </div>

                            <div className="mb-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                                {course.category}
                              </span>
                            </div>

                            <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.course_desc}</div>

                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-1">
                                <span className="text-orange-500">⏳</span>
                                <span className="text-orange-600 font-medium text-sm">Payment Pending</span>
                              </div>
                              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {course.duration}
                              </div>
                            </div>

                            <div className="text-sm text-gray-600 mb-4">
                              <span className="font-medium">Total: ₹{course.totalAmount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="text-center">
                          <div className="mb-4">
                            <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-gray-300 mb-2">No applications found</h3>
                          <p className="text-gray-400">You don't have any pending course applications.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enrolled Courses Section */}
                  <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                    <div className='w-full h-auto flex flex-row items-center justify-between'>
                      <h2 className="text-xl font-semibold text-white mb-4">Enrolled Courses</h2>
                      <span className="text-green-400 text-sm">Payment Verified</span>
                    </div>

                    {enrolledCourses.length > 0 ? (
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
                        {enrolledCourses.map((course: any, index: any) => (
                          <div
                            key={index}
                            className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.course_title}</div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 text-blue-800`}>
                                {course.level}
                              </span>
                            </div>

                            <div className="mb-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                                {course.category}
                              </span>
                            </div>

                            <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.course_desc}</div>

                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-1">
                                <span className="text-green-500">✓</span>
                                <span className="text-green-600 font-medium text-sm">
                                  {course.courseCompletion ? 'Completed' : 'In Progress'}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {course.duration}
                              </div>
                            </div>

                            <div className="text-sm text-gray-600 mb-4">
                              <span className="font-medium">Paid: ₹{course.totalAmount}</span>
                            </div>

                            <Link href={`/courses/${course.course_link}`} className="w-full">
                              <Button
                                variant="default"
                                className="w-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:from-[#B73E3F] hover:to-[#6F3336] transition-all duration-200"
                              >
                                {course.courseCompletion ? 'View Certificate' : 'Continue Learning'}
                              </Button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="text-center">
                          <div className="mb-4">
                            <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-gray-300 mb-2">No enrolled courses</h3>
                          <p className="text-gray-400 mb-6">You haven't enrolled in any courses yet. Start learning by enrolling in a course!</p>
                          <Link href='/courses' className=''>
                            <Button variant='default' className="bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:from-[#B73E3F] hover:to-[#6F3336]">
                              Browse Courses
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default UserCourses