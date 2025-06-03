import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const CareerHome = () => {
  return (
    <div className='w-full max-w-7xl mx-auto h-auto flex flex-col items-center justify-center py-10 bg-white text-black px-4'>
      {/* Partners Section */}
      <div className='w-full mb-12'>
        <div className="text-center text-gray-600 mb-6 text-lg">In Association With</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 w-full justify-items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center border">
              <span className="text-gray-400 text-xs">Partner {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className='w-full h-auto flex flex-col text-center py-10'>
        <div className="text-3xl font-bold mb-4 text-gray-800">Our Courses</div>
        <div className="text-lg text-gray-600 max-w-2xl mx-auto">Programs to Help you upskill which lands you to your Dream Job</div>
      </div>

    </div>
  )
}

export default CareerHome