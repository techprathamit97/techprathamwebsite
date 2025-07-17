import React from 'react';
import { Separator } from '@/components/ui/separator';
import FormContact from '../FormContact/FormContact';
import Image from 'next/image';

const AddressContact = () => {
    return (
        <div className='w-10/12 h-auto grid md:grid-cols-2 grid-cols-1 gap-10 place-content-center'>
            <div className='w-full h-auto flex flex-col gap-5 py-16 z-10 text-left'>
                <div
                    className='p-[3px] shadow flex items-center justify-center w-full h-auto rounded-xl bg-gradient-to-tl'
                    style={{
                        backgroundImage: 'linear-gradient(to top left, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff3399)'
                    }}
                >
                    <div className='row-span-1 w-full h-full flex flex-col p-4 rounded-lg bg-[#eee] relative'>
                        <div className='pb-4 font-semibold md:text-xl text-base'>Registered Office</div>
                        <Separator className='bg-black h-[0.5px]' />
                        <div className='flex flex-col gap-3 pt-4'>
                            <div className='font-semibold'>G-31, 1st Floor Sector-3, Noida 201301</div>
                            <div>info@techpratham.com</div>
                        </div>
                        <div className='w-full flex flex-row justify-end gap-4 mt-4'>
                            <div className='w-auto flex flex-row gap-2 items-center justify-center'>
                                <Image src='/support/whatsapp.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <div>Whatsapp</div>
                                    <div>Click to Chat</div>
                                </div>
                            </div>
                            <div className='w-auto flex flex-row gap-2'>
                                <Image src='/support/google-maps.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <span>Check Live</span>
                                    <span>Location Here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='p-[3px] shadow flex items-center justify-center w-full h-auto rounded-xl bg-gradient-to-tl'
                    style={{
                        backgroundImage: 'linear-gradient(to top left, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff3399)'
                    }}
                >
                    <div className='row-span-1 w-full h-full flex flex-col p-4 rounded-lg bg-[#eee] relative'>
                        <div className='pb-4 font-semibold md:text-xl text-base'>Noida Office</div>
                        <Separator className='bg-black h-[0.5px]' />
                        <div className='flex flex-col gap-3 pt-4'>
                            <div className='font-semibold'>C-2, Sector-1, Noida, Uttar Pradesh - 201301</div>
                            <div>+91-8882178896, info@techpratham.com</div>
                        </div>
                        <div className='w-full flex flex-row justify-end gap-4 mt-4'>
                            <div className='w-auto flex flex-row gap-2 items-center justify-center'>
                                <Image src='/support/whatsapp.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <div>Whatsapp</div>
                                    <div>Click to Chat</div>
                                </div>
                            </div>
                            <div className='w-auto flex flex-row gap-2'>
                                <Image src='/support/google-maps.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <span>Check Live</span>
                                    <span>Location Here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='p-[3px] shadow flex items-center justify-center w-full h-auto rounded-xl bg-gradient-to-tl'
                    style={{
                        backgroundImage: 'linear-gradient(to top left, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff3399)'
                    }}
                >
                    <div className='row-span-1 w-full h-full flex flex-col p-4 rounded-lg bg-[#eee] relative'>
                        <div className='pb-4 font-semibold md:text-xl text-base'>Hyderabad Office</div>
                        <Separator className='bg-black h-[0.5px]' />
                        <div className='flex flex-col gap-3 pt-4'>
                            <div className='font-semibold'>VS Arcade, 71, Hitech, Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad</div>
                            <div>info@techpratham.com</div>
                        </div>
                        <div className='w-full flex flex-row justify-end gap-4 mt-4'>
                            <div className='w-auto flex flex-row gap-2 items-center justify-center'>
                                <Image src='/support/whatsapp.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <div>Whatsapp</div>
                                    <div>Click to Chat</div>
                                </div>
                            </div>
                            <div className='w-auto flex flex-row gap-2'>
                                <Image src='/support/google-maps.png' alt='' width={40} height={40} />
                                <div className='w-auto flex flex-col text-sm'>
                                    <span>Check Live</span>
                                    <span>Location Here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <FormContact />
            </div>
        </div>
    )
}

export default AddressContact