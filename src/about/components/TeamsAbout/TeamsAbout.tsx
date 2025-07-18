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
                        <Image src={item.image} alt={item.name} width={400} height={400} className='w-full h-64 object-cover transition-all rounded-lg duration-300 grayscale hover:grayscale-0' />
                        <div className='flex flex-col items-center justify-center my-3'>
                            <div className='font-semibold text-lg transition-all hover:underline cursor-pointer'>{item.name}</div>
                            <div className='font-medium text-base text-[#CD4647] text-center'>{item.position}</div>
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
        image: "/about/teams/bhagirath.jpg",
        name: "Bhagirath Tyagi",
        position: "Director",
        link: "bhagirath-tyagi",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
    {
        image: "/about/teams/bharat.jpg",
        name: "Bharat Bhagwan Sahai",
        position: "Director & Head of Corporate Training",
        link: "bharat-sahai",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
    {
        image: "/about/teams/rani-kumari.jpg",
        name: "Rani Kumari",
        position: "Head of HR and Operations",
        link: "rani-kumari",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
    {
        image: "/about/teams/amrit.jpg",
        name: "Amrit Kumar",
        position: "Head of IT and Digital Marketing",
        link: "amrit-kumar",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
    {
        image: "/about/teams/durgesh.jpg",
        name: "Durgesh Lawaniya",
        position: "HEAD of CSR",
        link: "durgesh-lawaniya",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
    {
        image: "/about/teams/yuvraj.jpg",
        name: "Yuvraj Gaur",
        position: "Sales Manager",
        link: "yuvraj-gaur",
        about: [
            "ISO Nirvana 🌿"
        ]
    },
];