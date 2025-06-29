import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import { allCourses } from '@/components/assets/courses';
import HeaderSection from '@/src/courses/common/HeaderSection/HeaderSection';
import FeatureSection from '@/src/courses/common/FeatureSection/FeatureSection';
import IntroSection from '@/src/courses/common/IntroSection/IntroSection';
import PlanSection from '@/src/courses/common/PlanSection/PlanSection';
import SpecialitySection from '@/src/courses/common/SpecialitySection/SpecialitySection';
import CurriculumSection from '@/src/courses/common/CurriculumSection/CurriculumSection';
import SkillSection from '@/src/courses/common/SkillSection/SkillSection';
import FaqSection from '@/src/courses/common/FaqSection/FaqSection';
import TestimonialSection from '@/src/courses/common/TestimonialSection/TestimonialSection';
import OtherCourse from '@/src/courses/common/OtherCourse/OtherCourse';

const CourseDataPage = () => {
    const router = useRouter();
    const { coursedata } = router.query;

    const course = allCourses.find(c => c.link === coursedata);

    if (!course) {
        return <div className="text-center pt-10 text-red-600 font-semibold">Course not found</div>;
    }

    return (
        <React.Fragment>
            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center gap-6 md:pt-28 sm:pt-24 pt-10'>
                
                <HeaderSection course={course} />

                <FeatureSection />

                <IntroSection course={course} />

                <PlanSection />

                <SpecialitySection />

                <CurriculumSection course={course} />

                <SkillSection course={course} />

                <FaqSection course={course} />

                <TestimonialSection />

                <OtherCourse course={course} />

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CourseDataPage