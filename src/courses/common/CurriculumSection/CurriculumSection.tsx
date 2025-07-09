import { Separator } from '@/components/ui/separator';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { CircleCheckBig } from 'lucide-react';
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
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className='text-left flex flex-col gap-3 items-start justify-center'>
                    <div className='text-2xl font-semibold '>{course.title} Course Curriculum</div>
                    <div className='text-base font-normal text-gray-600'>{course.description}</div>
                </div>
                <div className="relative flex flex-col gap-3 items-start justify-between bg-[#f7f7f7] rounded-lg p-5">
                    {course?.curriculum_data?.map((item: any, index: any) => (
                        <div className='w-full flex flex-row gap-2 h-auto'>
                            <div className='flex flex-col items-center'>
                                <div className='w-4 h-4 bg-red-600 text-red-600 rounded-full flex items-center justify-center'>.</div>
                                <Separator orientation='vertical' />
                            </div>
                            <div className='w-full text-sm md:text-base text-gray-600 leading-relaxed px-5 py-4 rounded-md cursor-pointer bg-white' key={index} onClick={() => toggle(index)}>
                                <div className="flex flex-row items-start justify-between gap-2">
                                    <p className="text-base md:text-lg font-medium text-gray-900 tracking-tight flex flex-col gap-2">
                                        <div>{item.que}</div>
                                        <div className='text-sm'>Section {index + 1}</div>
                                    </p>
                                    <div className='bg-red-200 text-red-700 rounded-full'>
                                        {selected === index ? (
                                            <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-0' />
                                        ) : (
                                            <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-180' />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={
                                        selected === index
                                            ? "overflow-hidden transition-all pt-3 pb-1 max-h-96 ease-out duration-700 font-light"
                                            : "overflow-hidden transition-all max-h-0 duration-300"
                                    }
                                >
                                    <Separator className='w-full h-[0.5px] mb-4' />
                                    <div className='mb-4'>{item.ans}</div>
                                    {item?.topics?.map((item: any, index: any) => (
                                        <div key={index} className='text-base flex flex-row items-center justify-start gap-2 mb-1'>
                                            <CircleCheckBig className='w-4 h-4' /> <span> {item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurriculumSection