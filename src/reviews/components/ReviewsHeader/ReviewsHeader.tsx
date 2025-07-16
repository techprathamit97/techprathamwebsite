import React from 'react';

const ReviewsHeader = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10 pb-10 bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold'>
                Reviews
            </div>
            <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Explore the Reviews from Students
            </div>
            <div className='text-center text-base md:text-lg'>
                Want to share your experience? You can write your review from the{' '}
                <a href="/user/dashboard/reviews" className="text-blue-400 underline">User Dashboard</a>.<br />
                Alternatively, feel free to send it via email to{' '}
                <a href="mailto:reviews@techpratham.com" className="text-blue-400 underline">reviews@techpratham.com</a>.
            </div>
        </div>
    )
}

export default ReviewsHeader