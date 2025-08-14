import { NextResponse } from 'next/server';
import { connectMongo } from '@/utils/mongodb';
import course from '@/models/course';

export async function GET() {
    try {
        await connectMongo();
        const courseItem = await course.find();

        return NextResponse.json(courseItem, { status: 200 });
    } catch (error: any) {
        console.error('Server Error:', error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}