import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './contactHome.css';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ContactHome = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitting(true);
      const response = await fetch('/email/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitSuccess(true);
        console.log(data);
        reset();
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id='contact' className='w-full h-auto flex flex-col gap-6 items-center justify-center py-10 text-white bg-black'>
      <div className='md:w-10/12 w-11/12 h-auto flex lg:flex-row flex-col lg:items-start items-center justify-center gap-16 py-5'>

        <div className='lg:w-1/2 w-full h-full flex flex-col gap-3 items-start justify-center py-6'>
          <div className='md:text-4xl text-2xl md:font-bold font-semibold flex flex-col capitalize'>
            <span>Invest in your future with </span>
            <span className='bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text font-bold'>skills that matter.</span>
          </div>
          <div className='max-w-[600px] md:text-lg text-base text-gray-400 mb-5'>Investing in the right skills at the right place paves the way for long-term career success and growth. SevenMentor Institute equips you with industry-relevant expertise, ensuring you stay ahead in an evolving job market.</div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row items-center space-x-4 rounded-xl border border-red-500/10 bg-gradient-to-r from-red-500/10 to-transparent p-4 backdrop-blur-sm transition-colors hover:red-orange-500/20'>
              <Image src='/home/contact/career-choice.png' alt='' width={100} height={100} className='w-20' />
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>Career Support:</div>
                <div className='md:text-base text-sm font-light'>Beyond technical training, we provide comprehensive career assistance, including resume building, interview coaching, and job placement support.</div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4 rounded-xl border border-red-500/10 bg-gradient-to-r from-red-500/10 to-transparent p-4 backdrop-blur-sm transition-colors hover:red-orange-500/20'>
              <Image src='/home/contact/certificate.png' alt='' width={100} height={100} className='w-20' />
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>Recognized Certification:</div>
                <div className='md:text-base text-sm font-light'>Earn globally recognized certifications that validate your expertise and enhance your employability.</div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4 rounded-xl border border-red-500/10 bg-gradient-to-r from-red-500/10 to-transparent p-4 backdrop-blur-sm transition-colors hover:red-orange-500/20'>
              <Image src='/home/contact/company.png' alt='' width={100} height={100} className='w-20' />
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>Company Tie-Ups:</div>
                <div className='md:text-base text-sm font-light'>We collaborate with leading corporations, startups, and multinational companies to provide our students with exclusive job opportunities, internships, and industry exposure.</div>
              </div>
            </div>
          </div>
          <div className='md:flex hidden items-center justify-center space-x-4'>
            <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-red-500 to-transparent"></div>
            <p className="text-sm font-medium text-red-500 whitespace-nowrap">Take the first step to fast-track your future!</p>
            <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-transparent to-red-500"></div>
          </div>
        </div>

        <div className='lg:w-1/2 md:w-9/12 w-full h-auto flex flex-col gap-5 items-center justify-center'>
          <div className='md:text-4xl text-2xl bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text md:font-bold font-semibold'>Request Call Back</div>
          <form className='w-full flex flex-col md:gap-6 gap-4 md:p-10 p-6 rounded-md' onSubmit={handleSubmit(onSubmit)}>

            <div className='w-full'>
              <label htmlFor='fullName' className='block mb-1 text-sm font-medium text-gray-300'>Full Name</label>
              <input {...register('fullName')} type="text" id='fullName' name='fullName' className='w-full bg-zinc-900/90 border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Enter your full name' required />
            </div>

            <div className='w-full'>
              <label htmlFor='email' className='block mb-1 text-sm font-medium text-gray-300'>Email Address</label>
              <input {...register('email')} type="email" id='email' name='email' className='w-full bg-zinc-900/90 border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Enter your email' required />
            </div>

            <div className='w-full'>
              <label htmlFor='course' className='block mb-1 text-sm font-medium text-gray-300'>Course</label>
              <input {...register('course')} type="text" id='course' name='course' className='w-full bg-zinc-900/90 border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Enter your course' required />
            </div>

            <div className='w-full'>
              <label htmlFor='phone' className='block mb-1 text-sm font-medium text-gray-300'>Phone Number</label>
              <input {...register('phone')} type="text" id='phone' name='phone' className='w-full bg-zinc-900/90 border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Enter your phone number' required />
            </div>

            <div className='w-full'>
              <label htmlFor='message' className='block mb-1 text-sm font-medium text-gray-300'>Your Query/Message</label>
              <textarea {...register('message')} id='message' name='message' className='w-full h-40 bg-zinc-900/90 border border-orange-500/40 p-2 indent-2 rounded-md outline-none resize-none' placeholder='Write your message here...' required />
            </div>

            <Button variant='manual' type='submit' className='text-lg font-light' disabled={submitting}>{submitting ? 'Submitting...' : 'Book your free consultation'}</Button>
          </form>
          {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
        </div>

      </div>

    </div>
  )
}

export default ContactHome