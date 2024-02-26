import React from "react";
import { addPost } from "@/lib/action";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost} className="flex justify-center p-5">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button className=" p-2 bg-orange-700 rounded-lg">Create</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
