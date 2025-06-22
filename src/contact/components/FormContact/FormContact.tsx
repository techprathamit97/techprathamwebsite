import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
        <div className='w-full h-auto flex flex-col items-center justify-center pb-16 z-10'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col gap-6 items-center justify-center'>
                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>Request Call Back</div>
                <form className='w-1/2 flex flex-col gap-4 p-6 border border-gray-200 rounded bg-white' onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-violet-300 w-full h-44 rounded'></div>
                    <div className='flex flex-row gap-4'>
                        <Input {...register('fullName')} type="text" id='fullName' name='fullName' className='w-full p-2 indent-2 outline-none' placeholder='Full Name' required />
                        <Input {...register('email')} type="email" id='email' name='email' className='w-full p-2 indent-2 outline-none' placeholder='Email Address' required />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <Input {...register('phone')} type="text" id='phone' name='phone' className='w-full p-2 indent-2 outline-none' placeholder='Phone Number' required />
                        <Input {...register('country')} type="text" id='country' name='country' className='w-full p-2 indent-2 outline-none' placeholder='Country' required />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <Input {...register('state')} type="text" id='state' name='state' className='w-full p-2 indent-2 outline-none' placeholder='State' required />
                        <Input {...register('city')} type="text" id='city' name='city' className='w-full p-2 indent-2 outline-none' placeholder='City' required />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <Input {...register('course')} type="text" id='course' name='course' className='w-full p-2 indent-2 outline-none' placeholder='Course' required />
                        <Input {...register('branch')} type="text" id='branch' name='branch' className='w-full p-2 indent-2 outline-none' placeholder='Branch' required />
                    </div>

                    <Button type='submit' variant={'manual'} className='h-10 text-base flex items-center justify-center' disabled={submitting}>{submitting ? 'Submitting...' : 'Send'}</Button>
                </form>
                {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
            </div>
        </div>
    )
}

export default FormContact