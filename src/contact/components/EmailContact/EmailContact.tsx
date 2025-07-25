import { ArrowTopRightIcon, EnvelopeClosedIcon, ChatBubbleIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import './emailContact.css';

const EmailContact = () => {
    const contactOptions = [
        {
            title: "General Inquiries",
            description: "Get in touch with our team for general questions, partnerships, or collaboration opportunities.",
            email: "hello@company.com",
            icon: <EnvelopeClosedIcon className="w-5 h-5 text-blue-600" />
        },
        {
            title: "Customer Support",
            description: "Need help with our products or services? Our support team is here to assist you.",
            email: "support@company.com",
            icon: <ChatBubbleIcon className="w-5 h-5 text-green-600" />
        },
        {
            title: "Technical Help",
            description: "Experiencing technical issues? Our technical team will help resolve your problems quickly.",
            email: "tech@company.com",
            icon: <QuestionMarkCircledIcon className="w-5 h-5 text-purple-600" />
        }
    ];

    const handleEmailClick = (email: string) => {
        window.open(`mailto:${email}`, '_blank');
    };

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 px-4 bg-white'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-start justify-center mb-8'>
                <div className='text-2xl font-semibold border-b-2 border-b-[#C6151D] text-[#C6151D]'>Contact Us</div>
            </div>

            <div className='md:w-10/12 w-11/12 h-auto flex flex-col md:flex-row items-stretch justify-center gap-6'>
                {contactOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleEmailClick(option.email)}
                        className="flex-1 group py-8 px-6 cursor-pointer border border-gray-200 rounded-xl bg-white text-black hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 cardShadow"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {option.icon}
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">
                                    {option.title}
                                </h3>
                            </div>
                            <ArrowTopRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 min-h-[3rem]">
                            {option.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                            <EnvelopeClosedIcon className="w-4 h-4" />
                            <span>{option.email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmailContact;