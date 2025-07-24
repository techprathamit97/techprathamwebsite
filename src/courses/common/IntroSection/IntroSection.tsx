import React from 'react';

const IntroSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto grid md:grid-cols-5 grid-cols-1 gap-8 py-16'>
                <div className='md:col-span-3 col-span-1 w-full h-auto flex flex-col items-start gap-4'>
                    <div className='text-center space-y-4'>
                        <div className='inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200'>
                            <div className='w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full'></div>
                            <span className='text-base font-bold text-gray-800 uppercase tracking-wider'>What is {course.title}?</span>
                        </div>
                    </div>
                    <div className='w-full h-full text-base font-normal text-gray-600'>{course.description}</div>
                </div>
                <div className="md:col-span-2 col-span-1 flex items-center justify-center w-full h-full">
                    <iframe width="100%" height="320" src={course.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-lg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default IntroSection