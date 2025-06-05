import { Button } from '@/components/ui/button'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RecognitionHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-10 bg-black text-white'>
      <div className='w-full h-auto flex flex-col text-center font-semibold uppercase text-2xl'>
        <div className="text-red-600">Industry Recognition</div>
        <div>Elevate your career with prestigious credentials</div>
      </div>
      <div className='w-10/12 h-auto flex flex-col items-center justify-center'>
        <div className='flex flex-row gap-4 mb-8'>
          <Button variant='outline'>Certifications</Button>
          <Button variant='outline'>Affliations</Button>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-8 border border-white p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>ISO</div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <div>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='flex flex-col gap-8 border border-white p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>ISO</div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <div>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='flex flex-col gap-8 border border-white p-4 rounded-md'>
            <div className='w-full flex flex-row items-center uppercase gap-2'>
              <div className='w-14 h-14 flex items-center justify-center border border-white shadow rounded'>ISO</div>
              <div className='text-2xl font-semibold'>ISO Certification</div>
            </div>
            <div>
              <Image src='/home/certificate.png' alt='certificate' width={1440} height={500} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecognitionHome