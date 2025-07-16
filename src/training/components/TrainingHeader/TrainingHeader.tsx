import React from 'react';

const TrainingHeader = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10 pb-10 bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold'>
                Corporate Training
            </div>
            <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Empowering Teams with Practical Skills
            </div>
            <div className='text-center text-base md:text-lg'>
                Explore our industry-focused corporate training programs designed to upskill teams, boost productivity, and drive business growth. <br />
                Tailored solutions, real-world learning, and impactful results — all in one place.
            </div>
        </div>
    )
}

export default TrainingHeader