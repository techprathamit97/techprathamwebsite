import React from 'react';
import './blogsHome.css'
import { Button } from '@/components/ui/button';

const BlogsHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-white text-black'>
      <div className='w-10/12 h-auto flex flex-col items-center text-center'>
        <div className="text-2xl font-semibold capitalize">Read Our Latest Blogs</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 justify-items-center text-white">
        <div className='w-full h-64 rounded-xl border border-white flex flex-col items-start justify-end p-4 bgImage'>
          <div>Here the title</div>
          <div className='text-sm font-light'>Here the description</div>
        </div>
        <div className='w-full h-64 rounded-xl border border-white flex flex-col items-start justify-end p-4 bgImage'>
          <div>Here the title</div>
          <div className='text-sm font-light'>Here the description</div>
        </div>
        <div className='w-full h-64 rounded-xl border border-white flex flex-col items-start justify-end p-4 bgImage'>
          <div>Here the title</div>
          <div className='text-sm font-light'>Here the description</div>
        </div>
      </div>
      <div>
        <Button>View All Blogs</Button>
      </div>
    </div>
  )
}

export default BlogsHome