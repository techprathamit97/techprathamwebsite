import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import SupportView from '@/src/support/views/SupportView';
import { SupportController } from '@/src/support/controller/SupportController';

const SupportPage: NextPage = (props) => (
    <div>
        <SupportController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Technical Support | TechPratham - Get Help with IT Training Solutions</title>
                <meta name="description" content="Get technical support from TechPratham for your IT training solutions. Contact our team for assistance, troubleshooting, or technical inquiries." />
                <meta name="keywords" content="TechPratham Technical Support, IT Training Help, Support Desk, TechPratham Assistance, Troubleshooting, IT Support" />
                <meta name="author" content="the-bipu" />

                <meta property="og:title" content="Technical Support | TechPratham - Get Help with IT Training Solutions" />
                <meta property="og:description" content="Need help with TechPratham's IT training? Our technical support team is here to assist you with any issues or questions." />
                <meta property="og:image" content="/navbar/techpratham.svg" />
                <meta property="og:url" content="https://www.techpratham.com/technical-support" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Technical Support | TechPratham - Get Help with IT Training Solutions" />
                <meta name="twitter:description" content="Contact TechPratham's technical support for IT training assistance, troubleshooting, or technical questions." />
                <meta name="twitter:image" content="/navbar/techpratham.svg" />
            </Head>

            <SupportView />
        </SupportController>
    </div>
);

export default SupportPage;