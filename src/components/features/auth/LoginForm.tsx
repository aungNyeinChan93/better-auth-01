"use client";

import { loginAction } from "@/features/auth/auth-actions";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, undefined);

  if (state?.success) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Login Form</h1>

        {/* Email + Password */}
        <form className="space-y-4" action={formAction}>
          {!state?.success && (
            <p
              className={`${
                state?.error ? "bg-red-50" : ""
              } text-red-600 p-2 text-base`}
            >
              {state?.error}
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
