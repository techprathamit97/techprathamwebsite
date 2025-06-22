import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { BackpackIcon, DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCourseIdx, setSelectedCourseIdx] = useState(0);

  return (
    <div className={`${isActive ? 'fixed top-0 left-0' : 'absolute'} z-50 w-full flex flex-col items-center justify-center shadowBorder`}>
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center'>
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
      <div className='w-full h-auto py-2 lg:flex hidden items-center justify-center bg-white border-b border-b-gray-100 z-20'>
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
      <div className={`${isActive ? 'flex' : 'hidden'} w-full h-auto bg-white text-[#1a1a1a] transition-all flex-col items-center md:overflow-hidden overflow-y-auto md:pb-0 pb-10 z-10`}>
        <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-2 md:grid-cols-3 gap-4 py-4'>
          <div className='col-span-1 flex flex-col gap-2'>
            {courses.map((course, idx) => (
              <button
                key={course.name}
                className={`text-left px-3 py-2 rounded ${selectedCourseIdx === idx ? 'bg-red-700 text-white font-semibold' : 'hover:bg-gray-100'}`}
                onClick={() => setSelectedCourseIdx(idx)}
              >
                {course.name}
              </button>
            ))}
          </div>
          <div className='col-span-1 md:col-span-2 p-4 flex flex-col items-center bg-gray-50 rounded gap-2 border border-gray-200'>
            <div className='rounded w-full'>
              {courses[selectedCourseIdx].data}
            </div>
            <div className='w-full flex flex-row flex-wrap gap-2 justify-start items-center'>
              {courses[selectedCourseIdx].subCourses.map((subCourse) => (
                <Link
                  key={subCourse.name}
                  href={subCourse.link}
                >
                  <Button variant='manual'>{subCourse.name}</Button>
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

type SubCourse = {
  name: string;
  link: string;
};

type Course = {
  name: string;
  data: string;
  subCourses: SubCourse[];
};

const courses: Course[] = [
  {
    name: 'Web Development',
    data: 'Learn HTML, CSS, JavaScript, React, and more.',
    subCourses: [
      { name: 'HTML & CSS', link: '/courses/web-development/html-css' },
      { name: 'JavaScript', link: '/courses/web-development/javascript' },
      { name: 'React', link: '/courses/web-development/react' },
      { name: 'Node.js', link: '/courses/web-development/nodejs' },
    ],
  },
  {
    name: 'Data Science',
    data: 'Explore Python, Machine Learning, and Data Analysis.',
    subCourses: [
      { name: 'Python Basics', link: '/courses/data-science/python' },
      { name: 'Machine Learning', link: '/courses/data-science/machine-learning' },
      { name: 'Data Analysis', link: '/courses/data-science/data-analysis' },
    ],
  },
  {
    name: 'Cloud Computing',
    data: 'AWS, Azure, GCP, and cloud architecture.',
    subCourses: [
      { name: 'AWS', link: '/courses/cloud-computing/aws' },
      { name: 'Azure', link: '/courses/cloud-computing/azure' },
      { name: 'GCP', link: '/courses/cloud-computing/gcp' },
    ],
  },
  {
    name: 'Cyber Security',
    data: 'Network security, ethical hacking, and more.',
    subCourses: [
      { name: 'Network Security', link: '/courses/cyber-security/network-security' },
      { name: 'Ethical Hacking', link: '/courses/cyber-security/ethical-hacking' },
    ],
  },
  {
    name: 'Mobile App Development',
    data: 'Build apps with Flutter, React Native, and Android.',
    subCourses: [
      { name: 'Flutter', link: '/courses/mobile-app-development/flutter' },
      { name: 'React Native', link: '/courses/mobile-app-development/react-native' },
      { name: 'Android', link: '/courses/mobile-app-development/android' },
    ],
  },
  {
    name: 'UI/UX Design',
    data: 'Design principles, Figma, and prototyping.',
    subCourses: [
      { name: 'Figma', link: '/courses/ui-ux-design/figma' },
      { name: 'Prototyping', link: '/courses/ui-ux-design/prototyping' },
    ],
  },
  {
    name: 'DevOps',
    data: 'CI/CD, Docker, Kubernetes, and automation.',
    subCourses: [
      { name: 'CI/CD', link: '/courses/devops/cicd' },
      { name: 'Docker', link: '/courses/devops/docker' },
      { name: 'Kubernetes', link: '/courses/devops/kubernetes' },
    ],
  },
];