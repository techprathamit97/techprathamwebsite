import React from 'react'

const BannerAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-16'>
                <div className='md:col-span-1 text-justify'>
                    <div>Why Students Choose Us to Groom their Career</div>
                    <div>
                        Expand your career opportunities with India's most trusted IT &i@nstitute. Get job-ready for an in-demand career. Choose from Multiple certification programs with us.
                    </div>
                    <div>
                        <div>More than 68806+ Students Trained.</div>
                        <div>Team of 470+ Experienced & Certified Instructors.</div>
                        <div>250+ Collaboration with Universities & Companies.</div>
                        <div>ISO 9001:2015 Accredited Company.</div>
                        <div>Industry Recognised Verifiable Certificate.</div>
                    </div>
                </div>
                <div className='md:col-span-1'>here image</div>
            </div>
        </div>
    )
}

export default BannerAbout