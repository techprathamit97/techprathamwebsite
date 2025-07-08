import React from 'react';

const SkillSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Top Skills & Tools Covered</div>
                </div>
                <div className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 border-2 border-orange-500'>
                    {course?.skills_data.map((skill: any, idx: any) => (
                        <div key={idx} className='p-6'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillSection