import React from 'react';
import Image from 'next/image';

const TeamsAbout = () => {
    return (
        <div className='flex flex-col gap-12 w-full h-auto items-center justify-center py-16'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col text-center'>
                <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Our Team</div>
                <div className="md:text-lg text-base text-gray-600 md:max-w-2xl w-full mx-auto">Learn from the cast knowledge of top faculty in the field of data science</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-10/12 w-11/12 items-center justify-center">
                {teams.map((item: any, index: any) => (
                    <div key={index} className='flex flex-col'>
                        <Image src={item.image} alt={item.name} width={400} height={400} className='w-full h-64 object-cover transition-all rounded-lg grayscale hover:grayscale-0' />
                        <div className='flex flex-col items-center justify-center my-3'>
                            <div className='font-semibold text-lg transition-all hover:underline cursor-pointer'>{item.name}</div>
                            <div className='font-medium text-base text-[#CD4647]'>{item.position}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamsAbout

const teams = [
    {
        image: "/home/educator/person.jpg",
        name: "Aditya Raj",
        position: "Founder & Vision Architect",
        link: "aditya-raj",
        about: [
            "Aditya leads TechPratham with a vision to make quality tech education accessible to everyone."
        ]
    },
    {
        image: "/home/educator/person.jpg",
        name: "Aadhya Anand",
        position: "Platform Engineer",
        link: "bipanshu-kumar",
        about: [
            "Bipanshu architects the platform's core, ensuring a seamless learning experience for all users."
        ]
    },
    {
        image: "/home/educator/person.jpg",
        name: "Manoneet Kumar",
        position: "Curriculum Strategist",
        link: "manoneet-kumar",
        about: [
            "Manoneet drives the course roadmap by aligning user needs with emerging tech trends."
        ]
    },
    {
        image: "/home/educator/person.jpg",
        name: "Sneha Sharma",
        position: "Data Science Trainer",
        link: "sneha-sharma",
        about: [
            "Sneha simplifies complex data concepts into real-world applications for aspiring analysts."
        ]
    },
];