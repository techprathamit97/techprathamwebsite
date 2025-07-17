"use client";

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const verifyPaymentSchema = z.object({
  advance: z.boolean(),
  advanceAmount: z.number().min(0),
  totalAmount: z.number().min(0),
  verifyPayment: z.boolean(),
  courseCompletion: z.boolean(),
});

const Enrolled = () => {
  const { authenticated, loading } = useContext(UserContext);

  const [enrolledData, setEnrolledData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEnrolledData = async () => {
    setIsLoading(true);
    try {
      if (!authenticated) {
        return;
      }

      const res = await fetch(`/api/course/requests`);
      if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

      const data = await res.json();
      // Filter only verified enrollments that are not completed
      const verifiedEnrollments = data.filter((enrollment: { verifyPayment: boolean, courseCompletion: boolean }) => 
        enrollment.verifyPayment && !enrollment.courseCompletion
      );
      setEnrolledData(verifiedEnrollments);
    } catch (error) {
      console.error("Failed to fetch enrolled data:", error);
      if (authenticated) {
        setEnrolledData([]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<z.infer<typeof verifyPaymentSchema>>({
    resolver: zodResolver(verifyPaymentSchema),
    defaultValues: {
      advance: false,
      advanceAmount: 0,
      totalAmount: 0,
      verifyPayment: false,
      courseCompletion: false,
    },
  });

  const watchAdvance = form.watch("advance");

  const handleFinalizeCourse = (enrollment: any) => {
    setSelectedEnrollment(enrollment);
    // Pre-populate form with existing data
    form.reset({
      advance: enrollment.advance || false,
      advanceAmount: enrollment.advanceAmount || 0,
      totalAmount: enrollment.totalAmount || 0,
      verifyPayment: enrollment.verifyPayment || false,
      courseCompletion: enrollment.courseCompletion || false,
    });
  };

  const onSubmit = async (values: z.infer<typeof verifyPaymentSchema>) => {
    if (!selectedEnrollment) return;

    setIsSubmitting(true);
    try {
      const updateData = {
        email: selectedEnrollment.email,
        course_link: selectedEnrollment.course_link,
        ...values,
      };

      const res = await fetch('/api/course/verify', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!res.ok) throw new Error(`Update failed with status ${res.status}`);

      const updatedEnrollment = await res.json();
      console.log('Course finalization updated:', updatedEnrollment);
      
      // Refresh the enrolled data
      await fetchEnrolledData();
      
      // Close dialog and reset form
      setSelectedEnrollment(null);
      form.reset();
      
    } catch (error) {
      console.error('Failed to update course finalization:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchEnrolledData();
    }
  }, [authenticated]);

  useEffect(() => {
    if (!watchAdvance) {
      form.setValue("advanceAmount", 0);
    }
  }, [watchAdvance, form]);

  const getPaymentBadge = (advance: boolean, advanceAmount: number, totalAmount: number) => {
    if (advance && advanceAmount > 0 && advanceAmount < totalAmount) {
      return (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
          Partial Payment
        </span>
      );
    }
    return (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Paid
      </span>
    );
  };

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
                    <p className="text-gray-600">Loading enrolled courses...</p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                  <div className='w-full h-auto flex flex-row items-center justify-between'>
                    <h2 className="text-xl font-semibold text-white mb-4">Enrolled Courses</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 text-sm">In Progress Courses</span>
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {enrolledData.length}
                      </div>
                    </div>
                  </div>

                  {enrolledData.length > 0 ? (
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 w-full justify-items-center">
                      {enrolledData.map((enrollment: any, index: any) => (
                        <div
                          key={index}
                          className="w-full max-w-lg h-auto flex flex-col p-6 border rounded-xl shadow-md transition-all duration-300 bg-white hover:transform hover:shadow-lg"
                        >
                          {/* Course Information */}
                          <div className="flex justify-between items-start mb-3">
                            <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">
                              {enrollment.course_title}
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-blue-100 text-blue-800">
                                {enrollment.level}
                              </span>
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                In Progress
                              </span>
                            </div>
                          </div>

                          <div className="mb-3">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {enrollment.category}
                            </span>
                          </div>

                          <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                            {enrollment.course_desc}
                          </div>

                          {/* Student Information */}
                          <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Student Details</h4>
                            <div className="space-y-1 text-sm">
                              <div><span className="font-medium">Name:</span> {enrollment.name}</div>
                              <div><span className="font-medium">Email:</span> {enrollment.email}</div>
                              <div><span className="font-medium">Phone:</span> {enrollment.phone}</div>
                            </div>
                          </div>

                          {/* Payment Information */}
                          <div className="bg-green-50 p-4 rounded-lg mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold text-gray-800">Payment Status</h4>
                              {getPaymentBadge(enrollment.advance, enrollment.advanceAmount, enrollment.totalAmount)}
                            </div>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="font-medium">Total Amount:</span>
                                <span className="text-green-600 font-bold">₹{enrollment.totalAmount}</span>
                              </div>
                              {enrollment.advance && enrollment.advanceAmount > 0 && (
                                <>
                                  <div className="flex justify-between">
                                    <span className="font-medium">Advance Paid:</span>
                                    <span className="text-orange-600 font-bold">₹{enrollment.advanceAmount}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-medium">Remaining:</span>
                                    <span className="text-red-600 font-bold">₹{enrollment.totalAmount - enrollment.advanceAmount}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Course Duration */}
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span className="text-green-600 font-medium text-sm">Payment Verified</span>
                            </div>
                            <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              Duration: {enrollment.duration}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="flex gap-2">
                            <Link href={`/courses/${enrollment.course_link}`} className="flex-1">
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
                                  onClick={() => handleFinalizeCourse(enrollment)}
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                                >
                                  Finalize Course
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white hide-scrollbar">
                                <DialogHeader>
                                  <DialogTitle>Finalize Course - {selectedEnrollment?.course_title}</DialogTitle>
                                </DialogHeader>
                                
                                {selectedEnrollment && (
                                  <>
                                    {/* Course Details */}
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                      <h4 className="font-semibold text-gray-800 mb-2">Course Details</h4>
                                      <div className="space-y-2 text-sm">
                                        <div><span className="font-medium">Title:</span> {selectedEnrollment.course_title}</div>
                                        <div><span className="font-medium">Description:</span> {selectedEnrollment.course_desc}</div>
                                        <div><span className="font-medium">Duration:</span> {selectedEnrollment.duration}</div>
                                        <div><span className="font-medium">Level:</span> {selectedEnrollment.level}</div>
                                        <div><span className="font-medium">Category:</span> {selectedEnrollment.category}</div>
                                        <div><span className="font-medium">Course Link:</span> {selectedEnrollment.course_link}</div>
                                      </div>
                                    </div>

                                    {/* Student Details */}
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                      <h4 className="font-semibold text-gray-800 mb-2">Student Details</h4>
                                      <div className="space-y-2 text-sm">
                                        <div><span className="font-medium">Name:</span> {selectedEnrollment.name}</div>
                                        <div><span className="font-medium">Email:</span> {selectedEnrollment.email}</div>
                                        <div><span className="font-medium">Phone:</span> {selectedEnrollment.phone}</div>
                                      </div>
                                    </div>

                                    {/* Course Finalization Form */}
                                    <Form {...form}>
                                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <FormField
                                            control={form.control}
                                            name="advance"
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormLabel>Advance Payment</FormLabel>
                                                <Select onValueChange={(value) => field.onChange(value === "true")} value={field.value.toString()}>
                                                  <FormControl>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Select advance payment" />
                                                    </SelectTrigger>
                                                  </FormControl>
                                                  <SelectContent>
                                                    <SelectItem value="true">Yes</SelectItem>
                                                    <SelectItem value="false">No</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                                <FormMessage />
                                              </FormItem>
                                            )}
                                          />

                                          <FormField
                                            control={form.control}
                                            name="advanceAmount"
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormLabel>Advance Amount</FormLabel>
                                                <FormControl>
                                                  <Input
                                                    type="number"
                                                    placeholder="0"
                                                    disabled={!watchAdvance}
                                                    {...field}
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                  />
                                                </FormControl>
                                                <FormMessage />
                                              </FormItem>
                                            )}
                                          />
                                        </div>

                                        <FormField
                                          control={form.control}
                                          name="totalAmount"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>Total Amount</FormLabel>
                                              <FormControl>
                                                <Input
                                                  type="number"
                                                  placeholder="0"
                                                  {...field}
                                                  onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <div className="grid grid-cols-2 gap-4">
                                          <FormField
                                            control={form.control}
                                            name="verifyPayment"
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormLabel>Verify Payment</FormLabel>
                                                <Select onValueChange={(value) => field.onChange(value === "true")} value={field.value.toString()}>
                                                  <FormControl>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Select verification status" />
                                                    </SelectTrigger>
                                                  </FormControl>
                                                  <SelectContent>
                                                    <SelectItem value="true">Verified</SelectItem>
                                                    <SelectItem value="false">Not Verified</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                                <FormMessage />
                                              </FormItem>
                                            )}
                                          />

                                          <FormField
                                            control={form.control}
                                            name="courseCompletion"
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormLabel>Course Completion</FormLabel>
                                                <Select onValueChange={(value) => field.onChange(value === "true")} value={field.value.toString()}>
                                                  <FormControl>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Select completion status" />
                                                    </SelectTrigger>
                                                  </FormControl>
                                                  <SelectContent>
                                                    <SelectItem value="true">Completed</SelectItem>
                                                    <SelectItem value="false">Not Completed</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                                <FormMessage />
                                              </FormItem>
                                            )}
                                          />
                                        </div>

                                        <div className="flex gap-2 pt-4">
                                          <Button type="submit" disabled={isSubmitting} className="flex-1">
                                            {isSubmitting ? 'Updating...' : 'Update Course Status'}
                                          </Button>
                                        </div>
                                      </form>
                                    </Form>
                                  </>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>

                          {/* Timestamp */}
                          <div className="text-xs text-gray-400 mt-3 text-center">
                            Enrolled on: {new Date(enrollment.createdAt).toLocaleDateString('en-IN', {
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-300 mb-2">No enrolled courses</h3>
                        <p className="text-gray-400 mb-6">No students have enrolled in courses that are currently in progress.</p>
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

export default Enrolled