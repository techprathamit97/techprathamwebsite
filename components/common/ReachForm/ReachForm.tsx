import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Phone } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReachForm = () => {
    const [isOpen, setIsOpen] = useState(true);
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
        <div className="w-80 fixed right-0 bottom-0 z-[100]">
            <div className='bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white w-full p-3 rounded-t-md flex flex-row items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div>Reach Out to Us</div>
                <ChevronDownIcon className={`w-6 h-6 transition-transform duration-700 ease-in-out ${isOpen ? '' : 'rotate-180'}`} />
            </div>
            
            <div className={`bg-white text-black flex flex-col items-center justify-center gap-4 capitalize transition-all duration-700 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[600px] opacity-100 py-2 px-4 translate-y-0' : 'max-h-0 opacity-0 py-0 px-4 -translate-y-4'
            }`}>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className='w-10 h-10 flex items-center justify-center border border-[#dddedd] rounded-full'>
                        <Phone className='w-6 h-6' />
                    </div>
                    <div className='flex flex-col gap-0 items-start justify-center'>
                        <span className='text-xl font-semibold'>+91-8882178896</span>
                        <span className='text-sm'>talk to Our Expert</span>
                    </div>
                </div>
                <form className='w-full flex flex-col gap-4 rounded-lg bg-white h-full' onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('fullName')} type='text' id='fullName' name='fullName' className='w-full p-2 indent-2 outline-none' placeholder='Enter your full name' required />
                    <Input {...register('phone')} type='text' id='phone' name='phone' className='w-full p-2 indent-2 outline-none' placeholder='Enter your phone number' required />
                    <Input {...register('course')} type='text' id='course' name='course' className='w-full p-2 indent-2 outline-none' placeholder='Enter your course' required />
                    <Textarea {...register('message')} id='message' name='message' className='w-full h-28 p-2 indent-2 outline-none' placeholder='Write your message here...' required />
                    <Button type='submit' variant={'manual'} className='h-10 text-base flex items-center justify-center' disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Send'}
                    </Button>
                    {submitSuccess && <p className="text-green-600">Form submitted successfully! We'll reach you soon!</p>}
                </form>
            </div>
        </div>
    )
}

export default ReachForm