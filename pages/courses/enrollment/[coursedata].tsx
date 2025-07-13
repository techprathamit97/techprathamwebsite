import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, User, Mail, Phone, BookOpen, Clock, BarChart3, Tag } from 'lucide-react';
import { UserContext } from '@/context/userContext';

// Zod schema for form validation
const enrollmentSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must be less than 15 digits').regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

interface Curriculum {
  que: string;
  ans: string;
  topics: string[];
}

interface FAQ {
  que: string;
  ans: string;
}

interface Course {
  id: string;
  link: string;
  title: string;
  shortDesc: string;
  description: string;
  rating: string;
  duration: string;
  level: string;
  category: string;
  placement_report: string;
  curriculum: string;
  interview: string;
  videoLink: string;
  curriculum_data: Curriculum[];
  skills_data: string[];
  assesment_link: string;
  faqs_data: FAQ[];
}

const CourseEnrollPage: React.FC = () => {
  const router = useRouter();
  const { userData } = useContext(UserContext);
  const { coursedata } = router.query;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      email: userData.email || '',
      name: userData.name || '',
      phone: userData.phone || '',
    }
  });

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!coursedata || typeof coursedata !== 'string') {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/course/link?link=${encodeURIComponent(coursedata)}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('Course not found');
          } else {
            setError('Failed to fetch course data');
          }
          return;
        }

        const courseData: Course = await response.json();
        setCourse(courseData);
      } catch (err) {
        console.error('Error fetching course data:', err);
        setError('Failed to fetch course data');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [coursedata]);

  const onSubmit = async (data: EnrollmentFormData) => {
    if (!course) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare enrollment data
      const enrollmentData = {
        course_link: course.link,
        course_title: course.title,
        course_desc: course.shortDesc,
        duration: course.duration,
        level: course.level,
        category: course.category,
        email: data.email,
        name: data.name,
        phone: data.phone,
        advance: false,
        advanceAmount: 0,
        totalAmount: 0,
        verifyPayment: false,
        courseCompletion: false
      };

      // API call to submit enrollment
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit enrollment');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <React.Fragment>
        <Head>
          <title>Loading... | TechPratham</title>
        </Head>
        <Navbar />
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course data...</p>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  // Error state
  if (error || !course) {
    return (
      <React.Fragment>
        <Head>
          <title>Course Not Found | TechPratham</title>
        </Head>
        <Navbar />
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              {error || 'Course not found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.push('/courses')}
              className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors"
            >
              Browse All Courses
            </button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  const title = `${course.title} | TechPratham`;
  const description = course.description || course.shortDesc || "Explore a wide range of IT courses at TechPratham. Advance your career with industry-relevant training and expert-led classes.";
  const keywords = `${course.title}, TechPratham Courses, IT Training, Programming Courses, Data Science, Cloud Computing, Best IT Institute India, Online IT Courses`;
  const url = `https://www.techpratham.com/courses/${course.link}`;
  const image = "/navbar/techpratham.svg";

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
        <title>Enroll | {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="the-bipu" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Navbar />

      <div className='w-full h-auto flex flex-col items-center justify-center md:pt-28 sm:pt-24 pt-10 courseBgGirl'>
        <div className='md:w-10/12 w-11/12 h-auto flex flex-row items-end justify-between py-20'>
          {/* Course Title */}
          <div className="text-left mb-8 backdrop-blur-sm p-2">
            <h1 className="text-2xl md:text-3xl font-normal text-white mb-4">
              {course.title}
            </h1>
            <p className="text-base text-black max-w-3xl mx-auto">
              {course.shortDesc}
            </p>
          </div>

          {/* Enrollment Form */}
          <div className="w-full max-w-2xl">
            <Card className="shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-red-700" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Enroll in Course
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Complete your enrollment for this course. All fields are required.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Information Display */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Course Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start">
                      <div className='flex space-x-2'>
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Title:</span>
                      </div>
                      <span className="text-sm font-medium">{course.title}</span>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className='flex space-x-2'>
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Duration:</span>
                      </div>
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className='flex space-x-2'>
                        <BarChart3 className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Level:</span>
                      </div>
                      <span className="text-sm font-medium">{course.level}</span>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className='flex space-x-2'>
                        <Tag className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Category:</span>
                      </div>
                      <span className="text-sm font-medium">{course.category}</span>
                    </div>

                  </div>
                </div>

                {submitStatus === 'success' && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Enrollment submitted successfully! You will receive a confirmation email shortly.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">
                      {errorMessage}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-4">
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Full Name</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        {...register('name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register('phone')}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white"
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing Enrollment...
                      </>
                    ) : (
                      'Enroll Now'
                    )}
                  </Button>
                </div>

                {/* Terms and Conditions */}
                <div className="text-center text-xs text-gray-500 mt-4">
                  By clicking "Enroll Now", you agree to our{' '}
                  <a href="/terms" className="text-red-700 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-red-700 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default CourseEnrollPage;