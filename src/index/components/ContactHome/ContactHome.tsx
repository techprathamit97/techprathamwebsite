import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactHome = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitting(true);
      const response = await fetch('/email', {
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
    <div className='w-full h-auto flex flex-col gap-6 items-center justify-center py-10'>

      <div className='w-10/12 h-auto flex md:flex-row flex-col items-start justify-center gap-8 py-5'>

        <div className='md:w-1/2 w-full h-full flex flex-col gap-3 items-start justify-center py-6'>
          <div className='text-3xl font-bold'>Invest in your future with skills that matter.</div>
          <div>Investing in the right skills at the right place paves the way for long-term career success and growth. SevenMentor Institute equips you with industry-relevant expertise, ensuring you stay ahead in an evolving job market.</div>
          <div className='flex flex-col gap-4'>
            <div className='p-4 border border-red-500 rounded'>
              <div>Career Support</div>
              <div>Beyond technical training, we provide comprehensive career assistance, including resume building, interview coaching, and job placement support.</div>
            </div>
            <div className='p-4 border border-red-500 rounded'>
              <div>Recognized Certification:</div>
              <div>Earn globally recognized certifications that validate your expertise and enhance your employability.</div>
            </div>
            <div className='p-4 border border-red-500 rounded'>
              <div>Company Tie-Ups:</div>
              <div>We collaborate with leading corporations, startups, and multinational companies to provide our students with exclusive job opportunities, internships, and industry exposure.</div>
            </div>
          </div>
          <div>Take the first step to fast-track your future!</div>
        </div>
        <div className='md:w-1/2 w-full h-auto flex flex-col gap-5 items-center justify-center'>
          <div className='font-bold text-red-500 text-2xl'>Request Call Back</div>
          <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="fName" className='text-[#525252] text-sm'>Full Name</label>
              <input {...register('fName')} type="text" id='fName' name='fName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="email" className='text-[#525252] text-sm'>Email</label>
              <input {...register('email')} type="email" id='email' name='email' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="phone" className='text-[#525252] text-sm'>Phone Number</label>
              <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="country" className='text-[#525252] text-sm'>Country</label>
              <input {...register('country')} type="text" id='country' name='country' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="state" className='text-[#525252] text-sm'>State</label>
              <input {...register('state')} type="text" id='state' name='state' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="city" className='text-[#525252] text-sm'>City</label>
              <input {...register('city')} type="text" id='city' name='city' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="course" className='text-[#525252] text-sm'>Course</label>
              <input {...register('course')} type="text" id='course' name='course' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-1'>
              <label htmlFor="branch" className='text-[#525252] text-sm'>Branch</label>
              <input {...register('branch')} type="text" id='branch' name='branch' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
            </div>
            <div className='flex flex-row gap-4'>
              <button type='submit' className='flex items-center justify-center px-4 py-2 bg-[#1967d2] rounded-md text-white' disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
            </div>
          </form>
          {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
        </div>

      </div>

    </div>
  )
}

export default ContactHome