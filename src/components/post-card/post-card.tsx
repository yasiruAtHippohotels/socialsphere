import React from "react";
import styles from "./post-card.module.css";
import Link from "next/link";
import Image from "next/image";

function PostCard() {
  return (
    <div>
      <div>
        <div>
          <Image
            src="https://images.pexels.com/photos/19845816/pexels-photo-19845816/free-photo-of-aerial-view-of-a-river-with-snow-on-the-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <span>01.01.2024</span>
      </div>
      <div>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, itaque
          in voluptatum omnis possimus magnam distinctio, molestias quod
          eligendi sed illum accusantium dolore soluta nostrum expedita, cumque
          voluptas corporis praesentium!
        </p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
