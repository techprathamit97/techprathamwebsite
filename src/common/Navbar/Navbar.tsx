import React, { useContext, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { BackpackIcon, Cross2Icon, DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { UserContext } from '@/context/userContext';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';

// Type definitions
interface Course {
  id: string;
  title: string;
  category: string;
  link: string;
  shortDesc: string;
  level: string;
  rating: number;
  duration: string;
}

interface CourseCategory {
  name: string;
  courses: Course[];
}

interface UserContextType {
  authenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
}

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const { authenticated, isAdmin, loading } = useContext(UserContext) as UserContextType;

  const [course, setCourse] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourseData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/course/fetch`);
        if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

        const data: Course[] = await res.json();
        setCourse(data);
      } catch (error: any) {
        console.error("Failed to fetch course data:", error);
        toast.error("Failed to fetch course data. Please try again.");
        setCourse([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  const coursesByCategory = React.useMemo((): CourseCategory[] => {
    if (!course || course.length === 0) return [];

    const categories = [...new Set(course.map(c => c?.category).filter(Boolean))];

    return categories.map(category => ({
      name: category,
      courses: course.filter(c => c?.category === category)
    }));
  }, [course]);

  const handleCategorySelect = (idx: number): void => {
    setSelectedCategoryIdx(idx);
  };

  const handleNavToggle = (): void => {
    setNavOpen(!navOpen);
  };

  const handleCoursesToggle = (): void => {
    setIsActive(!isActive);
  };

  const handleCourseClick = (): void => {
    setIsActive(false);
  };

  return (
    <div className={`${isActive ? 'fixed top-0 left-0' : 'absolute'} z-50 w-full flex flex-col items-center justify-center shadowBorder`}>
      {/* Main Navigation Bar */}
      <div className='bg-[#080E3A] text-white w-full h-auto flex items-center justify-center z-[100]'>
        <div className='lg:w-10/12 w-11/12 lg:py-1 md:py-2 py-1 md:flex hidden flex-row gap-6 lg:justify-start justify-between items-center font-light'>
          <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
            <Image src={'/navbar/techpratham.svg'} alt='Techpratham Logo' width={100} height={50} className='w-40 h-auto' />
          </Link>

          <button
            onClick={handleCoursesToggle}
            className='lg:flex hidden flex-row gap-2 items-center justify-center ml-4 cursor-pointer hover:opacity-80 transition-opacity'
            aria-label='Toggle courses menu'
          >
            <DashboardIcon className='w-4 h-4' />
            <span>Courses</span>
          </button>

          <div className='flex flex-row gap-6 items-center justify-center'>
            <div className='flex flex-row lg:w-96 md:w-72'>
              <Input
                className='lg:max-w-96 max-w-72 h-10 bg-white text-black rounded-r-none rounded-l-md'
                placeholder='Search courses...'
                aria-label='Search courses'
              />
              <button
                className='p-2 bg-red-700 flex items-center justify-center rounded-r-md hover:bg-red-800 transition-colors'
                aria-label='Search'
              >
                <Search className='w-4 h-4' />
              </button>
            </div>

            <button className='lg:hidden flex' onClick={handleNavToggle} aria-label='Toggle navigation menu'>
              <HamburgerMenuIcon className='w-5 h-5' />
            </button>
          </div>

          <Link href='/corporate-training' className='lg:flex hidden flex-row gap-2 items-center justify-center cursor-pointer hover:opacity-80 transition-opacity'>
            <BackpackIcon className='w-4 h-4' />
            <span>Corporate Training</span>
          </Link>
        </div>

        <div className='w-11/12 md:hidden flex flex-row items-center justify-between'>
          <Link href={'/'} aria-label='Techpratham'>
            <Image src={'/navbar/techpratham.svg'} alt='Techpratham Logo' width={100} height={50} className='w-40 h-auto' />
          </Link>
          <button onClick={handleNavToggle} aria-label='Toggle navigation menu'>
            {!navOpen ? (
              <HamburgerMenuIcon className='w-5 h-5' />
            ) : (
              <Cross2Icon className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>

      <div className={`w-full h-auto py-2 lg:flex hidden items-center justify-center bg-white border-b border-b-gray-100 z-20`}>
        <nav className='lg:w-10/12 w-11/12 py-1 text-sm flex flex-row flex-wrap gap-6 items-center justify-center'>
          <Link href='/about-us' className='cursor-pointer hover:text-red-700 transition-colors'>About Us</Link>
          <Link href='/job-openings' className='cursor-pointer hover:text-red-700 transition-colors'>Job Openings</Link>
          <Link href='/reviews' className='cursor-pointer hover:text-red-700 transition-colors'>Reviews</Link>
          <Link href='/blogs' className='cursor-pointer hover:text-red-700 transition-colors'>Blogs</Link>
          <Link href='/payment' className='cursor-pointer hover:text-red-700 transition-colors'>Payment</Link>
          <Link href='/contact-us' className='cursor-pointer hover:text-red-700 transition-colors'>Contact Us</Link>
          {loading ? (
            <span className='cursor-pointer opacity-50'>Loading...</span>
          ) : authenticated ? (
            isAdmin ? (
              <Link href='/admin/dashboard' className='cursor-pointer hover:text-red-700 transition-colors'>Admin Dashboard</Link>
            ) : (
              <Link href='/user/dashboard' className='cursor-pointer hover:text-red-700 transition-colors'>Dashboard</Link>
            )
          ) : (
            <Link href='/auth/login' className='cursor-pointer hover:text-red-700 transition-colors'>Login</Link>
          )}
          {authenticated && (
            <div onClick={() => signOut()} className='cursor-pointer hover:text-red-700'>Sign Out</div>
          )}
        </nav>
      </div>

      <div className={`${!navOpen && 'hidden'} w-full h-auto py-2 md:hidden flex items-center justify-center bg-white border-b border-b-gray-100 z-20`}>
        <nav className='lg:w-10/12 w-11/12 py-1 text-sm flex flex-col gap-4 items-center justify-center'>
          <Link href='/about-us' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>About Us</Link>
          <Link href='/training-certificate' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Training Certificate</Link>
          <Link href='/job-openings' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Job Openings</Link>
          <Link href='/reviews' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Reviews</Link>
          <Link href='/blogs' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Blogs</Link>
          <Link href='/payment' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Payment</Link>
          <Link href='/contact-us' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Contact Us</Link>
          <Link href='https://completedads.in/' target='_blank' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Student Zone</Link>
          {loading ? (
            <span className='cursor-pointer opacity-50'>Loading...</span>
          ) : authenticated ? (
            isAdmin ? (
              <Link href='/admin/dashboard' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Admin Dashboard</Link>
            ) : (
              <Link href='/user/dashboard' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Dashboard</Link>
            )
          ) : (
            <Link href='/auth/login' className='cursor-pointer hover:text-red-700 transition-colors' onClick={handleNavToggle}>Login</Link>
          )}
        </nav>
      </div>

      <div className={`transition-all duration-300 border-b border-b-gray-200 ${!isActive ? '-top-80 left-0' : 'top-28 left-0'} absolute md:flex hidden w-full h-auto bg-white text-[#1a1a1a] flex-col items-center md:overflow-hidden overflow-y-auto md:pb-0 pb-10 z-10`}>
        <div className='md:w-10/12 w-11/12 h-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-8'>

          <div className='col-span-1 flex h-80 flex-col gap-2 overflow-auto'>
            <h3 className='font-semibold text-lg mb-2 text-gray-800'>Course Categories</h3>
            {isLoading ? (
              <div className='flex items-center justify-center h-32'>
                <span className='text-gray-500'>Loading categories...</span>
              </div>
            ) : coursesByCategory.length === 0 ? (
              <div className='flex items-center justify-center h-32'>
                <span className='text-gray-500'>No categories available</span>
              </div>
            ) : (
              coursesByCategory.map((category, idx) => (
                <button
                  key={`${category.name}-${idx}`}
                  className={`text-left px-3 py-2 rounded transition-all duration-200 ${selectedCategoryIdx === idx
                    ? 'bg-red-700 text-white font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  onClick={() => handleCategorySelect(idx)}
                  aria-label={`Select ${category.name} category`}
                >
                  {category.name}
                  <span className='ml-2 text-xs opacity-75'>
                    ({category.courses.length})
                  </span>
                </button>
              ))
            )}
          </div>

          <div className='col-span-1 md:col-span-2 p-4 flex flex-col bg-gray-50 rounded gap-4 border border-gray-200 max-h-80 overflow-y-auto'>
            <div className='bg-gray-50 pb-2 border-b border-gray-200'>
              <h3 className='font-semibold text-lg text-gray-800'>
                {coursesByCategory[selectedCategoryIdx]?.name || 'All'} Courses
              </h3>
            </div>

            <div className='grid grid-cols-1 gap-3'>
              {isLoading ? (
                <div className='flex items-center justify-center h-32'>
                  <span className='text-gray-500'>Loading courses...</span>
                </div>
              ) : coursesByCategory[selectedCategoryIdx]?.courses.length === 0 ? (
                <div className='flex items-center justify-center h-32'>
                  <span className='text-gray-500'>No courses available in this category</span>
                </div>
              ) : (
                coursesByCategory[selectedCategoryIdx]?.courses.map((course) => (
                  <Link
                    key={`${course.id}-${course.link}`}
                    href={`/courses/${course.link}`}
                    onClick={handleCourseClick}
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;