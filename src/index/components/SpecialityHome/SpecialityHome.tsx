import { Badge } from '@/components/ui/badge'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import React from 'react'

const SpecialityHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-24 gap-12 bg-gradient-to-r from-[#371414] to-[#D1090F] text-white overflow-hidden'>

      <div className='w-10/12 h-auto flex flex-col text-center'>
        <div className="text-3xl font-bold">Why Choose Tech Pratham?</div>
      </div>

      <div className='w-1/2 h-auto flex flex-col gap-6'>
        <div className='flex flex-row gap-4'>
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-blue-500 flex items-center justify-center'>
              <LightningBoltIcon className='w-8 h-8' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="200" viewBox="0 0 24 500" fill="none">
              <path d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z" fill="url(#paint0_linear_2844_6338)"></path><defs>
                <linearGradient id="paint0_linear_2844_6338" x1="12.5" y1="2.01352" x2="5.43854" y2="452.895" gradientUnits="userSpaceOnUse"><stop stop-color="#6E7D87" stop-opacity="0"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
          </div>
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
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-violet-500 flex items-center justify-center'>
              <LightningBoltIcon className='w-8 h-8' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="200" viewBox="0 0 24 500" fill="none">
              <path d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z" fill="url(#paint0_linear_2844_6338)"></path><defs>
                <linearGradient id="paint0_linear_2844_6338" x1="12.5" y1="2.01352" x2="5.43854" y2="452.895" gradientUnits="userSpaceOnUse"><stop stop-color="#6E7D87" stop-opacity="0"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
          </div>
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
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-green-500 flex items-center justify-center'>
              <LightningBoltIcon className='w-8 h-8' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="200" viewBox="0 0 24 500" fill="none">
              <path d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z" fill="url(#paint0_linear_2844_6338)"></path><defs>
                <linearGradient id="paint0_linear_2844_6338" x1="12.5" y1="2.01352" x2="5.43854" y2="452.895" gradientUnits="userSpaceOnUse"><stop stop-color="#6E7D87" stop-opacity="0"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
          </div>
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
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-orange-500 flex items-center justify-center'>
              <LightningBoltIcon className='w-8 h-8' />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="200" viewBox="0 0 24 500" fill="none">
              <path d="M13.5 1.99756C13.5 1.16913 12.8284 0.497559 12 0.497559C11.1716 0.497559 10.5 1.16913 10.5 1.99756H13.5ZM10.9393 454.058C11.5251 454.644 12.4749 454.644 13.0607 454.058L22.6066 444.512C23.1924 443.927 23.1924 442.977 22.6066 442.391C22.0208 441.805 21.0711 441.805 20.4853 442.391L12 450.876L3.51472 442.391C2.92893 441.805 1.97919 441.805 1.3934 442.391C0.807611 442.977 0.807611 443.927 1.3934 444.512L10.9393 454.058ZM10.5 1.99756L10.5 452.998H13.5L13.5 1.99756H10.5Z" fill="url(#paint0_linear_2844_6338)"></path><defs>
                <linearGradient id="paint0_linear_2844_6338" x1="12.5" y1="2.01352" x2="5.43854" y2="452.895" gradientUnits="userSpaceOnUse"><stop stop-color="#6E7D87" stop-opacity="0"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
          </div>
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