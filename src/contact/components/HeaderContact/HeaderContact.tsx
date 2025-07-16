import React from 'react';

const HeaderContact = () => {
    return (
        <div className='w-full h-auto bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-16 pb-16'>
            <div className='px-4 py-1 rounded border-2 border-white text-white uppercase font-semibold cursor-pointer'>
                Contact Us
            </div>
            <div className='md:w-10/12 w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>Get in touch with us</div>
            <div>If you need help or have a question, we're here for you</div>
        </div>
    )
}

export default HeaderContact