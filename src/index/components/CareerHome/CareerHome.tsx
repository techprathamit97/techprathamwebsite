import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const CareerHome = () => {
  return (
    <div className='w-10/12 h-auto flex flex-col items-center justify-center py-10 bg-white text-black'>
      <div>In Association With</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 w-full justify-items-center py-4">
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
        <Image src='/next.svg' alt='' width={100} height={50} className='w-40' />
      </div>
      <div className='w-full h-auto flex flex-col text-center py-10'>
        <div>Our Courses</div>
        <div>Programs to Help you upskill which lands you to your Dream Job</div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-auto'>
        <div className='flex flex-row gap-4 w-full h-auto p-4'>
          <div>Trending Courses</div>
          <div>Data Science</div>
          <div>Software Development</div>
          <div>Cloud Computing</div>
          <div>Fashion & Interior</div>
          <div>SAP</div>
          <div>HR</div>
          <div>Language</div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 w-full justify-items-center py-4">
          {courses.map((course, index) => (
            <div key={index} className="w-80 h-auto flex flex-col p-4 border rounded-xl shadow-md">
              <div className="text-xl font-semibold mb-2">{course.title}</div>
              <div className="text-sm text-gray-600 mb-2">{course.description}</div>
              <div className="text-yellow-600 font-medium mb-4">{course.rating}</div>
              <Button variant="default">View More</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CareerHome

const courses = [
  {
    title: "Advance Generative AI",
    description: "Explore cutting-edge AI models and generation techniques.",
    rating: "4.8/5",
  },
  {
    title: "Data Analytics",
    description: "Learn data wrangling, visualization, and insights generation.",
    rating: "4.5/5",
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern frameworks.",
    rating: "4.7/5",
  },
  {
    title: "Cybersecurity Essentials",
    description: "Understand threats, attacks, and defensive strategies.",
    rating: "4.6/5",
  },
  {
    title: "Cloud Computing",
    description: "Work with AWS, Azure, and cloud architecture principles.",
    rating: "4.4/5",
  },
  {
    title: "UI/UX Design",
    description: "Design user interfaces that are both functional and beautiful.",
    rating: "4.3/5",
  },
  {
    title: "Python for Beginners",
    description: "Start coding with Python – easy to learn, powerful to use.",
    rating: "4.6/5",
  },
  {
    title: "Machine Learning Basics",
    description: "Get started with ML models, algorithms, and datasets.",
    rating: "4.7/5",
  },
];