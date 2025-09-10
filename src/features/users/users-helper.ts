
import prisma from '@/lib/prisma-client'

export async function getAllUsers() {
    const users = await prisma?.user.findMany({
        include: {
            accounts: true,
            sessions: true
        }
    })
    return users;
}