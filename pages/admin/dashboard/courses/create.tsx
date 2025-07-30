import React from 'react';
import CourseTab from '@/src/account/components/CourseTab';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const CreateCourse = () => {
    return (
        <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>

            <AdminSidebar />

            <div className='bg-[#000] flex flex-col w-full h-full md:relative fixed'>

                <AdminTopBar />

                <div className='w-full h-full p-6 overflow-auto'>
                    <CourseTab />
                </div>
            </div>
        </div>
    )
}

export default CreateCourse