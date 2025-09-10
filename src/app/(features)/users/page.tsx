import { getAllUsers } from "@/features/users/users-helper";
import React from "react";

const UsersPage = async () => {
  const users = await getAllUsers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 rounded-xl bg-green-50 mt-3">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
