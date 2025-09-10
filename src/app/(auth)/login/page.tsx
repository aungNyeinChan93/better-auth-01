import LoginForm from "@/components/features/auth/LoginForm";
import { getAuthSession } from "@/features/auth/auth-helper";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const session = await getAuthSession();

  if (session) {
    return redirect("/", RedirectType.replace);
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
