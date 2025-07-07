import React, { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { useSession } from 'next-auth/react';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const system = () => {
    const { userData, loading, authenticated } = useContext(UserContext);
    const { data: session, status: sessionStatus } = useSession();

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
                                <h2 className="text-xl font-semibold text-white mb-4">System Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Authentication Status</label>
                                        <div className="bg-[#1a1d29] rounded-md p-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${authenticated
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}>
                                                {authenticated ? 'Authenticated' : 'Not Authenticated'}
                                            </span>
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
                                <h2 className="text-xl font-semibold text-white my-4">Raw Data (Debug)</h2>
                                <details className="cursor-pointer">
                                    <summary className="text-sm text-gray-400 hover:text-gray-200 mb-4">
                                        Click to view raw admin data
                                    </summary>
                                    <div className="bg-[#1a1d29] rounded-md p-4">
                                        <pre className="text-sm text-purple-200 overflow-x-auto whitespace-pre-wrap">
                                            {JSON.stringify(userData, null, 2)}
                                        </pre>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default system