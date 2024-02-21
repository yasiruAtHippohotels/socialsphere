import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return await res.json();
};

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div>
      <div>
        <Image
          src="https://images.pexels.com/photos/13636589/pexels-photo-13636589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width={600}
          height={600}
          alt=""
        />
      </div>

      <div>
        <h1 className="">
          {post.title}
          <span className="text-xl">({post.id})</span>
        </h1>
        <div>
          <div>
            <span>Published</span>
            <span>2/2/2024</span>
          </div>
        </div>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
