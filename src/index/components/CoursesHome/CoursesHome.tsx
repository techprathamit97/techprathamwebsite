import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const CoursesHome = () => {
    return (
        <div className='w-10/12 h-auto flex flex-col items-center justify-center bg-white text-black'>
            <div className='w-full h-auto flex flex-col py-10'>
                <div>Our Courses</div>
                <div>Programs to Help you upskill which lands you to your Dream Job</div>
                <Input className='w-96' />
            </div>
            <div className='flex flex-col items-center justify-center w-full h-auto'>
                <div>category</div>
                <div>cards</div>
                <Button variant='default'>Show More</Button>
            </div>
        </div>
    )
}

export default CoursesHome