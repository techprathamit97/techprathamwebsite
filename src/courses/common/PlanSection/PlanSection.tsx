import React, { useState } from 'react';
import { CaretUpIcon } from '@radix-ui/react-icons';

const PlanSection = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7] text-black'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Training Plan</div>
                <div className="relative grid md:grid-cols-2 grid-cols-1 gap-4">
                    {training_data?.map((item: any, index: any) => (
                        <div className="w-full md:text-base text-sm py-3 px-4 cursor-pointer border rounded shadow-sm bg-white text-black" key={index} onClick={() => toggle(index)}>
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
                                        ? "overflow-hidden transition-all pt-3 pb-2 max-h-96 ease-out duration-700 font-light"
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

const training_data = [
    {
        que: "About trainer",
        ans: "Working professional who is carrying more then 10 years of industry experience."
    },
    {
        que: "Decks",
        ans: "The candidate will get access to the presentation taken-up during the session."
    },
    {
        que: "Notes",
        ans: "Consolidated notes in word document."
    },
    {
        que: "Assignments",
        ans: "Assignments for every module will be covered."
    },
    {
        que: "MCQs",
        ans: "MCQs for every module covered in the session would be provided."
    },
    {
        que: "Video Recording",
        ans: "Daily Session would be recorded and shared to the candidate."
    },
    {
        que: "Dumps for Certification",
        ans: "We will provide dumps for the certification exam, which will help you to prepare for the exam."
    },
    {
        que: "Updated Content",
        ans: "We provide Generative AI Driven content By experts."
    },
    {
        que: "Projects",
        ans: "3 Live Projects will be provided for practice."
    }
];