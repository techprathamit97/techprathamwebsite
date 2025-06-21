import React from 'react'

const MissionAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='md:col-span-1 text-justify'>
                    <div>Our Mission</div>
                    <div>
                        Our mission is to empower individuals with cutting-edge IT skills through innovative, hands-on training programs. We aim to bridge the gap between education and industry requirements, fostering a new generation of tech professionals who are prepared to excel in an ever evolving digital world.
                    </div>
                </div>
                <div className='md:col-span-1 text-justify'>
                    <div>Our Vision</div>
                    <div>
                        To be a leading IT training provider, shaping a future where technology education empowers individuals to achieve their career aspirations and drives innovation in the digital world. Through our commitment to excellence, accessibility,lifelong learning, we aim to shape a future where technology education transforms lives and empowers communities worldwide.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionAbout