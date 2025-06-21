import { Button } from '@/components/ui/button';
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
        <div className='w-full h-auto flex flex-col items-center justify-center py-16'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='col-span-1 text-justify flex flex-col gap-8'>
                    <div className='flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md'>
                        <div>Registered Office</div>
                        <div>G-31, 1st Floor Sector-3, Noida 201301</div>
                        <div>info@techpratham.com</div>
                    </div>
                    <div className='flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md'>
                        <div>Noida Office</div>
                        <div>C-2, Sector-1, Noida, Uttar Pradesh - 201301</div>
                        <div>+91-8882178896, info@techpratham.com</div>
                    </div>
                    <div className='flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md'>
                        <div>Hyderabad Office</div>
                        <div>LVS Arcade, 71, Hitech, Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad</div>
                        <div>info@techpratham.com</div>
                    </div>
                </div>
                <div className='col-span 1 w-full h-auto flex flex-col gap-5 items-center justify-center'>
                    <div className='md:text-4xl text-2xl bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text md:font-bold font-semibold'>Request Call Back</div>
                    <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('fullName')} type="text" id='fullName' name='fullName' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Full Name' required />

                        <input {...register('email')} type="email" id='email' name='email' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Email Address' required />

                        <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Phone Number' required />

                        <input {...register('country')} type="text" id='country' name='country' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Country' required />

                        <input {...register('state')} type="text" id='state' name='state' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='State' required />

                        <input {...register('city')} type="text" id='city' name='city' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='City' required />

                        <input {...register('course')} type="text" id='course' name='course' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Course' required />

                        <input {...register('branch')} type="text" id='branch' name='branch' className='w-full border border-orange-500/40 p-2 indent-2 rounded-md outline-none' placeholder='Branch' required />

                        <Button type='submit' variant={'manual'} className='h-10 text-base flex items-center justify-center' disabled={submitting}>{submitting ? 'Submitting...' : 'Send'}</Button>
                    </form>
                    {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
                </div>
            </div>
        </div>
    )
}

export default FormContact