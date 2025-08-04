import type { AppProps } from 'next/app';
import '../app/globals.css';
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/userContext';
import ToolTip from '@/components/common/ToolTip/ToolTip';
import ReachForm from '@/components/common/ReachForm/ReachForm';

export const metadata: Metadata = {
    title: "India's No.1 Best IT Training Institute in India | Corporate Learning",
    description: "Corporate Learning is the best IT Training Institute in India for Industrial Training, provide training in 180+ courses as IT, Software, SAP, Data science & AWS.",
    keywords: "India's No.1 IT Training Institute,IT training institute in delhi with placement, IT training institute near me, IT training institute in india, best IT training institute in delhi, IT training institute in ghaziabad, IT training institute in noida, IT training institute in gurgaon, Professional courses training online, Professional courses training near me, professional development training courses, IT training institute India",
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <UserProvider>
                <Component {...pageProps} />
                <ReachForm />
                <ToolTip />
            </UserProvider>
        </SessionProvider>
    )
}

export default MyApp
