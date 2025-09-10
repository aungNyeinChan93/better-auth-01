import { getAuthSession } from "@/features/auth/auth-helper";
import { getUserDetailByEmail } from "@/features/users/users-helper";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const AdminPage = async () => {
  const session = await getAuthSession();

  const user = session && (await getUserDetailByEmail(session?.user?.email));
  const role = user?.role;

  if (role !== "admin" || !session) {
    return redirect("/", RedirectType.replace);
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste
          aspernatur iure nesciunt, vero omnis! Mollitia fuga ullam debitis quo
          qui cumque, ipsam distinctio ducimus tempore est doloribus laborum
          accusantium.
        </p>
      </main>
    </React.Fragment>
  );
};

export default AdminPage;
