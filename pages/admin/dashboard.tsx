"use client";
import React, { useContext, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { UserContext } from '@/context/userContext';
import AdminLoader from '@/src/account/common/AdminLoader';
import SignOut from '@/src/account/common/SignOut';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const AdminAccount = () => {
    const { data: session, status: sessionStatus } = useSession();
    const {
        loading,
        authenticated,
        userData,
        currentTab,
        setCurrentTab
    } = useContext(UserContext);

    return (
        <React.Fragment>
            {loading ? (
                <AdminLoader />
            ) : !authenticated ? (
                <SignOut />
            ) : (
                <div className="h-screen w-full fixed bg-[#121421]">
                    <div className="grid grid-cols-5 h-full">

                        <AdminSidebar />

                        <div className="col-span-4 w-full h-full overflow-y-auto p-8">

                            <AdminTopBar />

                            <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
                                <h2 className="text-xl font-semibold text-white mb-4">Dashboard</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Account ID</label>
                                        <div className="bg-[#1a1d29] rounded-md p-3">
                                            <p className="text-purple-200 font-mono text-sm break-all">
                                                {userData._id || 'Not available'}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Session Email</label>
                                        <div className="bg-[#1a1d29] rounded-md p-3">
                                            <p className="text-purple-200">
                                                {session?.user?.email || 'Not available'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default AdminAccount;