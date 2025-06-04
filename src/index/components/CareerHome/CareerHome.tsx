import Image from 'next/image'
import React from 'react'

interface StatsCard {
  id: number;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  bgColor: string;
}

const CareerHome = () => {
  const statsData: StatsCard[] = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2H9V5z" />
        </svg>
      ),
      number: '60+',
      title: 'Case Studies & Assignments',
      description: 'Work on 60+ Case Studies and Assignments with 24/7 Assignment support.',
      bgColor: 'bg-blue-500'
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      number: '45+',
      title: 'Industry Relevant Projects',
      description: 'Get Industrial experience by working on our Industry Relevant Live Projects.',
      bgColor: 'bg-red-500'
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: '250+',
      title: 'Tied-up with Companies',
      description: 'Experience the Tied-up with 250+ companies to Provide Jobs to Many Students.',
      bgColor: 'bg-yellow-500'
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: 'Job Readiness',
      title: 'Program',
      description: 'A dedicated placement cell for the participants who completed the course, connecting them with promising career opportunities.',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <div className='w-full max-w-7xl mx-auto h-auto flex flex-col items-center justify-center py-10 bg-white text-black px-4'>
      {/* Partners Section */}
      <div className='w-full mb-12'>
        <div className="text-center text-black mb-6 text-lg">In Association With</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 w-full justify-items-center">
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
          <Image src='/next.svg' alt='' width={100} height={50} />
        </div>
      </div>

      {/* Courses Section */}
      <div className='w-full h-auto flex flex-col text-center py-10'>
        <div className="text-center text-black mb-6 text-lg capitalize">Climb your career ladder with world-class professional</div>
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className={`${stat.bgColor} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex flex-col space-y-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    {stat.icon}
                  </div>

                  {/* Number/Title */}
                  <div>
                    <div className="text-3xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold">
                      {stat.title}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-sm leading-relaxed opacity-90">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CareerHome