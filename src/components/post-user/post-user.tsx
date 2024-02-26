import React from "react";
import { getUser } from "@/lib/data";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId: string) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return await res.json();
// };

interface UserIdProps {
  userId: string;
}

const PostUser: React.FC<UserIdProps> = async ({ userId }) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div>
      {
        <Image
          src={user.img ? user.img : "/assets/noavatar.png"}
          width={600}
          height={600}
          alt=""
        />
      }
      <div>
        <span>Author:</span>
        <span>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
