import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/post-card/post-card";

function BlogPage() {
  return (
    <div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default BlogPage;
