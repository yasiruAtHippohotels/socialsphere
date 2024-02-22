import React from "react";

const getData = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return await res.json();
};

interface UserIdProps {
  userId: string;
}

const PostUser: React.FC<UserIdProps> = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <div>
      <span>Author:</span>
      <span>{user.username}</span>
    </div>
  );
};

export default PostUser;
