import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormContact = () => {
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
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 z-10 bg-[#f7f7f7]'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
                    <form className='w-full flex flex-col gap-4 p-6 border-2 border-gray-200 rounded bg-white h-full' onSubmit={handleSubmit(onSubmit)}>
                        <Image src='/support/call.png' alt='Contact Us' width={400} height={400} className='w-full h-56 object-cover rounded' />

                        <div className='flex flex-row gap-4'>
                            <div className='w-full'>
                                <label htmlFor='fullName' className='block mb-1 text-sm font-medium text-gray-700'>Full Name</label>
                                <Input {...register('fullName')} type='text' id='fullName' name='fullName' className='w-full p-2 indent-2 outline-none' placeholder='Enter your full name' required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='email' className='block mb-1 text-sm font-medium text-gray-700'>Email Address</label>
                                <Input {...register('email')} type='email' id='email' name='email' className='w-full p-2 indent-2 outline-none' placeholder='Enter your email' required />
                            </div>
                        </div>

                        <div className='flex flex-row gap-4'>
                            <div className='w-full'>
                                <label htmlFor='phone' className='block mb-1 text-sm font-medium text-gray-700'>Phone Number</label>
                                <Input {...register('phone')} type='text' id='phone' name='phone' className='w-full p-2 indent-2 outline-none' placeholder='Enter your phone number' required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='country' className='block mb-1 text-sm font-medium text-gray-700'>Country</label>
                                <Input {...register('country')} type='text' id='country' name='country' className='w-full p-2 indent-2 outline-none' placeholder='Enter your country' required />
                            </div>
                        </div>

                        <div className='flex flex-row gap-4'>
                            <div className='w-full'>
                                <label htmlFor='state' className='block mb-1 text-sm font-medium text-gray-700'>State</label>
                                <Input {...register('state')} type='text' id='state' name='state' className='w-full p-2 indent-2 outline-none' placeholder='Enter your state' required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='city' className='block mb-1 text-sm font-medium text-gray-700'>City</label>
                                <Input {...register('city')} type='text' id='city' name='city' className='w-full p-2 indent-2 outline-none' placeholder='Enter your city' required />
                            </div>
                        </div>

                        <div className='flex flex-row gap-4'>
                            <div className='w-full'>
                                <label htmlFor='course' className='block mb-1 text-sm font-medium text-gray-700'>Course</label>
                                <Input {...register('course')} type='text' id='course' name='course' className='w-full p-2 indent-2 outline-none' placeholder='Enter your course' required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='branch' className='block mb-1 text-sm font-medium text-gray-700'>Branch</label>
                                <Input {...register('branch')} type='text' id='branch' name='branch' className='w-full p-2 indent-2 outline-none' placeholder='Enter your branch' required />
                            </div>
                        </div>

                        <Button type='submit' variant={'manual'} className='h-10 text-base flex items-center justify-center' disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Send'}
                        </Button>
                        {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
                    </form>
                </div>

                <div className='w-full h-full flex items-center justify-center rounded shadow object-cover overflow-hidden'>
                    <Image src='/support/reach-us.png' alt='Contact Us' width={400} height={400} className='w-full h-full object-cover border-2 border-white rounded' />
                </div>
            </div>
        </div>

    )
}

export default FormContact