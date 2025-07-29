import Image from 'next/image';
import React from 'react';

const TrainingHeader = () => {
    return (
        <Image src='/training/header.jpg' alt='Header Image' width={1920} height={1080} className='w-full h-[400px] object-cover mt-24' />
    )
}

export default TrainingHeader