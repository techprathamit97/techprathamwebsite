import { Separator } from '@/components/ui/separator'
import React from 'react'

const AddressContact = () => {
    return (
        <div className='md:w-10/12 w-11/12 text-justify grid grid-cols-3 gap-5 py-16 z-10'>
            <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                <div className='bg-violet-300 w-full h-40 rounded'></div>
                <div className='py-6'>Registered Office</div>
                <Separator />
                <div className='flex flex-col gap-3 pt-4'>
                <div>G-31, 1st Floor Sector-3, Noida 201301</div>
                <div>info@techpratham.com</div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                <div className='bg-violet-300 w-full h-40 rounded'></div>
                <div className='py-6'>Noida Office</div>
                <Separator />
                <div className='flex flex-col gap-3 pt-4'>
                <div>C-2, Sector-1, Noida, Uttar Pradesh - 201301</div>
                <div>+91-8882178896, info@techpratham.com</div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col border-2 border-[#cbcbcb] p-4 rounded-md bg-white'>
                <div className='bg-violet-300 w-full h-40 rounded'></div>
                <div className='py-6'>Hyderabad Office</div>
                <Separator />
                <div className='flex flex-col gap-3 pt-4'>

                <div>VS Arcade, 71, Hitech, Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad</div>
                <div>info@techpratham.com</div>
                </div>
            </div>
        </div>
    )
}

export default AddressContact