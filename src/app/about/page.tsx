import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

function AboutPage() {
  console.log("lets check where its works");

  return (
    <div>
      <div>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div>
          <div>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/about.png"
          alt="About Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default AboutPage;
