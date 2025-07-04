"use client";
import React, { useContext, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { UserContext } from '@/context/userContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AdminAccount = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [error, setError] = useState("");
    const {
        loading,
        authenticated,
        userData,
        refreshUserData,
    } = useContext(UserContext);

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading admin account...</p>
                </div>
            </div>
        );
    }

    // Not authenticated state
    if (!authenticated) {
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
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                    here navigations
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Admin Account</h1>
                                <p className="text-gray-600">View your administrator profile information</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => refreshUserData()}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                                disabled={loading}
                            >
                                {loading ? 'Refreshing...' : 'Refresh'}
                            </button>
                            <button
                                onClick={() => signOut()}
                                className="bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900">{userData.name || 'Not provided'}</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900">{userData.email || 'Not provided'}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900">{userData.phone || 'Not provided'}</p>
                            </div>
                        </div>

                        {/* Position */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Position/Role</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900">{userData.position || 'Not specified'}</p>
                            </div>
                        </div>

                        {/* User Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${userData.userType === 'admin'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {userData.userType || 'user'}
                                </span>
                            </div>
                        </div>

                        {/* Profile Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Description</label>
                            <div className="bg-gray-50 rounded-md p-3 min-h-[100px]">
                                <p className="text-gray-900">{userData.profile || 'No profile description provided'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Account ID</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900 font-mono text-sm break-all">
                                    {userData._id || 'Not available'}
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Session Email</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <p className="text-gray-900">
                                    {session?.user?.email || 'Not available'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Information */}
                <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">System Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Authentication Status</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${authenticated
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                    }`}>
                                    {authenticated ? 'Authenticated' : 'Not Authenticated'}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Session Status</label>
                            <div className="bg-gray-50 rounded-md p-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${sessionStatus === 'authenticated'
                                    ? 'bg-green-100 text-green-800'
                                    : sessionStatus === 'loading'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                    {sessionStatus || 'Unknown'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Raw Data (for debugging) */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Raw Data (Debug)</h2>
                    <details className="cursor-pointer">
                        <summary className="text-sm text-gray-600 hover:text-gray-800 mb-4">
                            Click to view raw admin data
                        </summary>
                        <div className="bg-gray-100 rounded-md p-4">
                            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                                {JSON.stringify(userData, null, 2)}
                            </pre>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default AdminAccount;