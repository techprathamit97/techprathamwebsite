import React from 'react';
import './blogsHome.css'
import { Button } from '@/components/ui/button';

const BlogsHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-white text-black'>
      <div className='w-10/12 h-auto flex flex-col items-center text-center'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium capitalize">Read Our Latest Blogs</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 justify-items-center text-white">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className={`w-full h-64 rounded-xl border border-white flex flex-col items-start justify-end p-4 ${blog.class}`}
          >
            <div className='font-medium'>{blog.title}</div>
            <div className="text-sm font-light">{blog.description}</div>
          </div>
        ))}
      </div>
      <div>
        <Button>View All Blogs</Button>
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
