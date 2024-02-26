import React from "react";
import styles from "./post-card.module.css";
import Link from "next/link";
import Image from "next/image";

interface Post {
  userId: number;
  id: number;
  title: string;
  desc: string;
  img: string;
  slug: string;
}

interface PostCardProps {
  post: Post; // Expect a Post object as a prop
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <div>
        <span>{post.id}</span>
      </div>
      <div>
        {post.img && (
          <div>
            <Image
              src={post.img}
              alt={post.title}
              className={styles.image}
              width={400}
              height={300}
            />
          </div>
        )}
        <p>
          {/* By <span className="text-[#9B9B9B]">{post.author}</span> published in{" "}
          <span className="text-[#9B9B9B]">{post.date}</span> */}
        </p>
        <h1 className={styles.headline}>{post.title}</h1>
        <p>{post.desc}</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
