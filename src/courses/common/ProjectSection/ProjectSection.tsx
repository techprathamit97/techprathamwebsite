import React from 'react';
import Image from 'next/image';

const ProjectSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7] text-black'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className='w-full h-auto flex flex-row items-center justify-between'>
                    <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Key Projects</div>
                    <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">{course.title}</div>
                </div>

                <div className='w-full h-auto flex flex-col gap-8 items-center justify-center mt-6'>
                    <div className='w-72 h-72 relative flex items-center justify-center'>
                        <div className='w-44 md:text-2xl text-xl md:font-semibold font-medium text-center'>
                            {course.title}
                        </div>
                        <Image src='/course/project.png' alt='' width={40} height={40} className='w-full absolute top-0 right-0' />
                    </div>

                    <div className='flex flex-row gap-20 items-start justify-between'>
                        {course?.projects?.map((item: any, index: any) => (
                            <div key={index} className='w-full flex flex-col items-center justify-center text-center shadow text-white'>
                                <div className='bg-[#D1CCC8] text-black w-full p-4'>{item.title}</div>
                                <div className='bg-[#283256] w-full p-4'>{item.objective}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectSection