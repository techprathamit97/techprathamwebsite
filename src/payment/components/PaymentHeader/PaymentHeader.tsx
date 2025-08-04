import Image from 'next/image';
import React from 'react';

const PaymentHeader = () => {
    return (
        <div className='mt-24 w-full h-auto flex items-center justify-center relative'>
            <Image src='/header/payment.png' alt='' width={1920} height={1080} className='w-full h-96 object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-6xl text-2xl font-semibold text-white text-center'>Payment</div>
        </div>

    )
}

export default PaymentHeader