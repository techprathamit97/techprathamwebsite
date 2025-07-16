import React from 'react';

const HeaderJobs = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10 pb-10 bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold'>
                Job Openings
            </div>
            <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Explore Careers at TechPratham
            </div>
            <div className='text-center text-base md:text-lg'>
                Join our team and help shape the future of learning.<br />
                For job inquiries, contact <a href="mailto:careers@techpratham.com" className="text-blue-600 underline">careers@techpratham.com</a>.
            </div>
        </div>
    )
}

export default HeaderJobs