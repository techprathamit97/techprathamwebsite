import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import CoursesView from '@/src/courses/views/CoursesView';
import { CoursesController } from '@/src/courses/controller/CoursesController';

interface CoursesPageProps {
    routeId: string;
}

const CoursesPage: NextPage<CoursesPageProps> = ({ routeId }) => (
    <div>
        <CoursesController routeId={routeId}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Courses | TechPratham - India's Leading IT Training Institute</title>
                <meta name="description" content="Explore a wide range of IT courses at TechPratham. Advance your career with industry-relevant training and expert-led classes in programming, data science, cloud, and more." />
                <meta name="keywords" content="TechPratham Courses, IT Training, Programming Courses, Data Science, Cloud Computing, Best IT Institute India, Online IT Courses" />
                <meta name="author" content="the-bipu" />

                <meta property="og:title" content="Courses | TechPratham - India's Leading IT Training Institute" />
                <meta property="og:description" content="Browse our comprehensive IT courses and boost your skills with TechPratham's expert-led training programs." />
                <meta property="og:image" content="/navbar/techpratham.svg" />
                <meta property="og:url" content="https://www.techpratham.com/courses" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Courses | TechPratham - India's Leading IT Training Institute" />
                <meta name="twitter:description" content="Advance your IT career with TechPratham's industry-focused courses and hands-on learning." />
                <meta name="twitter:image" content="/navbar/techpratham.svg" />
            </Head>

            <CoursesView routeId={routeId} />
        </CoursesController>
    </div>
);

export default CoursesPage;

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