import { Badge } from '@/components/ui/badge'
import React from 'react'

const SpecialityHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-24 gap-12 bg-gradient-to-r from-[#371414] to-[#D1090F] text-white overflow-hidden'>

      <div className='w-10/12 h-auto flex flex-col text-center'>
        <div className="text-3xl font-bold">Why Choose Tech Pratham?</div>
      </div>

      <div className='w-1/2 h-auto flex flex-col gap-6'>
        <div className='flex flex-row gap-4'>
          <div className='w-auto'>here icon</div>
          <div className='w-11/12 bg-gradient-to-tr from-[#31509A] to-[#28417E] p-6 rounded-md'>
            <div className='font-semibold text-2xl'>Training Mode</div>
            <div className='text-gray-200'>Choose from two versatile training modes designed to match your learning preferences:</div>
            <div className='w-10/12 bg-[#0000004e] rounded-full p-5 flex flex-row items-center justify-between mt-4 px-8'>
              <div>100% Live Online Classes</div>
              <div>Hybrid Mode Classes</div>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-auto'>here icon</div>
          <div className='w-11/12 bg-gradient-to-tr from-[#31509A] to-[#28417E] p-6 rounded-md'>
            <div className='font-semibold text-2xl'>Hands-On Practical Training</div>
            <div className='text-gray-200'>Dive deep into real-world scenarios across industries like BFSI, Retail, Healthcare, and more. Out raining ensures practical relevence tailored to sectors such as:</div>
            <div className='flex flex-row flex-wrap gap-2 mt-4'>
              <Badge className='px-4 py-1'>Manufacturing</Badge>
              <Badge className='px-4 py-1'>Technology</Badge>
              <Badge className='px-4 py-1'>Consulting</Badge>
              <Badge className='px-4 py-1'>Healthcare</Badge>
              <Badge className='px-4 py-1'>BFSI</Badge>
              <Badge className='px-4 py-1'>Retail</Badge>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-auto'>here icon</div>
          <div className='w-11/12 bg-gradient-to-tr from-[#31509A] to-[#28417E] p-6 rounded-md'>
            <div className='font-semibold text-2xl'>Real Projects, Real Outcomes</div>
            <div className='text-gray-200'>Through our Trending courses get hands-on experience with real-world challenges. Work on 100+ industry-specific projects under the guidance of professionals:</div>
            <div className='w-auto bg-[#0000004e] rounded-full p-5 flex flex-row items-center justify-between mt-4 px-8'>
              <div>Earn Certification for every project you complete:</div>
              <div>Hybrid</div>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-auto'>here icon</div>
          <div className='w-11/12 bg-gradient-to-tr from-[#31509A] to-[#28417E] p-6 rounded-md'>
            <div className='font-semibold text-2xl'>Achieve Your Career Aspirations</div>
            <div className='text-gray-200'>Leverage our placement support to secure your dream job. Our career services include:</div>
            <div className='flex flex-col gap-4 mt-4'>
              <Badge className='px-4 py-1'>Placement Assistance: Connect with top recuiters.</Badge>
              <Badge className='px-4 py-1'>Mock interview Sessions: Sharpen your interview skills.</Badge>
              <Badge className='px-4 py-1'>Resume Optimizations: Craft a professional resume that stands out.</Badge>
              <Badge className='px-4 py-1'>Exclusive Interview Opportunities: Access high-value job openings in leading companies.</Badge>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SpecialityHome