"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { AvatarIcon, DashboardIcon, GearIcon, LaptopIcon } from '@radix-ui/react-icons';

const dummyUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8901",
    position: "Administrator",
    userType: "admin",
    profile: "Experienced admin user with full access.",
    _id: "1234567890abcdef",
};

const dummySession = {
    user: {
        email: "john.doe@example.com",
    },
};
const dummySessionStatus = "authenticated";
const dummyAuthenticated = true;
const dummyLoading = false;

const AdminAccount = () => {
    const [currentTab, setCurrentTab] = useState('profile');

    if (dummyLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading admin account...</p>
                </div>
            </div>
        );
    }

    if (!dummyAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Sign In</h2>
                    <p className="text-gray-600 mb-4">You need to be signed in to view your admin account.</p>
                    <Link href='/auth/login'>
                        <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-[#121421]">
            <div className="grid grid-cols-5 h-full">

                <div className="col-span-1 bg-[#242935] p-6 min-h-full flex flex-col flex-1">

                    <div className="flex items-center space-x-4 mb-10">
                        <Link href={'/'} aria-label='Techpratham' className='md:flex hidden'>
                            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-40 h-auto' />
                        </Link>
                    </div>

                    <div onClick={() => setCurrentTab('profile')} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <AvatarIcon className='w-6 h-6' />
                        <div>Profile</div>
                    </div>

                    <div className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <DashboardIcon className='w-6 h-6' />
                        <div>Dashboard</div>
                    </div>

                    <div className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <LaptopIcon className='w-6 h-6' />
                        <div>Course</div>
                    </div>

                    <div onClick={() => setCurrentTab('account')} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <AvatarIcon className='w-6 h-6' />
                        <div>Account</div>
                    </div>

                    <div onClick={() => setCurrentTab('system')} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <GearIcon className='w-6 h-6' />
                        <div>System</div>
                    </div>

                    <div onClick={() => setCurrentTab('rawdata')} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <LaptopIcon className='w-6 h-6' />
                        <div>Raw Data</div>
                    </div>

                    <div onClick={() => setCurrentTab('rawdata')} className='text-[#BDBDBD] text-xl font-medium flex flex-row gap-2 items-center justify-start mb-6 cursor-pointer'>
                        <LaptopIcon className='w-6 h-6' />
                        <div>Raw Data</div>
                    </div>

                </div>

                <div className="col-span-4 w-full h-full p-8">

                    <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">Admin Account</h1>
                                    <p className="text-gray-400">View your administrator profile information</p>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <button
                                    onClick={() => { }}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                                    disabled={dummyLoading}
                                >
                                    Refresh
                                </button>
                                <button
                                    onClick={() => { }}
                                    className="bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {currentTab === 'profile' && (
                        <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-white">{dummyUserData.name}</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-white">{dummyUserData.email}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-white">{dummyUserData.phone}</p>
                                    </div>
                                </div>

                                {/* Position */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Position/Role</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-white">{dummyUserData.position}</p>
                                    </div>
                                </div>

                                {/* User Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">User Type</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200">
                                            {dummyUserData.userType}
                                        </span>
                                    </div>
                                </div>

                                {/* Profile Description */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Profile Description</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3 min-h-[100px]">
                                        <p className="text-white">{dummyUserData.profile}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentTab === 'account' && (
                        <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Account ID</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-purple-200 font-mono text-sm break-all">
                                            {dummyUserData._id}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Session Email</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <p className="text-purple-200">
                                            {dummySession.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentTab === 'system' && (
                        <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-white mb-4">System Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Authentication Status</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                                            Authenticated
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Session Status</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                                            {dummySessionStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentTab === 'rawdata' && (
                        <div className="bg-[#242935] shadow-sm rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-white mb-4">Raw Data (Debug)</h2>
                            <details className="cursor-pointer">
                                <summary className="text-sm text-gray-400 hover:text-gray-200 mb-4">
                                    Click to view raw admin data
                                </summary>
                                <div className="bg-[#1a1d29] rounded-md p-4">
                                    <pre className="text-sm text-purple-200 overflow-x-auto whitespace-pre-wrap">
                                        {JSON.stringify(dummyUserData, null, 2)}
                                    </pre>
                                </div>
                            </details>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default AdminAccount;