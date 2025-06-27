import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import { allCourses } from '@/components/assets/courses';
import { ChevronRightIcon } from '@radix-ui/react-icons';

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

            <div className='w-full h-auto flex flex-col items-center justify-center gap-6 md:pt-36 sm:pt-24 pt-10'>
                <div
                    className="md:w-10/12 w-11/12 h-auto flex flex-col p-6 bg-white"
                >
                    <div className='flex flex-row gap-2 items-center justify-start mb-6'>
                        <span>Courses</span>
                        <ChevronRightIcon />
                        <span>{course.category}</span>
                        <ChevronRightIcon />
                        <span>{course.title}</span>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <div className="text-3xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.title}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-red-400`}>
                            {course.level}
                        </span>
                    </div>

                    <div className="mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700`}>
                            {course.category}
                        </span>
                    </div>

                    <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.description}</div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-yellow-600 font-medium">{course.rating}</span>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {course.duration}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CourseDataPage