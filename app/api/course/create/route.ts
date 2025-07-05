import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/mongodb';
import course from '@/models/course';

export async function POST(request: NextRequest) {
    try {
        await connect();

        const body = await request.json();
        const courseItem = await course.create(body);

        return NextResponse.json(courseItem, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}