import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import HeaderSection from '@/src/courses/common/HeaderSection/HeaderSection';
import IntroSection from '@/src/courses/common/IntroSection/IntroSection';
import PlanSection from '@/src/courses/common/PlanSection/PlanSection';
import CurriculumSection from '@/src/courses/common/CurriculumSection/CurriculumSection';
import FaqSection from '@/src/courses/common/FaqSection/FaqSection';
import TestimonialSection from '@/src/courses/common/TestimonialSection/TestimonialSection';
import CourseCertification from '@/src/courses/common/CourseCertification/CourseCertification';
import ProjectSection from '@/src/courses/common/ProjectSection/ProjectSection';
import CertificateSection from '@/src/courses/common/CertificateSection/CertificateSection';
import OtherCourse from '@/src/courses/common/OtherCourse/OtherCourse';
import ReachForm from '@/components/common/ReachForm/ReachForm';
import ToolTip from '@/components/common/ToolTip/ToolTip';

interface Curriculum {
  que: string;
  ans: string;
  topics: string[];
}

interface FAQ {
  que: string;
  ans: string;
}

interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
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
  metadata?: Metadata;
}

const CourseDataPage: React.FC = () => {
  const router = useRouter();
  const { coursedata } = router.query;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  // SEO and meta data
  const title = course.metadata?.title || `${course.title} | TechPratham - India's Leading IT Training Institute`;
  const description = course.metadata?.description || course.description || course.shortDesc || "Explore a wide range of IT courses at TechPratham. Advance your career with industry-relevant training and expert-led classes.";
  const keywords = course.metadata?.keywords?.join(', ') || `${course.title}, TechPratham Courses, IT Training, Programming Courses, Data Science, Cloud Computing, Best IT Institute India, Online IT Courses`;
  const url = `https://www.techpratham.com/courses/${course.link}`;
  const image = "/navbar/techpratham.svg";

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
        <title>{title}</title>
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

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
      </Head>

      <Navbar />

      <div className='w-full h-auto flex flex-col items-center justify-center md:pt-28 sm:pt-24 pt-10'>
        <ReachForm />
        <ToolTip />
        <HeaderSection course={course} />
        <IntroSection course={course} />
        <PlanSection />
        <CurriculumSection course={course} />
        <ProjectSection course={course} />
        <CertificateSection course={course} />
        <TestimonialSection course={course} />
        <FaqSection course={course} />
        <CourseCertification />
        <OtherCourse course={course} />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default CourseDataPage;