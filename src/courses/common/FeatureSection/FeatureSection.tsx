import React from 'react'

const FeatureSection = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-6 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Course Features</div>
                    <div className='px-4 py-1 rounded-full border border-black text-base font-light'>100% Money Back Guarantee</div>
                </div>
                <div className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>Live session with class recordings</div>
                    <div>Track your class wise attendance</div>
                    <div>Get study material with assignments</div>
                    <div>Share your feedback for trainers & Training</div>
                    <div>Track Your Curriculum covered</div>
                    <div>Get your training certificate from LMS</div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection