import React from 'react';
import CourseTab from '@/src/account/components/CourseTab';
import AdminSidebar from '@/src/account/common/AdminSidebar';
import AdminTopBar from '@/src/account/common/AdminTopBar';

const CreateCourse = () => {
    return (
        <div className="h-screen w-full fixed bg-[#121421]">
            <div className="grid grid-cols-5 h-full">

                <AdminSidebar />

                <div className="col-span-4 w-full h-full overflow-y-auto p-8">

                    <AdminTopBar />

                    <CourseTab />
                </div>
            </div>
        </div>
    )
}

export default CreateCourse