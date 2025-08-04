import React from 'react';
import { ArrowTopRightIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const HeaderSection = ({ course }: any) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto headerImage text-white relative'>

            <Link href={`/courses/enrollment/${course.link}`} className='absolute top-10 right-10 w-12 h-12 rounded-full border border-white grid place-content-center transition-all duration-300 hover:text-black hover:bg-white cursor-pointer'>
                <ArrowTopRightIcon className='w-8 h-8' />
            </Link>

            <div className="md:w-10/12 w-11/12 h-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center py-16">
                <div className='w-full h-auto'>
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

                    <div className='w-full h-auto flex flex-row items-center justify-between mb-4'>
                        <div className="flex items-center gap-1">
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
                        <div className="flex flex-row gap-2 text-base font-normal">
                            <div className="flex flex-row gap-2 items-center">
                                <Image alt="google" src="/course/rating/google.svg" width="15" height="15" className='h-5 w-auto' />
                                <span>4.2/5</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Image alt="Sulekha" src="/course/rating/sul.png" width="15" height="15" className='h-5 w-auto' />
                                <span>4.8/5</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Image alt="Urbonpro" src="/course/rating/urbonpro.png" width="15" height="15" className='h-5 w-auto' />
                                <span>4.6/5</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Image alt="Just Dial" src="/course/rating/justdial.png" width="15" height="15" className='h-5 w-auto' />
                                <span>4.3/5</span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Image alt="Fb" src="/course/rating/facebook.svg" width="15" height="15" className='h-5 w-auto' />
                                <span>4.5/5</span>
                            </div>
                        </div>
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

                    <div className='w-full h-auto flex flex-row gap-3'>
                        <Link href={course?.assesment_link} className='w-auto'>
                            <Button variant='manual' className='w-full'>SELF ASSESMENT</Button>
                        </Link>
                        <Link href={course?.curriculum} className='w-auto'>
                            <Button variant='outline' className='w-full'>DOWNLOAD CURRICULUM</Button>
                        </Link>
                        <Link href={course?.interview} className='w-auto'>
                            <Button variant='outline' className='w-full'>INTERVIEW QUESTIONS</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection