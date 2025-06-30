import { CaretUpIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

const FaqSection = ({ course }: any) => {
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
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Frequently Asked Questions (FAQs)</div>
                </div>
                <div className="relative flex flex-col gap-4 items-start justify-between">
                    {course?.faqs_data?.map((item: any, index: any) => (
                        <div className={`w-full md:text-base text-sm px-4 pt-3 pb-1 cursor-pointer text-black border-t-2 border-t-[#f7f7f7] ${selected === index && 'bg-[#f7f7f7]'} `} key={index} onClick={() => toggle(index)}>
                            <div className="flex items-center justify-between">
                                <p className="md:pr-4 pr-0 font-normal">{item.que}</p>
                                {selected === index ? (
                                    <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-0' />
                                ) : (
                                    <CaretUpIcon className='md:flex hidden w-6 h-6 transition-all duration-300 rotate-180' />
                                )}
                            </div>
                            <div
                                className={
                                    selected === index
                                        ? "overflow-hidden transition-all md:py-4 py-3 max-h-96 ease-out duration-700 font-light"
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

export default FaqSection