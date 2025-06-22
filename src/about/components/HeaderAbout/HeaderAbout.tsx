import React from 'react';

const HeaderAbout = () => {
    return (
        <div className='w-full h-96 pt-24 flex flex-col items-center justify-center bg-black text-white relative overflow-hidden'>
            <div className='bg-gradient-to-tr from-[#FC7A35] to-[#f8da52] text-transparent bg-clip-text text-4xl font-semibold'>About Us</div>
            <div className='text-xl font-light under'>Our Mission is to build nation through education and beyond limitation.</div>
            <div className='absolute -top-20 -left-16 w-96 h-96 rounded-full boxShadow'></div>
            <div className='absolute -bottom-44 -right-16 w-96 h-96 rounded-full boxShadow'></div>
        </div>
    )
}

export default HeaderAbout