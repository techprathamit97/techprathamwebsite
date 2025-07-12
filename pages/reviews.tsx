import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import ReviewsView from '@/src/reviews/views/ReviewsView';
import { ReviewsController } from '@/src/reviews/controller/ReviewsController';

const ReviewsPage: NextPage = (props) => (
  <div>
    <ReviewsController {...props}>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
        <title>Reviews | TechPratham - Student Feedback & Testimonials</title>
        <meta name="description" content="Read authentic reviews and testimonials from students who have completed IT training programs at TechPratham." />
        <meta name="keywords" content="TechPratham Reviews, Student Testimonials, IT Training Feedback, TechPratham Success Stories, Course Reviews" />
        <meta name="author" content="the-bipu" />

        <meta property="og:title" content="Reviews | TechPratham - Student Feedback & Testimonials" />
        <meta property="og:description" content="Explore what our students have to say about their learning experience at TechPratham." />
        <meta property="og:image" content="/navbar/techpratham.svg" />
        <meta property="og:url" content="https://www.techpratham.com/reviews" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reviews | TechPratham - Student Feedback & Testimonials" />
        <meta name="twitter:description" content="Discover real student experiences and success stories from TechPratham’s IT training programs." />
        <meta name="twitter:image" content="/navbar/techpratham.svg" />
      </Head>

      <ReviewsView />
    </ReviewsController>
  </div>
);

export default ReviewsPage;