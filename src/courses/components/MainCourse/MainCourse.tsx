import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const MainCourse = ({ course, isLoading }: any) => {

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

  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-12 text-black'>

      <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center h-auto'>
        {isLoading ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md bg-white">

                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 pr-2">
                    <Skeleton className="h-6 w-3/4" />
                  </div>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>

                <div className="mb-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>

                <div className="mb-4 flex-grow">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-4/5 mb-2" />
                  <Skeleton className="h-4 w-3/5" />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <Skeleton className="h-6 w-16 rounded" />
                </div>

                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
            {course.map((course: any, index: any) => (
              <div
                key={index}
                className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              >
                <Image
                  src={course?.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-start mb-3">
                  <div className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">{course.title}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                <div className="mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{course.shortDesc}</div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-600 font-medium">{course.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {course.duration}
                  </div>
                </div>

                <Link href={`/courses/${course.link}`} className="w-full">
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
        )}
      </div>
    </div>
  )
}

export default MainCourse