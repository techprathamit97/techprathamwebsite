import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronRightIcon } from 'lucide-react';

const RecognitionHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-[#f7f7f7] text-black'>

      <div className='w-full h-auto flex flex-col text-center gap-2'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-tl from-[#600A0E] to-[#C6151D] capitalize">Government Recognition</div>
      </div>

      <div className='w-10/12 h-auto flex flex-col items-center justify-center'>

        <div className='flex flex-row gap-4 mb-8 text-lg'>
          <Button variant='manual' className='text-lg font-normal'>
            | Certifications
          </Button>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Certification 1 */}
          <div className='flex flex-col border bg-[#fff] border-[#ebebeb] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='ISO Logo' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>ISO 9001:2015</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/recognition/iso-certification.svg' alt='ISO Certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Certified in Quality Management System, ensuring consistent service and performance.</div>
            </div>
          </div>

          {/* Certification 2 */}
          <div className='flex flex-col border bg-[#fff] border-[#ebebeb] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='NASSCOM Logo' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>Income Tax</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/recognition/mca-certification.svg' alt='MCA Certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Member of NASSCOM, promoting innovation and digital transformation in India.</div>
            </div>
          </div>

          {/* Certification 3 */}
          <div className='flex flex-col border bg-[#fff] border-[#ebebeb] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='MSME Logo' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>MSME India</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/recognition/msme-certification.svg' alt='MCA Certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Officially registered under the Ministry of MSME for small-scale industry benefits.</div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <Button variant={'manual'} className='rounded-full pl-6 capitalize'>
            <span>Book your free consultation</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RecognitionHome