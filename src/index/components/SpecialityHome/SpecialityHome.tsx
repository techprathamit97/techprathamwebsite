import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { LightningBoltIcon } from '@radix-ui/react-icons';

import './speciality.css';

const SpecialityHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-24 gap-12 bg-black text-white overflow-hidden'>

      <div className='md:w-10/12 w-11/12 h-auto flex flex-col text-center'>
        <div className="md:text-5xl text-2xl md:font-semibold font-semibold">Why Choose <span className='bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text'>Tech Pratham?</span></div>
      </div>

      <div className='lg:w-6/12 md:w-9/12 w-11/12 h-auto flex flex-col gap-6'>
        <div className='flex flex-row gap-4'>
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-blue-500 flex items-center justify-center'>
              <Image src='/home/speciality/training.png' alt='' className='w-10 h-10 rounded-sm' width={40} height={40} />
            </div>
            <Image src='/home/speciality/arrow.svg' alt='' width={10} height={10} className='w-auto h-auto' />
          </div>
          <div className='w-11/12 bg-black text-white md:p-6 p-4 rounded-xl border-4 border-red-600 object-cover boxShadow'>
            <div className='font-semibold md:text-2xl text-xl'>Training Mode</div>
            <div className='text-gray-200 md:text-base text-sm md:font-medium font-light'>Choose from two versatile training modes designed to match your learning preferences:</div>
            <div className='md:w-10/12 w-full bg-[#121212] md:rounded-lg rounded-none p-3 flex md:flex-row flex-col md:gap-4 gap-3 items-center justify-between mt-4'>
              <div className='flex flex-row gap-3 font-light'>
                <Image src='/home/speciality/camera.png' alt='' className='w-14 h-14 rounded-sm' width={40} height={40} />
                <span>100% Live Online Classes</span>
              </div>
              <div className='flex flex-row gap-3 font-light'>
                <Image src='/home/speciality/hybrid.png' alt='' className='w-14 h-14 rounded-sm' width={40} height={40} />
                <span>Hybrid Mode Classes</span>
              </div>
            </div>
            <div className='text-gray-200 text-sm font-normal mt-4'><span className='text-orange-600'>*Important Note:</span> Hybrid learning combines the best of both worlds—virtual flexibility and face-to-face collaboration.</div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-violet-500 flex items-center justify-center'>
              <Image src='/home/speciality/practical.png' alt='' className='w-10 h-10 rounded-sm' width={40} height={40} />
            </div>
            <Image src='/home/speciality/arrow.svg' alt='' width={10} height={10} className='w-auto h-auto' />
          </div>
          <div className='w-11/12 bg-black text-white md:p-6 p-4 rounded-xl border-4 border-red-600 object-cover boxShadow'>
            <div className='font-semibold md:text-2xl text-xl'>Hands-On Practical Training</div>
            <div className='text-gray-200 md:text-base text-sm md:font-medium font-light'>Dive deep into real-world scenarios across industries like BFSI, Retail, Healthcare, and more. Out raining ensures practical relevence tailored to sectors such as:</div>
            <div className='flex flex-row flex-wrap gap-2 mt-4'>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/manufacture.png' alt='' width={22} height={22} />
                <div>Manufacturing</div>
              </Badge>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/technology.png' alt='' width={22} height={22} />
                <div>Technology</div>
              </Badge>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/consulting.png' alt='' width={22} height={22} />
                <div>Consulting</div>
              </Badge>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/healthcare.png' alt='' width={22} height={22} />
                <div>Healthcare</div>
              </Badge>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/bfsi.png' alt='' width={22} height={22} />
                <div>BFSI</div>
              </Badge>
              <Badge className='px-3 md:py-1 py-0 text-base font-light cursor-pointer bg-[#121212] flex flex-row gap-2 items-center justify-center'>
                <Image src='/home/speciality/icons/retail.png' alt='' width={22} height={22} />
                <div>Retail</div>
              </Badge>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-green-500 flex items-center justify-center'>
              <Image src='/home/speciality/project.png' alt='' className='w-10 h-10 rounded-sm' width={40} height={40} />
            </div>
            <Image src='/home/speciality/arrow.svg' alt='' width={10} height={10} className='w-auto h-auto' />
          </div>
          <div className='w-11/12 bg-black text-white md:p-6 p-4 rounded-xl border-4 border-red-600 object-cover boxShadow'>
            <div className='font-semibold md:text-2xl text-xl'>Real Projects, Real Outcomes</div>
            <div className='text-gray-200 md:text-base text-sm md:font-medium font-light'>Through our Trending courses get hands-on experience with real-world challenges. Work on 100+ industry-specific projects under the guidance of professionals:</div>
            <div className='md:w-9/12 w-full bg-[#121212] md:rounded-lg rounded-none p-3 flex flex-row items-center justify-between gap-3 mt-4'>
              <Image src='/home/speciality/isi_mark.svg' alt='' className='w-16 h-full rounded-sm' width={40} height={40} />
              <div className='w-auto'>Earn Certification for every project you complete:</div>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-4'>
          <div className='w-16 h-auto flex flex-col items-center justify-start'>
            <div className='w-16 h-16 rounded bg-orange-500 flex items-center justify-center'>
              <Image src='/home/speciality/career.png' alt='' className='w-10 h-10 rounded-sm' width={40} height={40} />
            </div>
            <Image src='/home/speciality/arrow.svg' alt='' width={10} height={10} className='w-auto h-auto' />
          </div>
          <div className='w-11/12 bg-black text-white md:p-6 p-4 rounded-xl border-4 border-red-600 object-cover boxShadow'>
            <div className='font-semibold md:text-2xl text-xl'>Achieve Your Career Aspirations</div>
            <div className='text-gray-200 md:text-base text-sm md:font-medium font-light'>Leverage our placement support to secure your dream job. Our career services include:</div>
            <div className='flex flex-col gap-2 mt-4'>
              <div className='font-light md:text-base text-sm'>- Placement Assistance: Connect with top recuiters.</div>
              <div className='font-light md:text-base text-sm'>- Mock interview Sessions: Sharpen your interview skills.</div>
              <div className='font-light md:text-base text-sm'>- Resume Optimizations: Craft a professional resume that stands out.</div>
              <div className='font-light md:text-base text-sm'>- Exclusive Interview Opportunities: Access high-value job openings in leading companies.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SpecialityHome