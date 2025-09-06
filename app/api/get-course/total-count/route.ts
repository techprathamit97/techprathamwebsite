import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/utils/mongodb';
import course from '@/models/course';

export async function GET(request: NextRequest) {
    try {
        await connectMongo();

        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        
        if (!id || id !== process.env.ROUTE_ID) {
            return NextResponse.json({ message: "Routes are only accessible by the organization." }, { status: 400 });
        }

        const totalCourses = await course.countDocuments();

        return NextResponse.json({ count: totalCourses }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}