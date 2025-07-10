import { allCourses } from '@/components/assets/courses';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const OtherCourse = ({ course }: any) => {
    const getLevelColor = (level: any) => {
        switch (level) {
            case 'Beginner': return 'text-green-600 bg-green-50'
            case 'Intermediate': return 'text-blue-600 bg-blue-50'
            case 'Advanced': return 'text-purple-600 bg-purple-50'
            default: return 'text-gray-600 bg-gray-50'
        }
    }

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'AI & Machine Learning': 'text-orange-600 bg-orange-50',
            'Software Development': 'text-blue-600 bg-blue-50',
            'Data Science': 'text-indigo-600 bg-indigo-50',
            'Cybersecurity': 'text-red-600 bg-red-50',
            'Cloud Computing': 'text-cyan-600 bg-cyan-50',
            'Fashion & Interior': 'text-pink-600 bg-pink-50',
            'SAP': 'text-yellow-600 bg-yellow-50',
            'HR': 'text-emerald-600 bg-emerald-50',
            'Language': 'text-violet-600 bg-violet-50'
        }
        return colors[category] || 'text-gray-600 bg-gray-50'
    }

    const getRelatedCourses = () => {
        if (!course || !course.category) {
            return allCourses.slice(0, 3);
        }

        return allCourses
            .filter(c => c.category === course.category && c.title !== course.title)
            .slice(0, 3);
    }

    const relatedCourses = getRelatedCourses();

    return (
        <div className='w-full h-auto flex flex-col gap-10 items-center justify-center text-black'>
            <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center py-16 h-auto'>

                {course && course.category && (
                    <h2 className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize mb-10">
                        Other {course.category} Courses
                    </h2>
                )}

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
                    {relatedCourses.slice(0, 3).map((courseItem, index) => (
                        <div
                            key={index}
                            className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{courseItem.title}</div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(courseItem.level)}`}>
                                    {courseItem.level}
                                </span>
                            </div>

                            <div className="mb-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(courseItem.category)}`}>
                                    {courseItem.category}
                                </span>
                            </div>

                            <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{courseItem.shortDesc}</div>

                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-yellow-600 font-medium">{courseItem.rating}</span>
                                </div>
                                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {courseItem.duration}
                                </div>
                            </div>

                            <Link href={`/courses/${courseItem.link}`} className="w-full">
                                <Button
                                    variant="default"
                                    className="w-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:from-[#B73E3F] hover:to-[#6F3336] transition-all duration-200"
                                >
                                    Enroll Now
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Show message if no related courses found */}
                {relatedCourses.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                        No related courses found in this category.
                    </div>
                )}
            </div>
        </div>
    )
}

export default OtherCourse