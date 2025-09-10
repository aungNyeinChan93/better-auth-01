import { getAuthSession } from "@/features/auth/auth-helper";
import React from "react";

const UserInforPage = async () => {
  const session = await getAuthSession();

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 text-slate-700 p-3 mt-4 rounded-lg">
        <h3>User Information</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UserInforPage;
