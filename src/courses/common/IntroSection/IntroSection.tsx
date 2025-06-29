import React from 'react'

const IntroSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-6 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>What is {course.title}?</div>
                </div>
                <div className='w-full h-auto grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>Live session with class recordings</div>
                    <div>Track your class wise attendance</div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection