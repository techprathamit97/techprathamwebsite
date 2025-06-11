import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronRightIcon, Dot } from 'lucide-react';

const RecognitionHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-[#f7f7f7] text-black'>

      <div className='w-full h-auto flex flex-col text-center gap-2'>
        <div className="md:text-3xl text-2xl md:font-semibold font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#CD4647] to-[#7F3B40] capitalize">Industry Recognition</div>
        <div className="md:text-lg text-base text-gray-600 max-w-2xl mx-auto">Elevate your career with prestigious credentials</div>
      </div>

      <div className='w-10/12 h-auto flex flex-col items-center justify-center'>

        <div className='flex flex-row gap-4 mb-8 text-lg'>
          <Button variant='manual' className='text-lg font-normal'>| Certifications</Button>
          <Button variant='outline' className='text-lg font-normal'>| Affliations</Button>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='md:text-2xl text-xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <Button className='flex items-center justify-center text-base font-normal rounded-full transition-all duration-300 bg-gradient-to-r from-[#CD4647] to-[#7F3B40] hover:bg-gradient-to-l text-white'>
            <span>Book Free Demo</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RecognitionHome