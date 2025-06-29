import { Card } from '@/components/ui/card'
import React from 'react'

const SkillSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-6 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Course Features</div>
                </div>
                <div className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    <Card className='px-4 py-2 rounded shadow-sm'>Live session with class recordings</Card>
                    <Card className='px-4 py-2 rounded shadow-sm'>Track your class wise attendance</Card>
                    <Card className='px-4 py-2 rounded shadow-sm'>Get study material with assignments</Card>
                    <Card className='px-4 py-2 rounded shadow-sm'>Share your feedback for trainers & Training</Card>
                    <Card className='px-4 py-2 rounded shadow-sm'>Track Your Curriculum covered</Card>
                    <Card className='px-4 py-2 rounded shadow-sm'>Get your training certificate from LMS</Card>
                </div>
            </div>
        </div>
    )
}

export default SkillSection