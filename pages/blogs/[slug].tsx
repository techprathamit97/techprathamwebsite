import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/src/common/Navbar/Navbar';
import Footer from '@/src/common/Footer/Footer';
import { CldImage } from 'next-cloudinary';

interface ArticleData {
    slug: string;
    title: string;
    image: string;
    description: string;
    postedBy: string;
    content: string;
    createdAt: string;
}

const ArticlePage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [articleData, setArticleData] = useState<ArticleData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug || typeof slug !== 'string') return;

        const fetchArticle = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`/api/article/slugs?slug=${slug}`);

                if (!res.ok) {
                    if (res.status === 404) {
                        setError('Article not found');
                    } else {
                        throw new Error('Failed to fetch article');
                    }
                    return;
                }

                const data: ArticleData = await res.json();
                setArticleData(data);
            } catch (error: any) {
                console.error('Error fetching article:', error);
                setError(error.message || 'Failed to fetch article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    const LoadingSkeleton = () => (
        <div className="flex w-full md:flex-row flex-col gap-6 pt-10 h-auto">
            <div className="flex flex-col md:w-10/12 w-full h-full">
                <Skeleton className="w-3/4 h-8 mb-4" />
                <Skeleton className="w-full h-6 mb-2" />
                <Skeleton className="w-2/3 h-6 mb-4" />
                <Skeleton className="w-40 h-5 mb-4" />
                <Separator className="h-[0.5px] my-4" />
                <div className="space-y-4">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-3/4 h-4" />
                    <Skeleton className="w-full h-32 mt-6" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                </div>
                <div className="mt-8">
                    <Skeleton className="w-32 h-6" />
                </div>
            </div>
            <div className="md:w-2/12 w-full">
                <Skeleton className="w-full h-64" />
            </div>
        </div>
    );

    const ErrorState = () => (
        <div className="flex flex-col items-center justify-center min-h-96 w-full">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border">
                <div className="text-red-500 text-lg font-semibold mb-2">
                    {error === 'Article not found' ? 'Article Not Found' : 'Error Loading Article'}
                </div>
                <p className="text-gray-600 mb-6">
                    {error === 'Article not found'
                        ? 'The article you are looking for does not exist or may have been removed.'
                        : 'We encountered an error while loading this article. Please try again.'
                    }
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        href="/articles"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Articles
                    </Link>
                    {error !== 'Article not found' && (
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors"
                        >
                            Retry
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

    // Generate dynamic meta tags
    const generateMetaTags = () => {
        if (!articleData) {
            return {
                title: 'Article | TechPratham',
                description: 'Read the latest tech articles and insights on TechPratham.',
                ogTitle: 'Article | TechPratham',
                ogDescription: 'Stay updated with the latest technology trends and insights.',
            };
        }

        return {
            title: `${articleData.title} | TechPratham`,
            description: articleData.description || 'Read the latest tech articles and insights on TechPratham.',
            ogTitle: `${articleData.title} | TechPratham`,
            ogDescription: articleData.description || 'Stay updated with the latest technology trends and insights.',
        };
    };

    const metaTags = generateMetaTags();

    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>{metaTags.title}</title>
                <meta name="description" content={metaTags.description} />
                <meta name="keywords" content="TechPratham, technology articles, tech insights, programming, web development, software engineering" />
                <meta name="author" content="TechPratham" />

                <meta property="og:title" content={metaTags.ogTitle} />
                <meta property="og:description" content={metaTags.ogDescription} />
                <meta property="og:image" content="/logo/og-techpratham.png" />
                <meta property="og:url" content={`https://www.techpratham.com/articles/${slug}`} />
                <meta property="og:type" content="article" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTags.ogTitle} />
                <meta name="twitter:description" content={metaTags.ogDescription} />
                <meta name="twitter:image" content="/logo/og-techpratham.png" />

                {articleData && (
                    <>
                        <meta property="article:author" content={articleData.postedBy} />
                        <meta property="article:published_time" content={articleData.createdAt} />
                    </>
                )}
            </Head>

            <Navbar />

            <div className="flex flex-col w-full min-h-screen items-center justify-center bg-gray-50">
                <main className="flex md:flex-row flex-col w-11/12 max-w-7xl min-h-screen items-start justify-start gap-10 my-10 mt-24">

                    {/* Back to Articles Button */}
                    <div className="w-full md:hidden block mb-4">
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Back to Articles
                        </Link>
                    </div>

                    {loading ? (
                        <LoadingSkeleton />
                    ) : error ? (
                        <ErrorState />
                    ) : articleData ? (
                        <div className="flex w-full md:flex-row flex-col gap-6 h-auto">
                            {/* Main Content */}
                            <div className="flex flex-col md:w-10/12 w-full h-full">
                                {/* Back button for desktop */}
                                <div className="hidden md:block mb-4">
                                    <Link
                                        href="/articles"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <ArrowLeft size={16} />
                                        Back to Articles
                                    </Link>
                                </div>

                                {/* Article Header */}
                                <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
                                    <CldImage src={articleData.image} alt="Profile image" width={384} height={384} className='w-full h-80 object-cover mb-10 border-4 border-white shadow' />

                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                        {articleData.title}
                                    </h1>

                                    {articleData.description && (
                                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                            {articleData.description}
                                        </p>
                                    )}

                                    {/* Article Meta */}
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>
                                                {new Date(articleData.createdAt).toLocaleString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={16} />
                                            <span>By {articleData.postedBy}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="bg-white rounded-lg p-6 shadow-sm border">
                                    <div
                                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                                        dangerouslySetInnerHTML={{ __html: articleData.content }}
                                    />
                                </div>

                                {/* Article Footer */}
                                <div className="bg-white rounded-lg p-6 shadow-sm border mt-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-600">
                                                <span className="font-medium">Written by:</span>
                                                <div className="text-gray-900 text-base font-semibold mt-1">
                                                    {articleData.postedBy}
                                                </div>
                                            </div>
                                            <Link
                                                href="/blogs"
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                                            >
                                                More Articles
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="md:w-2/12 w-full">
                                here content
                            </div>
                        </div>
                    ) : (
                        <ErrorState />
                    )}
                </main>
            </div>

            <Footer />
        </React.Fragment>
    );
};

export default ArticlePage;