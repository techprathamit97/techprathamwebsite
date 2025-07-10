import Image from 'next/image';
import React from 'react';

const PlanSection = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 bg-[#f7f7f7] text-black'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-16 gap-6'>
                <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Training Plan</div>
                <div className="relative grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {training_data?.map((item: any, index: any) => (
                        <div className="w-full py-4 px-5 cursor-pointer border rounded shadow-sm bg-white text-black" key={index}>
                            <Image src={item.icons} alt='' width={40} height={40} className='w-12 mb-3' />
                            <h3 className="text-base md:text-lg font-medium text-gray-900 tracking-tight">
                                {item.que}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                                {item.ans}
                            </p>
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
        icons: "/course/icons/trainer.png",
        ans: "Working professional who is carrying more then 10 years of industry experience."
    },
    {
        que: "Decks",
        icons: "/course/icons/decks.png",
        ans: "The candidate will get access to the presentation taken-up during the session."
    },
    {
        que: "Notes",
        icons: "/course/icons/notes.png",
        ans: "Consolidated notes in word document."
    },
    {
        que: "Assignments",
        icons: "/course/icons/assignment.png",
        ans: "Assignments for every module will be covered."
    },
    {
        que: "MCQs",
        icons: "/course/icons/mcqs.png",
        ans: "MCQs for every module covered in the session would be provided."
    },
    {
        que: "Video Recording",
        icons: "/course/icons/video.png",
        ans: "Daily Session would be recorded and shared to the candidate."
    },
    {
        que: "Dumps for Certification",
        icons: "/course/icons/dumps.png",
        ans: "We will provide dumps for the certification exam, which will help you to prepare for the exam."
    },
    {
        que: "Updated Content",
        icons: "/course/icons/content.png",
        ans: "We provide Generative AI Driven content By experts."
    },
    {
        que: "Projects",
        icons: "/course/icons/project.png",
        ans: "3 Live Projects will be provided for practice."
    }
];