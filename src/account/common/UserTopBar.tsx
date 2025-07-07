import React, { useContext } from 'react';
import { signOut } from 'next-auth/react';
import { UserContext } from '@/context/userContext';

const UserTopBar = () => {
    const { loading, refreshUserData } = useContext(UserContext);

    return (
        <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white">User Account</h1>
                        <p className="text-gray-400">View your user profile information.</p>
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
    )
}

export default UserTopBar