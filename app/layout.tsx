import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { getServerSession } from "next-auth";
import { UserProvider } from '@/context/userContext.js';
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "India's No.1 Best IT Training Institute in India | Corporate Learning",
  description: "Corporate Learning is the best IT Training Institute in India for Industrial Training, provide training in 180+ courses as IT, Software, SAP, Data science & AWS.",
  keywords: "India's No.1 IT Training Institute,IT training institute in delhi with placement, IT training institute near me, IT training institute in india, best IT training institute in delhi, IT training institute in ghaziabad, IT training institute in noida, IT training institute in gurgaon, Professional courses training online, Professional courses training near me, professional development training courses, IT training institute India",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`antialiased`}
        >

          <UserProvider>
            {children}
          </UserProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
