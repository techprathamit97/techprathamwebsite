import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const AddressContact = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,_#fff_0%,_#fff_50%,_#f7f7f7_50%,_#f7f7f7_100%)]'>
            <div className='md:w-10/12 w-11/12 grid grid-cols-3 gap-5 py-16 z-10 text-left'>
                <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                    <Image src='/support/office1.png' alt='Contact Us' width={400} height={400} className='w-full h-56 object-cover rounded' />
                    <div className='py-4 font-semibold md:text-xl text-base'>Registered Office</div>
                    <Separator />
                    <div className='flex flex-col gap-3 pt-4'>
                        <div className='font-semibold'>G-31, 1st Floor Sector-3, Noida 201301</div>
                        <div>info@techpratham.com</div>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                    <Image src='/support/office2.png' alt='Contact Us' width={400} height={400} className='w-full h-56 object-cover rounded' />
                    <div className='py-4 font-semibold md:text-xl text-base'>Noida Office</div>
                    <Separator />
                    <div className='flex flex-col gap-3 pt-4'>
                        <div className='font-semibold'>C-2, Sector-1, Noida, Uttar Pradesh - 201301</div>
                        <div>+91-8882178896, info@techpratham.com</div>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                    <Image src='/support/office3.png' alt='Contact Us' width={400} height={400} className='w-full h-56 object-cover rounded' />
                    <div className='py-4 font-semibold md:text-xl text-base'>Hyderabad Office</div>
                    <Separator />
                    <div className='flex flex-col gap-3 pt-4'>
                        <div className='font-semibold'>VS Arcade, 71, Hitech, Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad</div>
                        <div>info@techpratham.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressContact