import React from 'react';
import Head from 'next/head';

import IndexView from '@/src/index/views/IndexView';
import { IndexController } from '@/src/index/controller/IndexController';
import type { NextPage } from 'next';

const IndexPage: NextPage = (props) => (
    <div>
        <IndexController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>TechPratham</title>
            </Head>

            <IndexView />
        </IndexController>
    </div>
);

export default IndexPage;