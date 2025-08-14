import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_CODE);
const admin = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, email, phone, amount, course, country, state, city, pinCode } = formData;

    await resend.emails.send({
      from: "TechPratham <onboarding@resend.dev>",
      to: [admin],
      subject: "💳 New Fee Payment Request - TechPratham",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Request</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #334155;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">💳 Payment Request</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">TechPratham Fee Payment</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Student Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                  👤 Student Information
                </h2>
                <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border-left: 4px solid #3b82f6;">
                  <div style="margin-bottom: 12px;">
                    <span style="color: #64748b; font-weight: 500; display: inline-block; width: 80px;">Name:</span>
                    <span style="color: #1e293b; font-weight: 600;">${fullName}</span>
                  </div>
                  <div style="margin-bottom: 12px;">
                    <span style="color: #64748b; font-weight: 500; display: inline-block; width: 80px;">Email:</span>
                    <span style="color: #3b82f6; font-weight: 500;">${email}</span>
                  </div>
                  <div>
                    <span style="color: #64748b; font-weight: 500; display: inline-block; width: 80px;">Phone:</span>
                    <span style="color: #1e293b; font-weight: 600;">${phone}</span>
                  </div>
                </div>
              </div>

              <!-- Course Details -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                  📚 Course Details
                </h2>
                <div style="background: #f0fdf4; border-radius: 12px; padding: 20px; border-left: 4px solid #22c55e;">
                  <div style="margin-bottom: 12px;">
                    <span style="color: #64748b; font-weight: 500; display: inline-block; width: 80px;">Course:</span>
                    <span style="color: #1e293b; font-weight: 600;">${course}</span>
                  </div>
                  <div>
                    <span style="color: #64748b; font-weight: 500; display: inline-block; width: 80px;">Amount:</span>
                    <span style="color: #059669; font-weight: 700; font-size: 18px;">₹${amount}</span>
                  </div>
                </div>
              </div>

              <!-- Address Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                  📍 Address Information
                </h2>
                <div style="background: #fef3c7; border-radius: 12px; padding: 20px; border-left: 4px solid #f59e0b;">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div>
                      <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 4px;">Country:</span>
                      <span style="color: #1e293b; font-weight: 600;">${country}</span>
                    </div>
                    <div>
                      <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 4px;">State:</span>
                      <span style="color: #1e293b; font-weight: 600;">${state}</span>
                    </div>
                    <div>
                      <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 4px;">City:</span>
                      <span style="color: #1e293b; font-weight: 600;">${city}</span>
                    </div>
                    <div>
                      <span style="color: #64748b; font-weight: 500; display: block; margin-bottom: 4px;">Pin Code:</span>
                      <span style="color: #1e293b; font-weight: 600;">${pinCode}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Required -->
              <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); border-radius: 12px; padding: 20px; text-align: center; border-left: 4px solid #ef4444;">
                <p style="color: #dc2626; font-weight: 600; margin: 0; font-size: 16px;">⚡ Action Required</p>
                <p style="color: #991b1b; margin: 8px 0 0 0; font-size: 14px;">Please process this payment request and contact the student for confirmation.</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0; font-size: 14px;">
                🤖 This is an automated email from TechPratham Fee Payment System
              </p>
              <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 12px;">
                Received on ${new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error processing payment form submission:", error);
    return NextResponse.json({ status: "error", message: "Failed to process payment request" }, { status: 500 });
  }
}