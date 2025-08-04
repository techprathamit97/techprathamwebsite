import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneIcon } from 'lucide-react';
import { Cross2Icon } from '@radix-ui/react-icons';

const ToolTip = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-auto flex flex-col items-center justify-center'>
            <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className='w-16 h-16 rounded-full bg-white text-black fixed bottom-10 left-10 z-[100]'>
                {!isOpen ? (
                    <PhoneIcon className='w-10 h-10' />
                ) : (
                    <Cross2Icon className='w-10 h-10' />
                )}
            </Button>
            {isOpen && (
                <div className='w-auto flex flex-col gap-2 bottom-28 left-10 fixed z-[100]'>
                    <div className='w-full flex flex-row gap-2 items-center justify-center relative'>
                        <Button variant="outline" className='w-16 h-16 rounded-full bg-white text-black'>
                            <PhoneIcon className='w-10 h-10' />
                        </Button>
                        <p className='bg-black text-white px-3 py-2 rounded absolute left-20 w-auto text-nowrap'>Add to library</p>
                    </div>
                    <div className='w-full flex flex-row gap-2 items-center justify-center relative'>
                        <Button variant="outline" className='w-16 h-16 rounded-full bg-white text-black'>
                            <PhoneIcon className='w-10 h-10' />
                        </Button>
                        <p className='bg-black text-white px-3 py-2 rounded absolute left-20 w-auto text-nowrap'>Add to library</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ToolTip