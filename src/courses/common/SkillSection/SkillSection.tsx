import { Card } from '@/components/ui/card'
import React from 'react'

const SkillSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Top Skills & Tools Covered</div>
                </div>
                <div className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Hands-on Project Work</div>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Industry-Relevant Tools</div>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Problem Solving & Critical Thinking</div>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Collaboration & Teamwork</div>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Effective Communication Skills</div>
                    <div className='px-4 py-2 border rounded shadow-sm bg-white'>Career Guidance & Mentorship</div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection