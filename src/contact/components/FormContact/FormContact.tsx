import React from 'react';

const FormContact = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16'>
            <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='md:col-span-1 text-justify'>
                    <div>here address</div>
                    <div>here address</div>
                    <div>here address</div>
                </div>
                <div className='md:col-span-1'>
                    here form
                </div>
            </div>
        </div>
    )
}

export default FormContact