import React from 'react';
import './blogsHome.css';
import { Button } from '@/components/ui/button';

const BlogsHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center pt-20 pb-10 gap-10 bg-black text-white'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium capitalize">Read Our <span className='bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text'>Latest Blogs</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 md:w-10/12 w-11/12 justify-items-center text-white">
        {blogData.map((blog, index) => (
          <div key={index} className={`w-full h-64 rounded-xl border-2 border-red-600 flex flex-col items-start justify-end boxShadow p-4 ${blog.class}`}>
            <div className='font-semibold text-lg'>{blog.title}</div>
            <div className="text-sm font-light">{blog.description}</div>
          </div>
        ))}
      </div>
      <div>
        <Button variant='manual' className='rounded-full text-lg font-light px-6'>View All Blogs</Button>
      </div>
    </div>
  )
}

export default BlogsHome

const blogData = [
  {
    title: "Understanding AI: A Beginner’s Guide",
    description: "Explore the fundamentals of Artificial Intelligence and how it's shaping our future.",
    class: "bgAI"
  },
  {
    title: "Mastering Data Science",
    description: "Learn the core concepts and tools used in data science today.",
    class: "bgDS"
  },
  {
    title: "Top 10 Machine Learning Algorithms",
    description: "Get to know the most widely used ML algorithms with real-world applications.",
    class: "bgML"
  },
];
