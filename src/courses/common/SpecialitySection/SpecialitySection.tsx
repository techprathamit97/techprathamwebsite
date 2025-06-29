import React, { useState } from 'react';

const SpecialitySection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col py-6 gap-6'>
                <div className='text-2xl font-semibold text-left flex flex-row gap-4 items-center justify-start'>
                    <div>Why Choose Tech Pratham?</div>
                </div>
                <div className='w-full h-auto grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Left side: clickable items */}
                    <div className='flex flex-col gap-4'>
                        {['here first', 'here second', 'here third', 'here fourth'].map((item, idx) => (
                            <div
                                key={idx}
                                className={`cursor-pointer px-2 py-1 rounded ${selectedIndex === idx ? 'bg-blue-100 font-bold' : ''}`}
                                onClick={() => setSelectedIndex(idx)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {/* Right side: show only selected data */}
                    <div className='flex flex-col gap-4'>
                        <div>
                            {['here first data', 'here second data', 'here third data', 'here fourth data'][selectedIndex]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialitySection