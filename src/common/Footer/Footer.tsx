import { Separator } from '@/components/ui/separator';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center pb-8 bg-[#212529] text-white'>
      <div className='md:w-10/12 w-11/12 flex flex-col py-10 gap-14'>

        <div className='w-full flex flex-col'>
          <div className='text-xl font-semibold mb-1'>Follow Us!</div>
          <Separator className='mb-4 w-80' />
          <div className='flex flex-row gap-3'>
            <Link href='https://www.facebook.com/profile.php?id=61573041693401' target="_blank" className='w-10 h-10 rounded-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex items-center justify-center'>
              <FaFacebook className='w-6 h-6' />
            </Link>
            <Link href='https://www.linkedin.com/company/techpratham/' target="_blank" className='w-10 h-10 rounded-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex items-center justify-center'>
              <FaLinkedin className='w-6 h-6' />
            </Link>
            <Link href='https://www.youtube.com/@TechPratham_official' target="_blank" className='w-10 h-10 rounded-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex items-center justify-center'>
              <FaYoutube className='w-6 h-6' />
            </Link>
            <Link href='https://www.instagram.com/techprathamofficial/' target="_blank" className='w-10 h-10 rounded-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex items-center justify-center'>
              <FaInstagram className='w-6 h-6' />
            </Link>
            <Link href='/' className='w-10 h-10 rounded-full bg-gradient-to-tl from-[#600A0E] to-[#C6151D] text-white flex items-center justify-center'>
              <FaTwitter className='w-6 h-6' />
            </Link>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2'>
          <Link href={'/'} aria-label='Techpratham'>
            <Image src={'/navbar/techpratham.svg'} alt='' width={100} height={50} className='w-56 h-auto' />
          </Link>
          <div className='text-sm font-light'>At Tech Pratham, we are a forward thinking IT education dedicated to empowering individuals with the skills they need to thrive in the digital age. Our mission is to bridge the gap between traditional learning and the evolving demands of the tech industry by offering innovative, industry relevant training programs. What sets us apart is our commitment to creating a learning environment that is not only accessible but also engaging and impactful. With flexible schedules, expert mentorship, and real-world project experience, we ensure every student is equipped to achieve their career goals.</div>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>CIN:</div>
            <div className='text-sm font-light'>U62013UP2025PTC223378</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>GST:</div>
            <div className='text-sm font-light'>09AALCT8794N1Z2</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Registered Office:</div>
            <div className='text-sm font-light'>G-31, 1st Floor Sector-3, Noida 201301</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Noida Office:</div>
            <div className='text-sm font-light'>C-2, Sector-1, Noida, Uttar Pradesh - 201301</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Hyderabad Office:</div>
            <div className='text-sm font-light'>LVS Arcade, 71, Hitech, Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad</div>
          </div>
        </div>

        <div className='w-full flex flex-row flex-wrap gap-10 items-start justify-between'>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Certification Courses</div>
            <div className='flex flex-col capitalize text-sm font-light gap-1'>
              <div>SAP TRAINING INSTITUTE IN INDIA</div>
              <div>Workday Certification Course</div>
              <div>Cloud Computing Certification Course</div>
              <div>Microsoft Power BI Training course</div>
              <div>Data Science Certification Course</div>
              <div>JAVA Certification Course</div>
              <div>Sp3D Mechanical Course</div>
              <div>Generative AI Training</div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Trending Certification Courses</div>
            <div className='flex flex-col capitalize text-sm font-light gap-1'>
              <div>Agile Testing Training</div>
              <div>Appium Certification Training</div>
              <div>AWS Certification Training</div>
              <div>JMeter certification Training</div>
              <div>PROFESSIONAL PROGRAMS</div>
              <div>Online IT Courses India - SAP FICO Training at Tech Pratham</div>
              <div>ServiceNow Certification Training</div>
              <div>Software Testing using Selenium Training</div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Company</div>
            <div className='flex flex-col capitalize text-sm font-light gap-1'>
              <Link href="/about-us">About Us</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/job-openings">Careers</Link>
              <Link href="/corporate-training">Corporate Training</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <Link href="/refund-cancellation-policy">Refund/Cancellation Policy</Link>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-base uppercase font-normal'>Student Zone</div>
            <div className='flex flex-col capitalize text-sm font-light gap-1'>
              <Link href='/job-openings'>Job Openings</Link>
              <Link href='/reviews'>Reviews</Link>
              <Link href='/admission'>Admission</Link>
              <Link href='/'>Placement</Link>
              <Link href="/">FAQ's</Link>
              <Link href='/payment'>Payment</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer