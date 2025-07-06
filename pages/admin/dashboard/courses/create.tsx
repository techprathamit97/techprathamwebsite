import React from 'react';
import Sidebar from '@/src/account/common/Sidebar';
import TopBar from '@/src/account/common/TopBar';
import CourseTab from '@/src/account/components/CourseTab';

const CreateCourse = () => {
    return (
        <div className="h-screen w-full fixed bg-[#121421]">
            <div className="grid grid-cols-5 h-full">

                <Sidebar />

                <div className="col-span-4 w-full h-full overflow-y-auto p-8">

                    <TopBar />

                    <CourseTab />
                </div>
            </div>
        </div>
    )
}

export default CreateCourse