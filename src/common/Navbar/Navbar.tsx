import React from 'react';
import { Input } from '@/components/ui/input';
import { BackpackIcon, DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='z-50 w-full flex flex-col items-center justify-center shadowBorder'>
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center'>
        <div className='lg:w-10/12 w-11/12 lg:py-1 md:py-2 py-1 md:flex hidden flex-row gap-6 lg:justify-start justify-between items-center font-light'>
          <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <div className='lg:flex hidden flex-row gap-2 items-center justify-center ml-4 cursor-pointer'>
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

        {/* mobile design */}
        <div className='w-11/12 md:hidden flex flex-row items-center justify-between'>
          <Link href={'/'} aria-label='Techpratham'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <div>
            <HamburgerMenuIcon className='w-5 h-5' />
          </div>
        </div>
      </div>
      <div className='w-full h-auto py-2 lg:flex hidden items-center justify-center bg-white'>
        <div className='lg:w-10/12 w-11/12 py-1 text-sm flex flex-row flex-wrap gap-6 items-center justify-center'>
          <Link href='/about-us' className='cursor-pointer'>About Us</Link>
          <Link href='/training-certificate' className='cursor-pointer'>Training Certificate</Link>
          <Link href='/job-openings' className='cursor-pointer'>Job Openings</Link>
          <Link href='/admission' className='cursor-pointer'>Admission</Link>
          <Link href='/reviews' className='cursor-pointer'>Reviews</Link>
          <Link href='/blogs' className='cursor-pointer'>Blogs</Link>
          <Link href='/payment' className='cursor-pointer'>Payment</Link>
          <Link href='/contact-us' className='cursor-pointer'>Contact Us</Link>
          <Link href='/technical-support' className='cursor-pointer'>24/7 Technical Support</Link>
          <Link href='/student-zone' className='cursor-pointer'>Student Zone</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar