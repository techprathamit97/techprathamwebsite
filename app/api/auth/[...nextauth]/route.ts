import NextAuth from "next-auth";

import { Account, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import connect from "@/utils/mongodb";
import { Admin } from '@/models/admin.js';

const authOptions: any = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                await connect();
                try {
                    const user = await Admin.findOne({ email: credentials.email });
                    if (!user) {
                        throw new Error("USER_NOT_FOUND");
                    }
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (!isPasswordCorrect) {
                        throw new Error("INVALID_PASSWORD");
                    }
                    return user;
                } catch (err: any) {
                    throw new Error(err.message || "AUTH_ERROR");
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    callbacks: {
        async signIn({ user, account }: { user: AuthUser; account: Account }) {
            if (account?.provider == "credentials") {
                return true;
            }
            if (account?.provider == "google") {
                await connect();
                try {
                    const existingUser = await Admin.findOne({ email: user.email });
                    if (!existingUser) {
                        throw new Error("USER_NOT_FOUND");
                    }
                    return true;
                } catch (err: any) {
                    throw new Error(err.message || "GOOGLE_SIGNIN_ERROR");
                }
            }
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
