import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { BackpackIcon, Cross2Icon, DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { allCourses } from '@/components/assets/courses';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);

  const coursesByCategory = React.useMemo(() => {
    const categories = [...new Set(allCourses.map(course => course.category))];
    
    return categories.map(category => ({
      name: category,
      courses: allCourses.filter(course => course.category === category)
    }));
  }, []);

  return (
    <div className={`${isActive ? 'fixed top-0 left-0' : 'absolute'} z-50 w-full flex flex-col items-center justify-center shadowBorder`}>

      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center z-[100]'>
        <div className='lg:w-10/12 w-11/12 lg:py-1 md:py-2 py-1 md:flex hidden flex-row gap-6 lg:justify-start justify-between items-center font-light'>
          <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <div onClick={() => setIsActive(!isActive)} className='lg:flex hidden flex-row gap-2 items-center justify-center ml-4 cursor-pointer'>
            <DashboardIcon className='w-4 h-4' />
            <span>Courses</span>
          </div>
          <div className='flex flex-row gap-6 items-center justify-center'>
            <div className='flex flex-row lg:w-96 md:w-72'>
              <Input className='lg:max-w-96 max-w-72 h-10 bg-white text-black rounded-r-none rounded-l-md' />
              <div className='p-2 bg-red-700 flex items-center justify-center rounded-r-md'>
                <Search />
              </div>
            </div>
            <div className='lg:hidden flex'>
              <HamburgerMenuIcon className='w-5 h-5' />
            </div>
          </div>
          <Link href='/corporate-training' className='lg:flex hidden flex-row gap-2 items-center justify-center cursor-pointer'>
            <BackpackIcon className='w-4 h-4' />
            <span>Corporate Training</span>
          </Link>
        </div>

        <div className='w-11/12 md:hidden flex flex-row items-center justify-between'>
          <Link href={'/'} aria-label='Techpratham'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <div>
            {!navOpen ? (
              <HamburgerMenuIcon onClick={() => setNavOpen(!navOpen)} className='w-5 h-5' />
            ) : (
              <Cross2Icon onClick={() => setNavOpen(!navOpen)} className='w-5 h-5' />
            )}
          </div>
        </div>
      </div>

      <div className={`w-full h-auto py-2 lg:flex hidden items-center justify-center bg-white border-b border-b-gray-100 z-20`}>
        <div className='lg:w-10/12 w-11/12 py-1 text-sm flex flex-row flex-wrap gap-6 items-center justify-center'>
          <Link href='/about-us' className='cursor-pointer'>About Us</Link>
          <Link href='/training-certificate' className='cursor-pointer'>Training Certificate</Link>
          <Link href='/job-openings' className='cursor-pointer'>Job Openings</Link>
          <Link href='/admission' className='cursor-pointer'>Admission</Link>
          <Link href='/reviews' className='cursor-pointer'>Reviews</Link>
          <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
          <Link href='/payment' className='cursor-pointer'>Payment</Link>
          <Link href='/contact-us' className='cursor-pointer'>Contact Us</Link>
          <Link href='/student-zone' className='cursor-pointer'>Student Zone</Link>
        </div>
      </div>

      <div className={`${!navOpen && 'hidden'} w-full h-auto py-2 md:hidden flex items-center justify-center bg-white border-b border-b-gray-100 z-20`}>
        <div className='lg:w-10/12 w-11/12 py-1 text-sm flex flex-row flex-wrap gap-6 items-center justify-center'>
          <Link href='/about-us' className='cursor-pointer'>About Us</Link>
          <Link href='/training-certificate' className='cursor-pointer'>Training Certificate</Link>
          <Link href='/job-openings' className='cursor-pointer'>Job Openings</Link>
          <Link href='/admission' className='cursor-pointer'>Admission</Link>
          <Link href='/reviews' className='cursor-pointer'>Reviews</Link>
          <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
          <Link href='/payment' className='cursor-pointer'>Payment</Link>
          <Link href='/contact-us' className='cursor-pointer'>Contact Us</Link>
          <Link href='/student-zone' className='cursor-pointer'>Student Zone</Link>
        </div>
      </div>

      <div className={`transition-all duration-300 border-b border-b-gray-200 ${!isActive ? '-top-80 left-0' : 'top-28 left-0'} absolute md:flex hidden w-full h-auto bg-white text-[#1a1a1a] transition-all flex-col items-center md:overflow-hidden overflow-y-auto md:pb-0 pb-10 z-10`}>
        <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-8'>
          {/* Categories Column */}
          <div className='col-span-1 flex h-80 flex-col gap-2 overflow-auto'>
            <h3 className='font-semibold text-lg mb-2 text-gray-800'>Course Categories</h3>
            {coursesByCategory.map((category, idx) => (
              <button
                key={category.name}
                className={`text-left px-3 py-2 rounded transition-all duration-200 ${
                  selectedCategoryIdx === idx 
                    ? 'bg-red-700 text-white font-semibold' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelectedCategoryIdx(idx)}
              >
                {category.name}
                <span className='ml-2 text-xs opacity-75'>
                  ({category.courses.length})
                </span>
              </button>
            ))}
          </div>

          {/* Courses Display Column */}
          <div className='col-span-1 md:col-span-2 p-4 flex flex-col bg-gray-50 rounded gap-4 border border-gray-200 max-h-80 overflow-y-auto'>
            <div className='sticky top-0 bg-gray-50 pb-2 border-b border-gray-200'>
              <h3 className='font-semibold text-lg text-gray-800'>
                {coursesByCategory[selectedCategoryIdx]?.name} Courses
              </h3>
            </div>
            
            <div className='grid grid-cols-1 gap-3'>
              {coursesByCategory[selectedCategoryIdx]?.courses.map((course) => (
                <Link
                  key={course.link}
                  href={`/courses/${course.link}`}
                  onClick={() => setIsActive(!isActive)}
                  className='block p-3 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-sm transition-all duration-200 group'
                >
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-start justify-between'>
                      <h4 className='font-medium text-gray-900 group-hover:text-red-700 transition-colors'>
                        {course.title}
                      </h4>
                      <span className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap ml-2'>
                        {course.level}
                      </span>
                    </div>
                    <p className='text-sm text-gray-600 line-clamp-2'>
                      {course.shortDesc}
                    </p>
                    <div className='flex items-center gap-4 text-xs text-gray-500'>
                      <span className='flex items-center gap-1'>
                        ⭐ {course.rating}
                      </span>
                      <span>📅 {course.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar