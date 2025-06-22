import React from 'react';
import Image from 'next/image';

const SpecialityAbout = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-10 py-16'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-4'>
                <div className='text-center md:text-4xl sm:text-3xl text-xl font-bold'>Why to Choose Us?</div>
                <div className='text-base md:text-lg text-center'>
                    Our training programs are designed to meet the demands of the modern tech industry. We collaborate with industry experts to ensure our courses cover the latest tools, technologies, and methodologies. All instructors are seasoned professionals with years of experience in the IT field. They bring real-world insights and hands-on expertise to every session, providing practical knowledge alongside theoretical learning. We prioritize practical experience through live projects, case studies, and interactive labs, ensuring our students gain the confidence to solve real-world challenges. We maintain small class sizes and provide one-on-one mentorship to ensure every student receives individual attention and tailored guidance. Our partnerships with leading IT companies give our students access to internships, job placement assistance, and networking opportunities.
                </div>
            </div>

            <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4'>

                    {speciality.map((service: any, index: any) => (
                        <div key={index} className="w-full h-auto bg-white text-black flex flex-col gap-3 items-start p-5 cursor-pointer shadowBorder">
                            <Image src={`/about/${service.icon}`} alt='' width={30} height={30} className='w-16 h-auto' />
                            <div className="text-lg font-semibold">{service.title}</div>
                            <div className="text-base font-normal text-justify">{service.description}</div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default SpecialityAbout

const speciality = [
    {
        icon: "it-experts.png",
        title: "IT Experts as Trainers",
        description:
            "Our trainers are industry leaders, skilled at simplifying complex concepts and empowering you with practical knowledge to excel in your IT career. As professional experts, they bring real-world experience and insights to help you achieve success.",
    },
    {
        icon: "laptop.png",
        title: "Fully Hands-on Training",
        description:
            "We believe the best way to learn is by doing. That’s why Our all courses are built around immersive, hands on sessions that mirror real challenges. From day one, you will gain practical experience and develop the skills employers demand.",
    },
    {
        icon: "timing.png",
        title: "Flexible Timings",
        description:
            "We understand the importance of balancing learning with other commitments. we offer flexible scheduling options to ensure you can learn at a time that suits you bestw hether you are a student or a working professional.",
    },
    {
         icon: "it-experts.png",
        title: "Affordable Fees",
        description:
            "We believe that quality education should be accessible to everyone. Our training programs are offered at budget friendly prices, ensuring you receive top instruction without straining your finances.",
    },
    {
        icon: "laptop.png",
        title: "Lab Assistance",
        description:
            "Our dedicated lab support ensures you never face technical challenges alone. Bring your laptop, and our team will assist you in setting up the necessary software and tools, so you can focus entirely on learning and building your skills.",
    },
    {
        icon: "timing.png",
        title: "Interview Preparation",
        description:
            "Our courses include comprehensive interview preparation, featuring commonly asked questions, practical scenarios, and industry specific insights. Prepare yourself with the skills and confidence to stand out and secure your dream job.",
    },
];