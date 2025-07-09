import React from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './header.css';

const HeaderSection = ({ course }: any) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto headerImage text-white'>
            <div className="md:w-10/12 w-11/12 h-auto grid md:grid-cols-2 grid-cols-1 gap-10 py-20">
                <div>
                    <div className='flex flex-row gap-2 items-center justify-start mb-6'>
                        <span>Courses</span>
                        <ChevronRightIcon />
                        <span>{course.category}</span>
                        <ChevronRightIcon />
                        <span>{course.title}</span>
                    </div>

                    <span className={`px-4 py-1 rounded-full text-base font-normal bg-gray-700 text-gray-200`}>
                        {course.category}
                    </span>

                    <div className="text-3xl font-semibold leading-tight flex-1 pr-2 mt-3 mb-1">{course.title}</div>
                    <div className="text-base mb-4 flex-grow flex flex-row gap-2">
                        <CircleCheck className='w-6 h-6 mt-[2px]' />
                        <div>{course.shortDesc}</div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                        <span className="flex flex-row items-center justify-start">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fcbc05" className="w-6 h-6">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fcbc05" className="w-6 h-6">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fcbc05" className="w-6 h-6">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fcbc05" className="w-6 h-6">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" className="w-6 h-6">
                                <defs>
                                    <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="50%" stopColor="#fcbc05" />
                                        <stop offset="50%" stopColor="#ffffff" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                    fill="url(#halfFill)"
                                    stroke="#fcbc05"
                                    strokeWidth="0.5"
                                />
                            </svg>
                        </span>
                        <span className="text-[#fcbc05] text-base font-medium">{course.rating}</span>
                    </div>

                    <div className="flex px-6 py-3 gap-4 rounded-xl border border-gray-200 max-w-fit mb-4">
                        <div className="flex flex-col gap-1">
                            <p className="md:text-sm xs:text-xs text-gray-300">Level</p>
                            <p className="md:text-xl xs:text-base font-semibold text-gray-200">{course.level}</p>
                        </div>
                        <div className="h-8 w-px bg-gray-300 self-center"></div>
                        <div className="flex flex-col gap-1">
                            <p className="md:text-sm xs:text-xs text-gray-300">Duration</p>
                            <p className="md:text-xl xs:text-base font-semibold text-gray-200">{course.duration}</p>
                        </div>
                    </div>

                    <div className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                        <Button className='bg-[#525252]'>PLACEMENT REPORT</Button>
                        <Button className='bg-[#00000041] border border-white'>DOWNLOAD CURRICULUM</Button>
                        <Button className='bg-[#00000041] border border-white'>INTERVIEW QUESTIONS</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <iframe width="100%" height="365" src={course.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-lg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection