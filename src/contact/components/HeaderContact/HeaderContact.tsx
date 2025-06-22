import React from 'react';

const HeaderContact = () => {
    return (
        <div className='w-auto h-auto flex flex-col items-center justify-center gap-6 lg:pt-40 md:pt-24 sm:pt-24 pt-10'>
            <div className='px-4 py-1 rounded border-2 border-black text-black uppercase font-semibold cursor-pointer'>
                Contact Us
            </div>
            <div className='md:w-10/12 w-11/12 text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>Get in touch with us for more information</div>
            <div>If you need help or have a question, we're here for you</div>
        </div>
    )
}

export default HeaderContact