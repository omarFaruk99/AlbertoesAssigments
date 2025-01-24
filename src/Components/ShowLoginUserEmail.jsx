import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ShowLoginUserEmail = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <p className="text-blue-500 flex justify-center">{user?.email}</p>
    </div>
  );
};

export default ShowLoginUserEmail;
