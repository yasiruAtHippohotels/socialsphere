import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/post-user/post-user";
import { getPost } from "@/lib/data";

//with an api
// const getData = async (slug: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return await res.json();
// };

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  // WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITH OUT API
  const post = await getPost(slug);
  return (
    <div>
      <div>
        <Image src={post.img} width={600} height={600} alt="" />

        {post && (
          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        )}
      </div>

      <div>
        <h1 className="">
          {post?.title}
          <span className="text-xl">({post?.id})</span>
        </h1>
        <div>
          <div>
            <span>Published</span>
            {/* <span>{post.createdAt.toString().slice(4,16)}</span> */}
          </div>
        </div>
        <div>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
