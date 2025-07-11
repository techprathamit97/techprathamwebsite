import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/mongodb';
import course from '@/models/course';

export async function POST(request: NextRequest) {
    try {
        await connect();

        const body = await request.json();
        
        const courseItems = Array.isArray(body) 
            ? await course.insertMany(body)
            : await course.create(body);

        return NextResponse.json(courseItems, { status: 201 });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}