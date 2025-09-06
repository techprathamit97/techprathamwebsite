import React from 'react';
import Head from 'next/head';

import IndexView from '@/src/index/views/IndexView';
import { IndexController } from '@/src/index/controller/IndexController';
import type { NextPage } from 'next';

interface IndexPageProps {
    routeId: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ routeId }) => (
    <div>
        <IndexController routeId={routeId}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>India's No.1 Best IT Training Institute in India | Corporate Learning</title>
                <meta name="description" content="Corporate Learning is the best IT Training Institute in India for Industrial Training, provide training in 180+ courses as IT, Software, SAP, Data science & AWS." />
                <meta name="keywords" content="India's No.1 IT Training Institute,IT training institute in delhi with placement, IT training institute near me, IT training institute in india, best IT training institute in delhi, IT training institute in ghaziabad, IT training institute in noida, IT training institute in gurgaon, Professional courses training online, Professional courses training near me, professional development training courses, IT training institute India" />
                <meta name="author" content="the-bipu" />

                <meta property="og:title" content="India's No.1 Best IT Training Institute in India | Corporate Learning" />
                <meta property="og:description" content="Corporate Learning is the best IT Training Institute in India for Industrial Training, provide training in 180+ courses as IT, Software, SAP, Data science & AWS." />
                <meta property="og:image" content="/navbar/techpratham.svg" />
                <meta property="og:url" content="https://www.techpratham.com/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="India's No.1 Best IT Training Institute in India | Corporate Learning" />
                <meta name="twitter:description" content="Corporate Learning is the best IT Training Institute in India for Industrial Training, provide training in 180+ courses as IT, Software, SAP, Data science & AWS." />
                <meta name="twitter:image" content="/navbar/techpratham.svg" />
            </Head>

            <IndexView routeId={routeId} />
        </IndexController>
    </div>
);

export default IndexPage;

export async function getServerSideProps() {
    const routeId = process.env.ROUTE_ID;

    if (!routeId) {
        throw new Error('ROUTE_ID is not configured');
    }

    return {
        props: {
            routeId,
        },
    };
}