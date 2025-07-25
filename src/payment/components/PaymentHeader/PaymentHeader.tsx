import React from 'react';

const PaymentHeader = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10 pb-10 bg-gradient-to-tl from-[#600a0e] to-[#C6151D] text-white'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold'>
                Payment
            </div>
            <div className='w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>
                Online Fee Payment
            </div>
            <div className='md:w-9/12 w-11/12 text-center text-base md:text-lg'>
                Secure, Safe & Saral
            </div>
        </div>

    )
}

export default PaymentHeader