import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const HeaderSection = ({ course }: any) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto bg-gradient-to-tl from-[#371414] to-[#D1090F] text-white'>
            <div
                className="md:w-10/12 w-11/12 h-auto flex flex-col py-10"
            >
                <div className='flex flex-row gap-2 items-center justify-start mb-6'>
                    <span>Courses</span>
                    <ChevronRightIcon />
                    <span>{course.category}</span>
                    <ChevronRightIcon />
                    <span>{course.title}</span>
                </div>
                <div className="flex justify-between items-start mb-3">
                    <div className="text-3xl font-semibold leading-tight flex-1 pr-2">{course.title}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-red-400`}>
                        {course.level}
                    </span>
                </div>

                <div className="mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700`}>
                        {course.category}
                    </span>
                </div>

                <div className="text-sm mb-4 flex-grow leading-relaxed">{course.description}</div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-yellow-600 text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {course.duration}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection