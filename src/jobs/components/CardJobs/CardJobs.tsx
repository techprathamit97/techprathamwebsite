import React from 'react';
import { Clock3, MapPin } from 'lucide-react';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { jobsData } from '../../assets/jobs';
import Link from 'next/link';

const CardJobs = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center bg-white'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center py-16 gap-8'>

                {jobsData.map((job, index) => (
                    <div key={index} className='w-full h-auto border-2 border-black p-6 flex flex-row items-start justify-between'>
                        <div className='flex flex-col gap-3'>
                            <div className='md:text-3xl text-xl font-bold'>{job.title}</div>
                            <div className='mb-6'>{job.description}</div>
                            <div className='flex flex-row gap-2 items-start justify-start w-auto'>
                                <div className='px-2 py-1 rounded-full text-sm font-normal border-2 border-black flex flex-row gap-1 items-center justify-center'>
                                    <MapPin className='w-5 h-5' />
                                    <span>{job.location}</span>
                                </div>
                                <div className='px-2 py-1 rounded-full text-sm font-normal border-2 border-black flex flex-row gap-1 items-center justify-center'>
                                    <Clock3 className='w-5 h-5' />
                                    <span>{job.type}</span>
                                </div>
                            </div>
                        </div>
                        <Link href={job.link} className='flex flex-row gap-1 items-center justify-center font-semibold cursor-pointer'>
                            <span className='hover:underline'>Apply Now</span>
                            <ArrowTopRightIcon className='w-5 h-5' />
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CardJobs