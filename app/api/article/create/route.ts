import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { Article } from '@/models/article.js';

export async function POST(request: NextRequest) {
    try {
        await connectMongo();

        const body = await request.json();
        const response = await Article.create(body);

        return NextResponse.json(response, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}