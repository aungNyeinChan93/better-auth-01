import { auth } from '@/lib/auth'
import { hash, genSalt } from 'bcrypt-ts'
import { headers } from 'next/headers'


export async function hashPassword(password: string, salt: number = 10) {
    return await hash(password as string, await genSalt(salt || 10))
}


export async function getAuthSession(): Promise<typeof auth.$Infer.Session | null> {
    try {
        const session = await auth.api?.getSession({ headers: await headers() })
        return session;
    } catch (error) {
        console.error(error instanceof Error ? error?.message : null)
        return null;
    }
}