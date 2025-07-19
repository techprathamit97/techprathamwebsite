import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/mongodb';
import Enrolled from '@/models/enrolled';

export async function POST(request: NextRequest) {
    try {
        await connect();

        const body = await request.json();
        
        const existingEnrollment = await Enrolled.findOne({
            email: body.email,
            course_link: body.course_link
        });

        if (existingEnrollment) {
            return NextResponse.json(
                { 
                    message: 'User is already enrolled in this course',
                    error: 'ALREADY_ENROLLED'
                }, 
                { status: 409 } // 409 Conflict status code
            );
        }

        const courseEnrolled = await Enrolled.create(body);

        return NextResponse.json(courseEnrolled, { status: 201 });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}