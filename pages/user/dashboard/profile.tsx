import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import UserLoader from '@/src/account/common/UserLoader';
import UserSidebar from '@/src/account/common/UserSidebar';
import UserTopBar from '@/src/account/common/UserTopBar';

const profile = () => {
  const { userData, loading, authenticated, setActiveUserTab } = useContext(UserContext);

  useEffect(() => {
    setActiveUserTab("profile");
  }, [setActiveUserTab]);

  return (
    <React.Fragment>
      {loading ? (
        <UserLoader />
      ) : !authenticated ? (
        <SignOut />
      ) : (
        <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>

          <UserSidebar />

          <div className='bg-[#000] flex flex-col w-full h-full md:relative fixed'>

            <UserTopBar />

            <div className="w-full h-auto flex flex-col overflow-auto p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <div className="bg-[#1a1d29] rounded-md p-3">
                    <p className="text-white">{userData.name || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Id</label>
                  <div className="bg-[#1a1d29] rounded-md p-3">
                    <p className="text-white">{userData.email || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="bg-[#1a1d29] rounded-md p-3">
                    <p className="text-white">{userData.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                  <div className="bg-[#1a1d29] rounded-md p-3">
                    <p className="text-white">{userData.position || 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">User Type</label>
                  <div className="bg-[#1a1d29] rounded-md p-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${userData.userType === 'admin'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-blue-100 text-blue-800'
                      }`}>
                      {userData.userType || 'user'}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Description</label>
                  <div className="bg-[#1a1d29] rounded-md p-3 min-h-[100px]">
                    <p className="text-white">{userData.profile || 'No profile description provided'}</p>
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

export default profile