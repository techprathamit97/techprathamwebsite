import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronRightIcon, Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RecognitionHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-black text-white'>

      <div className='w-full h-auto flex flex-col text-center font-semibold uppercase text-2xl'>
        <div className="text-red-600 font-bold">Industry Recognition</div>
        <div>Elevate your career with prestigious credentials</div>
      </div>

      <div className='w-10/12 h-auto flex flex-col items-center justify-center'>

        <div className='flex flex-row gap-4 mb-8 text-lg'>
          <Button variant='manual' className='text-lg font-normal'>| Certifications</Button>
          <Button variant='outline' className='text-lg font-normal'>| Affliations</Button>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md boxShadow'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md boxShadow'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
          <div className='flex flex-col border bg-[#d109101e] border-[#D1090F] p-4 rounded-md boxShadow'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>
                <Image src='/home/recognition/company.svg' alt='' className='w-12' width={40} height={40} />
              </div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <Separator className='h-[0.5px] my-4' />
            <div className='h-auto flex flex-col gap-3'>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
              <div className='text-sm'>Validate your skills with an internationally recognized ISO certification.</div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <Button variant='manual' className='flex items-center justify-center text-base font-normal rounded-full mt-2'>
            <span>Book Free Demo</span>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RecognitionHome