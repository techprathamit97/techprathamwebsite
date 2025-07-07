import React, { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import SignOut from '@/src/account/common/SignOut';
import AdminLoader from '@/src/account/common/AdminLoader';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const profile = () => {
  const { userData, loading, authenticated } = useContext(UserContext);

  return (
    <React.Fragment>
      {loading ? (
        <AdminLoader />
      ) : !authenticated ? (
        <SignOut />
      ) : (
        <div className="h-screen w-full fixed bg-[#121421]" >
          <div className="grid grid-cols-5 h-full">

            <AdminSidebar />

            <div className="col-span-4 w-full h-full overflow-y-auto p-8">

              <AdminTopBar />

              <div className="bg-[#242935] shadow-sm rounded-lg p-6 mb-6">
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
        </div>
      )}
    </React.Fragment>
  )
}

export default profile