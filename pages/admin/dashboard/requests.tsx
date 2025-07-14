import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const Requests = () => {
  const { authenticated, loading } = useContext(UserContext);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRequestData = async () => {
    setIsLoading(true);
    try {
      if (!authenticated) {
        return;
      }

      const res = await fetch(`/api/course/requests`);
      if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

      const data = await res.json();
      // Filter only non-verified requests
      const nonVerifiedRequests = data.filter((request: { verifyPayment: any; }) => !request.verifyPayment);
      setRequestData(nonVerifiedRequests);
    } catch (error) {
      console.error("Failed to fetch request data:", error);
      if (authenticated) {
        setRequestData([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyPayment = async (requestId: string) => {
    try {
      const res = await fetch(`/api/course/requests/${requestId}/verify`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verifyPayment: true }),
      });
      
      if (res.ok) {
        // Refresh the data after successful verification
        fetchRequestData();
      } else {
        console.error('Failed to verify payment');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchRequestData();
    }
  }, [authenticated])

  return (
    <React.Fragment>
      {loading ? (
        <AdminLoader />
      ) : !authenticated ? (
        <SignOut />
      ) : (
        <div className="h-screen w-full fixed bg-[#121421]">
          <div className="grid grid-cols-5 h-full">

            <AdminSidebar />

            <div className="col-span-4 w-full h-full overflow-y-auto p-8">

              <AdminTopBar />

              {isLoading ? (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading request data...</p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                  <div className='w-full h-auto flex flex-row items-center justify-between'>
                    <h2 className="text-xl font-semibold text-white mb-4">Course Enrollment Requests</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 text-sm">Pending Verification</span>
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {requestData.length}
                      </div>
                    </div>
                  </div>

                  {requestData.length > 0 ? (
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 w-full justify-items-center">
                      {requestData.map((request: any, index: any) => (
                        <div
                          key={index}
                          className="w-full max-w-lg h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform"
                        >
                          {/* Course Information */}
                          <div className="flex justify-between items-start mb-3">
                            <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{request.course_title}</div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 text-blue-800`}>
                              {request.level}
                            </span>
                          </div>

                          <div className="mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}>
                              {request.category}
                            </span>
                          </div>

                          <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">{request.course_desc}</div>

                          {/* User Information */}
                          <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Student Details</h4>
                            <div className="space-y-1 text-sm">
                              <div><span className="font-medium">Name:</span> {request.name}</div>
                              <div><span className="font-medium">Email:</span> {request.email}</div>
                              <div><span className="font-medium">Phone:</span> {request.phone}</div>
                            </div>
                          </div>

                          {/* Payment Information */}
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-500">⏳</span>
                              <span className="text-orange-600 font-medium text-sm">Payment Pending</span>
                            </div>
                            <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {request.duration}
                            </div>
                          </div>

                          <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Total Amount: ₹{request.totalAmount}</span>
                            </div>
                            {request.advance && (
                              <div className="text-sm text-green-600">
                                <span className="font-medium">Advance: ₹{request.advanceAmount}</span>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Link href={`/courses/${request.course_link}`} className="flex-1">
                              <Button
                                variant="outline"
                                className="w-full border-gray-300 hover:bg-gray-50 transition-all duration-200"
                              >
                                View Course
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handleVerifyPayment(request._id)}
                              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200"
                            >
                              Verify Payment
                            </Button>
                          </div>

                          {/* Timestamp */}
                          <div className="text-xs text-gray-400 mt-3 text-center">
                            Applied on: {new Date(request.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="text-center">
                        <div className="mb-4">
                          <svg className="w-20 h-20 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-300 mb-2">No pending requests</h3>
                        <p className="text-gray-400 mb-6">All course enrollment requests have been processed.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Requests