import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AvatarIcon, DashboardIcon, ExitIcon, GearIcon, LaptopIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';

const UserSidebar = () => {
    return (
        <div className="col-span-1 bg-[#242935] p-6 min-h-full flex flex-col items-start justify-between">

            <div className='flex flex-col items-start justify-center'>
                <div className="flex items-center space-x-4 mb-10">
                    <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
                        <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
                    </Link>
                </div>

                <Link href='/user/dashboard/profile' className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                    <AvatarIcon className='w-6 h-6' />
                    <div>Profile</div>
                </Link>

                <Link href='/user/dashboard' className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                    <DashboardIcon className='w-6 h-6' />
                    <div>Dashboard</div>
                </Link>

                <Link href='/user/dashboard/courses' className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                    <LaptopIcon className='w-6 h-6' />
                    <div>Courses</div>
                </Link>

                <Link href='/user/dashboard/account' className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                    <AvatarIcon className='w-6 h-6' />
                    <div>Account</div>
                </Link>

                <Link href='/user/dashboard/system' className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
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

export default UserSidebar