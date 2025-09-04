import React, { useEffect, useRef, useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const ToolTip = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <React.Fragment>
            <div ref={menuRef} className="w-auto flex flex-col items-center justify-center">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full shadow border border-[#dddedd] p-2 bg-white text-black fixed bottom-10 left-10 z-[100] grid place-content-center cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                    {!isOpen ? (
                        <Image
                            src="/home/contact/call-us.png"
                            alt="call"
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Cross2Icon className="w-8 h-8" />
                    )}
                </div>

                <div
                    className={`w-auto flex flex-col gap-2 bottom-28 left-10 fixed z-[100] transition-all duration-300 ${isOpen
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-95 pointer-events-none"
                        }`}
                >
                    <Link
                        href="https://wa.me/8882178896"
                        className="w-full flex flex-row gap-2 items-center justify-center relative group"
                    >
                        <div className="w-16 h-16 rounded-full bg-white text-black shadow border border-[#dddedd] p-2 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/home/contact/whatsapp.png"
                                alt="whatsapp"
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="bg-black text-white px-2 py-1 rounded absolute left-20 w-auto text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Chat with us
                        </p>
                    </Link>

                    <Link
                        href="https://wa.me/8882178896"
                        className="w-full flex flex-row gap-2 items-center justify-center relative group"
                    >
                        <div className="w-16 h-16 rounded-full bg-white text-black shadow border border-[#dddedd] p-2 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/home/contact/call-us.png"
                                alt="call"
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="bg-black text-white px-2 py-1 rounded absolute left-20 w-auto text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Call us now
                        </p>
                    </Link>
                </div>
            </div>
            <div className='w-full h-11 bg-[#2d2d2d] fixed bottom-0 left-0 z-50 text-white font-normal flex items-center justify-center'>
                <div className='w-10/12 h-auto flex flex-row gap-4'>
                    <div className='flex flex-row gap-1'><FaWhatsapp className='text-xl text-green-500' /> <Link href='https://wa.me/8384036614'>+91-8384036614</Link></div> |
                    <div className='flex flex-row gap-1'><FaPhone className='text-lg' /> <Link href='tel:+918882178896'>+91-8882178896</Link></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ToolTip