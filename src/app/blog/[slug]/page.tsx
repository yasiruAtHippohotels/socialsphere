import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

function SinglePostPage() {
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
        <h1>Title</h1>
        <div>
          <div>
            <span>Published</span>
            <span>2/2/2024</span>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          repudiandae, commodi modi voluptate vel facilis eveniet id neque
          inventore ab dolor beatae officiis praesentium quos reiciendis ad
          libero ipsum tenetur!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
