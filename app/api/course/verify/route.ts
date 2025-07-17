import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/mongodb';
import Enrolled from '@/models/enrolled';

export async function PUT(request: NextRequest) {
    try {
        await connect();

        const body = await request.json();
        const { email, course_link, ...updateData } = body;

        // Validate required fields for finding the enrollment
        if (!email || !course_link) {
            return NextResponse.json({ 
                message: 'Email and course_link are required to identify the enrollment' 
            }, { status: 400 });
        }

        // Find and update the enrollment
        const updatedEnrollment = await Enrolled.findOneAndUpdate(
            { email: email, course_link: course_link },
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedEnrollment) {
            return NextResponse.json({ 
                message: 'Enrollment not found for the provided email and course_link' 
            }, { status: 404 });
        }

        return NextResponse.json(updatedEnrollment, { status: 200 });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// Optional: Add a PATCH method for partial updates
export async function PATCH(request: NextRequest) {
    try {
        await connect();

        const body = await request.json();
        const { _id, ...updateData } = body;

        // Validate required field for finding the enrollment by ID
        if (!_id) {
            return NextResponse.json({ 
                message: 'Enrollment ID (_id) is required' 
            }, { status: 400 });
        }

        // Find and update the enrollment by ID
        const updatedEnrollment = await Enrolled.findByIdAndUpdate(
            _id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedEnrollment) {
            return NextResponse.json({ 
                message: 'Enrollment not found for the provided ID' 
            }, { status: 404 });
        }

        return NextResponse.json(updatedEnrollment, { status: 200 });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}