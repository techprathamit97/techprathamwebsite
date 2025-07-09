import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { allCourses } from '@/components/assets/courses';
import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import HeaderSection from '@/src/courses/common/HeaderSection/HeaderSection';
import IntroSection from '@/src/courses/common/IntroSection/IntroSection';
import PlanSection from '@/src/courses/common/PlanSection/PlanSection';
import CurriculumSection from '@/src/courses/common/CurriculumSection/CurriculumSection';
import SkillSection from '@/src/courses/common/SkillSection/SkillSection';
import FaqSection from '@/src/courses/common/FaqSection/FaqSection';
import TestimonialSection from '@/src/courses/common/TestimonialSection/TestimonialSection';
import OtherCourse from '@/src/courses/common/OtherCourse/OtherCourse';
import CourseCertification from '@/src/courses/common/CourseCertification/CourseCertification';
import ProjectSection from '@/src/courses/common/ProjectSection/ProjectSection';
import AssesmentSection from '@/src/courses/common/AssesmentSection/AssesmentSection';

const CourseDataPage = () => {
    const router = useRouter();
    const { coursedata } = router.query;

    const course = allCourses.find(c => c.link === coursedata);

    if (!course) {
        return <div className="text-center pt-10 text-red-600 font-semibold">Course not found</div>;
    }

    const title = `${course.title} | TechPratham - India's Leading IT Training Institute`;
    const description = course.description || "Explore a wide range of IT courses at TechPratham. Advance your career with industry-relevant training and expert-led classes.";
    const keywords = `${course.title}, TechPratham Courses, IT Training, Programming Courses, Data Science, Cloud Computing, Best IT Institute India, Online IT Courses`;
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

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center md:pt-28 sm:pt-24 pt-10'>

                <HeaderSection course={course} />

                <SkillSection course={course} />

                <IntroSection course={course} />

                <PlanSection />

                <CurriculumSection course={course} />

                <ProjectSection course={course} />

                <AssesmentSection course={course} />

                <TestimonialSection course={course} />

                <FaqSection course={course} />

                <CourseCertification />

                <OtherCourse course={course} />

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CourseDataPage