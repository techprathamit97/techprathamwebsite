import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center shadowBorder'>
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3'>
          <div>TechPratham</div>
        </div>
      </div>
      <div className='w-full h-auto py-2 flex items-center justify-center'>
        <div className='md:w-10/12 w-11/12 py-3'>here second</div>
      </div>
    </div>
  )
}

export default Navbar