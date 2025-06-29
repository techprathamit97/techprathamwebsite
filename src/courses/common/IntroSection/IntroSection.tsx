import React from 'react'

const IntroSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto grid md:grid-cols-3 grid-cols-1 gap-8 pt-8 pb-16'>
                <div className='md:col-span-2 col-span-1 w-full h-auto flex flex-col gap-2'>
                    <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                        What is {course.title}?
                    </div>
                    <div className='w-full h-full'>{course.description}</div>
                </div>
                <div className="col-span-1 flex items-center justify-center w-full h-full">
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/yy9GZ5_BWGE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-lg"></iframe>
                </div>
            </div>
        </div>
    )
}

export default IntroSection