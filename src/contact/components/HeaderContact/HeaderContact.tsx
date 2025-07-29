import React from 'react';
import './header.css';
import Image from 'next/image';

const HeaderContact = () => {
    return (
        <Image src='/support/banner.png' alt='Header Image' width={1920} height={1080} className='w-full h-[400px] object-cover mt-24' />
    )
}

export default HeaderContact