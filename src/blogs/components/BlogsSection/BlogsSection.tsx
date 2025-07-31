import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

interface Article {
    slug: string;
    title: string;
    description: string;
    postedBy: string;
    content: string;
    createdAt: string;
}

const BlogSection: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/article/fetch`);

                if (!res.ok) {
                    throw new Error('Failed to fetch articles');
                }

                const data = await res.json();
                setArticles(data);
            } catch (error: any) {
                console.error('Error fetching articles:', error);
                setError(error.message || 'Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const LoadingSkeleton = () => (
        <div className="w-full min-h-44 bg-white p-4 rounded cardShadow">
            <Skeleton className='w-40 h-6 rounded shadow-none px-4 mb-4' />
            <Skeleton className='w-64 h-7 rounded shadow-none px-4 mb-2' />
            <Skeleton className='w-28 h-5 rounded shadow-none px-4 mb-4' />
            <Separator className='h-[0.5px] w-full' />
            <Skeleton className='w-full h-44 rounded shadow-none px-4 my-4' />
            <Skeleton className='w-48 h-7 rounded shadow-none px-4 mt-10 mb-2' />
            <div className='w-full h-auto flex flex-row justify-between'>
                <div className='flex flex-row gap-3'>
                    <Skeleton className='w-9 h-9 rounded-full' />
                    <Skeleton className='w-9 h-9 rounded-full' />
                    <Skeleton className='w-9 h-9 rounded-full' />
                </div>
                <Skeleton className='w-28 h-8' />
            </div>
        </div>
    );

    const EmptyState = () => (
        <div className="w-full min-h-32 bg-white p-6 rounded cardShadow flex flex-col items-center justify-center">
            <p className="text-gray-500 text-lg mb-2">No articles available</p>
            <p className="text-gray-400 text-sm">Check back later for new content</p>
        </div>
    );

    const ErrorState = () => (
        <div className="w-full min-h-32 bg-white p-6 rounded cardShadow flex flex-col items-center justify-center">
            <p className="text-red-500 text-lg mb-2">Error loading articles</p>
            <p className="text-gray-400 text-sm">{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-[#1a1a1a] hover:bg-[#292929] text-white rounded-sm px-4 py-2 text-sm"
            >
                Retry
            </button>
        </div>
    );

    return (
        <div className='md:w-10/12 w-full flex flex-col items-start justify-start gap-1 py-10'>
            <div className='w-full flex flex-col items-start justify-center gap-6'>
                {loading ? (
                    <>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </>
                ) : error ? (
                    <ErrorState />
                ) : articles?.length > 0 ? (
                    articles.map((item: Article, index: number) => (
                        <div key={index} className="w-full h-auto bg-white p-4 rounded border shadow">
                            <div>
                                <Badge className='rounded shadow-none px-4 font-medium tracking-wider uppercase text-sm'>
                                    Article
                                </Badge>
                            </div>
                            <div className='text-xl font-semibold mt-2'>{item.title}</div>
                            <div className='text-sm text-gray-600'>
                                {new Date(item.createdAt).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <Separator className='h-[0.5px] my-2' />
                            <div className='flex flex-row justify-between items-center w-full mt-8'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='text-sm font-medium capitalize text-gray-500 mb-2'>
                                        Posted By: <br />
                                        <span className='text-gray-900 text-base font-semibold'>
                                            {item.postedBy}
                                        </span>
                                    </div>
                                    <div className='flex flex-row w-full justify-between'>
                                        <Link
                                            href={`/blogs/${item.slug}`}
                                            className='bg-[#1a1a1a] transition-all hover:bg-[#292929] text-white rounded-sm px-3 h-8 font-normal flex items-center justify-center'
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    );
};

export default BlogSection;