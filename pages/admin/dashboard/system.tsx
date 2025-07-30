import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import { useSession } from 'next-auth/react';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';
import { Badge } from '@/components/ui/badge';

const system = () => {
    const { userData, loading, authenticated, isAdmin, currentTab, setCurrentTab } = useContext(UserContext);
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        setCurrentTab("system");
    }, [currentTab]);

    return (
        <React.Fragment>
            {loading ? (
                <AdminLoader />
            ) : (!authenticated || !isAdmin) ? (
                <SignOut />
            ) : (
                <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>

                    <AdminSidebar />

                    <div className='bg-black flex flex-col w-full h-full md:relative fixed'>

                        <AdminTopBar />

                        <div className="bg-black p-6">
                            <h2 className="text-xl font-semibold text-white mb-4">System Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Authentication Status</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
                                        {authenticated ? (
                                            <Badge variant='secondary'>Authenticated</Badge>
                                        ) : (
                                            <Badge variant='destructive'>Not Authenticated</Badge>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Session Status</label>
                                    <div className="bg-[#1a1d29] rounded-md p-3">
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
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default system