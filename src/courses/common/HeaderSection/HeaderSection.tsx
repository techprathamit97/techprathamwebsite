import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const HeaderSection = ({ course }: any) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto bg-gradient-to-tl from-[#371414] to-[#D1090F] text-white'>
            <div className="md:w-10/12 w-11/12 h-auto grid md:grid-cols-2 grid-cols-1 gap-10 py-16">
                <div>
                    <div className='flex flex-row gap-2 items-center justify-start mb-6'>
                        <span>Courses</span>
                        <ChevronRightIcon />
                        <span>{course.category}</span>
                        <ChevronRightIcon />
                        <span>{course.title}</span>
                    </div>

                    <div className="text-3xl font-semibold leading-tight flex-1 pr-2 mb-3">{course.title}</div>

                    <div className="mb-3 flex flex-row gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700`}>
                            {course.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-red-400`}>
                            {course.level}
                        </span>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {course.duration}
                        </div>
                    </div>

                    <div className="text-sm mb-4 flex-grow leading-relaxed">{course.shortDesc}</div>

                    <div className="flex items-center gap-1 mb-4">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-yellow-600 text-sm font-medium">{course.rating}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/yy9GZ5_BWGE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-lg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection