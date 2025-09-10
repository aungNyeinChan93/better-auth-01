
import prisma from '@/lib/prisma-client'

export async function getAllUsers() {
    const users = await prisma?.user.findMany({
        include: {
            accounts: true,
            sessions: true
        }
    })
    return users;
};


export async function getUserDetailByEmail(email: string | undefined) {
    const user = await prisma.user.findUnique({
        where: { email: email as string },
    })
    return user;
}