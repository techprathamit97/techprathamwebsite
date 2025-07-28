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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10'>
                    {course?.project_data?.map((item: any, index: any) => (
                        <div key={index} className='w-full h-full flex flex-col items-center justify-center p-4 rounded-md bg-gradient-to-tl from-[#4e1919] to-[#ab050e] text-white min-h-[200px]'>
                            <div className='w-full p-4 text-center'>{item.title}</div>
                            <div className='w-full p-4 text-center'>{item.objective}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjectSection