import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react'

interface Course {
  id: string;
  title: string;
  category: string;
  link: string;
  shortDesc: string;
  level: string;
  rating: number;
  duration: string;
  description: string;
}

interface CourseCategory {
  name: string;
  courses: Course[];
}

interface CoursesHomeProps {
  course: Course[];
  coursesByCategory: CourseCategory[];
}

const CoursesHome: React.FC<CoursesHomeProps> = ({ course, coursesByCategory }) => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  const handleCategorySelect = (idx: number): void => {
    setSelectedCategoryIdx(idx);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-50'
      case 'Intermediate': return 'text-blue-600 bg-blue-50'
      case 'Advanced': return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  // Get the courses for the selected category
  const selectedCourses = coursesByCategory[selectedCategoryIdx]?.courses || [];

  return (
    <div className='w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-[#f7f7f7] text-black'>

      <div className='md:w-full w-11/12 h-auto flex flex-col text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Our Courses</div>
        <div className="md:text-lg text-base text-gray-600 md:max-w-2xl w-full mx-auto">Programs to Help you upskill which lands you to your Dream Job</div>
      </div>

      <div className='md:w-10/12 w-11/12 flex flex-col items-center justify-center h-auto'>
        <div className='flex flex-wrap w-full justify-center gap-4 rounded-lg'>
          {coursesByCategory.map((category, idx) => (
            <button
              key={`${category.name}-${idx}`}
              onClick={() => handleCategorySelect(idx)}
              className={`px-4 py-1 rounded-full transition-all duration-100 font-normal ${selectedCategoryIdx === idx
                ? 'bg-gradient-to-r from-[#CD4647] to-[#7F3B40] text-white shadow-md transform scale-105'
                : 'bg-white text-gray-700 hover:bg-[#ffe9e9] hover:text-[#7F3B40] border border-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center pt-8">
          {selectedCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className="w-full max-w-sm h-auto flex flex-col p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-xl font-semibold text-gray-800 leading-tight">{course.title}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>

              <div className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                {course.shortDesc}
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-600 font-medium">{course.rating}</span>
                </div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {course.duration}
                </div>
              </div>

              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:bg-blue-700 transition-colors duration-200"
              >
                View More
              </Button>
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <Button className='flex items-center justify-center text-base font-normal rounded-full bg-gradient-to-r from-[#CD4647] to-[#7F3B40] text-white'>
            <span>View More Courses</span>
            <ChevronRightIcon />
          </Button>
        </div>

      </div>
    </div>
  )
}

export default CoursesHome