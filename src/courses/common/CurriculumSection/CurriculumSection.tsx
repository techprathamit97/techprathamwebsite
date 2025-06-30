import { VideoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

const CurriculumSection = ({ course }: any) => {
    const [selected, setSelected] = useState<number | null>(0);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col pt-8 pb-16 gap-6'>
                <div className='text-left flex flex-col gap-3 items-start justify-center'>
                    <div className='text-2xl font-semibold '>{course.title} Course Curriculum</div>
                    <div className='text-base font-light'>{course.description}</div>
                </div>
                <div className="relative flex flex-col gap-3 items-start justify-between">
                    {course?.curriculum_data?.map((item: any, index: any) => (
                        <div
                            className={`w-full md:text-base text-sm py-2 px-4 cursor-pointer text-black border-l-2 border-l-[#d2d2d2]${selected === index ? 'font-normal bg-[#f7f7f7]' : 'bg-white'}`}
                            key={index}
                            onClick={() => toggle(index)}
                        >
                            <div className="flex items-center justify-start gap-2">
                                <VideoIcon className="text-[#2b2b2b] w-5 h-5" />
                                <p className="md:pr-4 pr-0 font-normal">{item.que}</p>
                            </div>
                            <div
                                className={
                                    selected === index
                                        ? "overflow-hidden transition-all pt-3 pb-1 max-h-96 ease-out duration-700 font-light"
                                        : "overflow-hidden transition-all max-h-0 duration-300"
                                }
                            >
                                <p>{item.ans}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurriculumSection