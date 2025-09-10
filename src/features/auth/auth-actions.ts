'use server'

import { auth } from "@/lib/auth";
import { success } from "better-auth";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

// register 
export async function registerAction(initialState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!name || !email || !password) {
        return { success: false, error: "Some fileds are required" }
    }

    try {
        const { user } = await auth.api.signUpEmail({
            body: { email, name, password, callbackURL: '/' }
        });

        if (!user) {
            return { success: false, error: 'Some Fields Are Required!' }
        }

        if (user) {
            return { success: true, message: `${user?.name} - register success` }
        }

    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error?.message }
        }
        return { success: false, error: 'unknow error!' }
    }
};

// login
export const loginAction = async (initailState: any, formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    if (!email || !password) {
        return { success: false, error: "Some fileds are required" }
    }
    try {
        const signInUser = await auth.api.signInEmail({
            body: { email, password, callbackURL: '/' },
            headers: await headers()
        })
        return { success: true, message: signInUser?.user.name };

    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error?.message }
        }
    }
}

// logout
export const logoutAction = async () => {
    const { success } = await auth.api.signOut({ headers: await headers() })
    if (!success) {
        return;
    }
    return redirect('/login', RedirectType.replace);
}

// login with github
export const loginWithSocial = async (provider: 'github' | 'google') => {
    const { url } = await auth.api.signInSocial({
        body: {
            provider,
            callbackURL: '/'
        }
    });
    if (!url) {
        return redirect('/register', RedirectType.push)
    }
    return redirect(url, RedirectType.replace)
}