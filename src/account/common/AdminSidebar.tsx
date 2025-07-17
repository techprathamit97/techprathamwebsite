import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArchiveIcon, AvatarIcon, DashboardIcon, ExitIcon, GearIcon, LaptopIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import { UserContext } from '@/context/userContext';
import { BellIcon, CircleCheckBigIcon } from 'lucide-react';

const AdminSidebar = () => {
    const { currentTab, setCurrentTab } = useContext(UserContext);

    return (
        <div className="col-span-1 bg-[#242935] p-6 min-h-full flex flex-col items-start justify-between">

            <div className='w-full flex flex-col items-start justify-center'>
                <div className="flex items-center space-x-4 mb-10">
                    <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
                        <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
                    </Link>
                </div>

                <Link href='/admin/dashboard/profile' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'profile' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <AvatarIcon className='w-6 h-6' />
                    <div>Profile</div>
                </Link>

                <Link href='/admin/dashboard' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'dashboard' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <DashboardIcon className='w-6 h-6' />
                    <div>Dashboard</div>
                </Link>

                <Link href='/admin/dashboard/courses' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'courses' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <LaptopIcon className='w-6 h-6' />
                    <div>Courses</div>
                </Link>

                <Link href='/admin/dashboard/requests' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'requests' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <BellIcon className='w-6 h-6' />
                    <div>Requests</div>
                </Link>

                <Link href='/admin/dashboard/enrolled' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'enrolled' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <ArchiveIcon className='w-6 h-6' />
                    <div>Enrolled</div>
                </Link>

                <Link href='/admin/dashboard/completed' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'completed' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <CircleCheckBigIcon className='w-6 h-6' />
                    <div>Completed</div>
                </Link>

                <Link href='/admin/dashboard/account' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'account' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <AvatarIcon className='w-6 h-6' />
                    <div>Account</div>
                </Link>

                <Link href='/admin/dashboard/system' className={`text-[#BDBDBD] w-full flex flex-row gap-3 items-center justify-start text-xl rounded-md py-2 px-4 cursor-pointer transition-all duration-200 mb-1 ${currentTab === 'system' && 'bg-[#2D2D2E] hover:bg-[#3A3A3B] text-[#E5FB2E]'}`}>
                    <GearIcon className='w-6 h-6' />
                    <div>System</div>
                </Link>
            </div>

            <div onClick={() => signOut()} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                <ExitIcon className='w-6 h-6' />
                <div>Sign Out</div>
            </div>

        </div>
    )
}

export default AdminSidebar