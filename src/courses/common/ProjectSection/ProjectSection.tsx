import React from 'react'

const ProjectSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7] text-black'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className='w-full h-auto flex flex-row items-center justify-between'>
                    <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Key Projects</div>
                    <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">{course.title}</div>
                </div>

                <div className='w-full h-auto flex flex-col gap-8 items-center justify-center mt-6'>
                    <div className='w-64 h-64 rounded-full border border-red-800 md:text-3xl text-2xl md:font-semibold font-medium flex items-center justify-center text-center'>
                        {course.title}
                    </div>

                    <div className='flex flex-row gap-20 items-center justify-between'>
                        {course.projects.map((item: any, index: any) => (
                            <div className='w-full flex flex-col items-center justify-center text-center text-white'>
                                <div className='bg-gray-600 w-full p-4'>{item.title}</div>
                                <div className='bg-blue-700 w-full p-4'>{item.objective}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectSection