import RegisterForm from "@/components/features/auth/RegisterForm";
import { getAuthSession } from "@/features/auth/auth-helper";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const RegisterPage = async () => {
  const session = await getAuthSession();

  if (session) {
    revalidatePath("/");
    return redirect("/", RedirectType.replace);
  }
  return (
    <React.Fragment>
      <main className=" w-full min-h-screen flex justify-center items-center">
        <RegisterForm />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
