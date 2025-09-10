import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from '@/lib/prisma-client'
import { nextCookies } from 'better-auth/next-js'
import { createAuthClient } from "better-auth/react"


// auth
export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    emailAndPassword: {
        enabled: true,
        // autoSignIn: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRECT as string
        },
        google: {
            clientId: "",
            clientSecret: ""
        }
    },
    plugins: [nextCookies()]
});

// auth-client
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})

// 
export const { signIn, signUp, useSession } = createAuthClient();