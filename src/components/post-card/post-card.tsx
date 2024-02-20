import React from "react";
import styles from "./post-card.module.css";
import Link from "next/link";
import Image from "next/image";

function PostCard() {
  return (
    <div>
      <div>
        <span>01.01.2024</span>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          alt="artical image"
          className={styles.image}
        />
        <p>
          By <span className="text-[#9B9B9B]">TOMAS LAURINAVICIUS</span>{" "}
          published in <span className="text-[#9B9B9B]">05/12/2023</span>
        </p>
        <h1 className={styles.headline}>
          How to Migrate from Wix to WordPress (Complete Guide)
        </h1>
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
