import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/utils/mongodb';
import { Category } from '@/models/category';

export async function POST(request: NextRequest) {
    try {
        await connectMongo();

        const body = await request.json();
        const response = await Category.create(body);

        return NextResponse.json(response, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}