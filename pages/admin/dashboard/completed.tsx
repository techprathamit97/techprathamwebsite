"use client";

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Completed = () => {
    const { authenticated, loading, isAdmin, currentTab, setCurrentTab } = useContext(UserContext);

    const [completedData, setCompletedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCompletedData = async () => {
        setIsLoading(true);
        try {
            if (!authenticated) {
                return;
            }

            const res = await fetch(`/api/course/requests`);
            if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

            const data = await res.json();
            // Filter only completed courses with full payment
            const completedCourses = data.filter((course: {
                verifyPayment: boolean,
                courseCompletion: boolean,
                advance: boolean,
                advanceAmount: number,
                finalPayment: number,
                totalAmount: number
            }) => {
                const isPaymentComplete = course.verifyPayment &&
                    (course.advance ?
                        (course.advanceAmount + course.finalPayment >= course.totalAmount) :
                        course.finalPayment >= course.totalAmount || course.advanceAmount >= course.totalAmount
                    );
                return isPaymentComplete && course.courseCompletion;
            });
            setCompletedData(completedCourses);
        } catch (error) {
            console.error("Failed to fetch completed data:", error);
            if (authenticated) {
                setCompletedData([]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (authenticated) {
            fetchCompletedData();
        }
    }, [authenticated]);

    const getPaymentBadge = (course: any) => {
        const { advance, advanceAmount, finalPayment, totalAmount } = course;
        const totalPaid = advanceAmount + finalPayment;

        if (totalPaid >= totalAmount) {
            return (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Fully Paid
                </span>
            );
        }

        return (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Partial Payment
            </span>
        );
    };

    useEffect(() => {
        setCurrentTab("completed");
    }, [currentTab]);

    return (
        <React.Fragment>
            {loading ? (
                <AdminLoader />
            ) : (!authenticated || !isAdmin) ? (
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
                                        <p className="text-gray-600">Loading completed courses...</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                                    <div className='w-full h-auto flex flex-row items-center justify-between'>
                                        <h2 className="text-xl font-semibold text-white mb-4">Completed Courses</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-400 text-sm">Completed Courses</span>
                                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {completedData.length}
                                            </div>
                                        </div>
                                    </div>

                                    {completedData.length > 0 ? (
                                        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 w-full justify-items-center">
                                            {completedData.map((course: any, index: any) => (
                                                <div
                                                    key={index}
                                                    className="w-full max-w-lg h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform hover:shadow-lg"
                                                >
                                                    {/* Course Information */}
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">
                                                            {course.course_title}
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 text-blue-800">
                                                                {course.level}
                                                            </span>
                                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                Completed
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                            {course.category}
                                                        </span>
                                                    </div>

                                                    <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                                                        {course.course_desc}
                                                    </div>

                                                    {/* Student Information */}
                                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Student Details</h4>
                                                        <div className="space-y-1 text-sm">
                                                            <div><span className="font-medium">Name:</span> {course.name}</div>
                                                            <div><span className="font-medium">Email:</span> {course.email}</div>
                                                            <div><span className="font-medium">Phone:</span> {course.phone}</div>
                                                        </div>
                                                    </div>

                                                    {/* Payment Information */}
                                                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <h4 className="font-semibold text-gray-800">Payment Status</h4>
                                                            {getPaymentBadge(course)}
                                                        </div>
                                                        <div className="space-y-1 text-sm">
                                                            <div className="flex justify-between">
                                                                <span className="font-medium">Total Amount:</span>
                                                                <span className="text-green-600 font-bold">₹{course.totalAmount}</span>
                                                            </div>
                                                            {course.advance && course.advanceAmount > 0 && (
                                                                <div className="flex justify-between">
                                                                    <span className="font-medium">Advance Payment:</span>
                                                                    <span className="text-blue-600 font-bold">₹{course.advanceAmount}</span>
                                                                </div>
                                                            )}
                                                            {course.finalPayment > 0 && (
                                                                <div className="flex justify-between">
                                                                    <span className="font-medium">Final Payment:</span>
                                                                    <span className="text-green-600 font-bold">₹{course.finalPayment}</span>
                                                                </div>
                                                            )}
                                                            <div className="flex justify-between border-t pt-1">
                                                                <span className="font-medium">Total Paid:</span>
                                                                <span className="text-green-700 font-bold">₹{course.advanceAmount + course.finalPayment}</span>
                                                            </div>
                                                            {(course.advanceAmount + course.finalPayment) < course.totalAmount && (
                                                                <div className="flex justify-between">
                                                                    <span className="font-medium">Remaining:</span>
                                                                    <span className="text-red-600 font-bold">₹{course.totalAmount - (course.advanceAmount + course.finalPayment)}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Course Completion Info */}
                                                    <div className="flex justify-between items-center mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-green-500">🎓</span>
                                                            <span className="text-green-600 font-medium text-sm">Course Completed</span>
                                                        </div>
                                                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                            Duration: {course.duration}
                                                        </div>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex gap-2">
                                                        <Link href={`/courses/${course.course_link}`} className="flex-1">
                                                            <Button
                                                                variant="outline"
                                                                className="w-full border-gray-300 hover:bg-gray-50 transition-all duration-200"
                                                            >
                                                                View Course
                                                            </Button>
                                                        </Link>
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button
                                                                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200"
                                                                >
                                                                    Generate Certificate
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className='bg-white'>
                                                                <h3 className="text-lg font-semibold text-gray-800">Certificate Details</h3>
                                                                <div className='w-full flex flex-col gap-1'>
                                                                    <div>Course Title: {course?.course_title}</div>
                                                                    <div>User Name: {course?.name}</div>
                                                                    <div>Starting Date: {course?.certificate?.enrolledDate}</div>
                                                                    <div>Ending Date: {course?.certificate?.completionDate}</div>
                                                                    <div>Certificate Id: {course?.certificate?.certificateId}</div>
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>

                                                    {/* Timestamp */}
                                                    <div className="text-xs text-gray-400 mt-3 text-center">
                                                        Completed on: {new Date(course.updatedAt || course.createdAt).toLocaleDateString('en-IN', {
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
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-300 mb-2">No completed courses</h3>
                                                <p className="text-gray-400 mb-6">No courses have been completed yet with full payment.</p>
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

export default Completed