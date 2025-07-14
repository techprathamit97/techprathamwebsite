import Image from 'next/image'
import React from 'react'

const CertificateSection = ({ course }: any) => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-6 pt-16 bg-[#f7f7f7] text-black'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col p-8 gap-6 border-4 border-blue-500 rounded-xl bg-white shadow'>
                <div className='w-auto h-auto'>
                    <Image src='/course/certificate/certify.png' alt='' width={400} height={300} className='md:w-96 w-full h-auto border border-gray-200' />
                </div>
                <div className="w-full flex flex-col items-start p-6 bg-white">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        <span className='border-b-4 border-orange-500'>{course.title}</span> – Associate Training Program
                    </h1>

                    <div className="border border-gray-300 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-2 bg-blue-500">
                            <div className="px-4 py-3 text-white font-medium border-r border-blue-400">
                                Category
                            </div>
                            <div className="px-4 py-3 text-white font-medium">
                                Associate
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-300">
                            <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700 border-r border-gray-300">
                                Exam Name:
                            </div>
                            <div className="px-4 py-3 text-gray-700">
                                {course.title} – Associate
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-300">
                            <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700 border-r border-gray-300">
                                Exam Code:
                            </div>
                            <div className="px-4 py-3 text-gray-700">
                                SAA-C03
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-300">
                            <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700 border-r border-gray-300">
                                Exam Duration:
                            </div>
                            <div className="px-4 py-3 text-gray-700">
                                130 minutes
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-300">
                            <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700 border-r border-gray-300">
                                Exam Format:
                            </div>
                            <div className="px-4 py-3 text-gray-700">
                                Multiple Choice and Multi-Response Questions
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="px-4 py-3 bg-gray-50 font-medium text-gray-700 border-r border-gray-300">
                                Passing Score:
                            </div>
                            <div className="px-4 py-3 text-gray-700">
                                720 (On a scale of 100–1000)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateSection