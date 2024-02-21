import React, { FunctionComponent } from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/post-card/post-card";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return (await res.json()) as Post[];
};

const BlogPage: FunctionComponent = async () => {
  const posts = await getData();
  return (
    <div className={styles.blogPage}>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
