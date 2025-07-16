import React from 'react';

const BlogsHeader = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10 pb-10 bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold'>
                Blogs
            </div>
            <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Discover Insights, Trends & Tech Stories
            </div>
            <div className='md:w-9/12 w-11/12 text-center text-base md:text-lg'>
                Explore our latest articles on emerging technologies, industry trends, learning resources, and expert tips curated to keep you ahead in the tech world. Stay inspired, stay informed.
            </div>
        </div>

    )
}

export default BlogsHeader