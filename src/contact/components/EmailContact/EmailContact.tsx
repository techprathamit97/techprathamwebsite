import { ArrowTopRightIcon, EnvelopeClosedIcon, ChatBubbleIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import React from 'react';

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
        <div className='w-full h-auto flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 to-white'>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Get in Touch
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose the best way to reach us. We're here to help and answer any questions you might have.
                </p>
            </div>

            <div className='max-w-6xl w-full h-auto flex flex-col md:flex-row items-stretch justify-center gap-6'>
                {contactOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleEmailClick(option.email)}
                        className="flex-1 group py-8 px-6 cursor-pointer border border-gray-200 rounded-xl shadow-sm bg-white text-black hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
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

            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">
                    We typically respond within 24 hours during business days
                </p>
            </div>
        </div>
    );
};

export default EmailContact;