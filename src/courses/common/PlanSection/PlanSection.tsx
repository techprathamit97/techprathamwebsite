import { CaretUpIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

const PlanSection = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-6 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Training Plan</div>
                </div>
                <div className="relative flex flex-row flex-wrap items-start justify-between self-center">
                    {faqs_data?.map((item: any, index: any) => (
                        <div
                            className="md:w-[49%] w-full md:text-base text-sm py-5 px-5 my-3 cursor-pointer bg-[#fff] text-black border border-[#2b2b2b] rounded-md faqsCard"
                            key={index}
                            onClick={() => toggle(index)}
                        >
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

export default PlanSection

const faqs_data = [
    {
        que: "What is included in the training plan?",
        ans: "The training plan includes interactive sessions, hands-on projects, and regular assessments to track your progress."
    },
    {
        que: "How long does the training last?",
        ans: "The training typically lasts for 12 weeks, with flexible scheduling options available."
    },
    {
        que: "Are there any prerequisites?",
        ans: "No prior experience is required. The course is designed for beginners as well as those looking to refresh their skills."
    },
    {
        que: "Will I receive a certificate?",
        ans: "Yes, a certificate of completion will be provided at the end of the training."
    }
];