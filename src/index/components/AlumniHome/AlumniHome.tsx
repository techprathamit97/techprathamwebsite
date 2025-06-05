import React from 'react';
import './alumni.css'
import { certificate } from '@/components/assets/certificate';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const AlumniHome = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center pb-20 gap-10 bg-black text-white'>
      <div className='w-10/12 h-auto flex flex-col items-center justify-center gap-5'>

        <div className='w-full flex items-center justify-center'>
          <Card className="text-lg px-5 py-1 font-semibold mb-8 text-center rounded">Our Alumni Works At</Card>
        </div>

        <section className='text-white overflow-x-hidden h-auto w-full'>
          <div className='flex nowrap whitespace-nowrap'>
            <section className="left-scroll">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
            <section className="left-scroll mx-4">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
          </div>
        </section>

        <section className='text-white overflow-x-hidden h-auto w-10/12'>
          <div className='flex nowrap whitespace-nowrap'>
            <section className="right-scroll">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
            <section className="right-scroll mx-4">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
          </div>
        </section>

        <section className='text-white overflow-x-hidden h-auto w-full'>
          <div className='flex nowrap whitespace-nowrap'>
            <section className="left-scroll">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
            <section className="left-scroll mx-4">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
          </div>
        </section>

        <section className='text-white overflow-x-hidden h-auto w-10/12'>
          <div className='flex nowrap whitespace-nowrap'>
            <section className="right-scroll">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
            <section className="right-scroll mx-4">
              {certificate.map((item, index) => (
                <Card key={index}>
                  <Image src={item.image} alt={item.altText} width={1440} height={500} className='w-auto h-20 object-cover' />
                </Card>
              ))}
            </section>
          </div>
        </section>

      </div>
    </div>
  )
}

export default AlumniHome