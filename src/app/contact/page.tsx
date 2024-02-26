// "use client";
import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydration-test";

// const HydrationTestNoSSR = dynamic(
//   () => import("@/components/hydration-test"),
//   {
//     ssr: false,
//   }
// );

export const metadata = {
  title: "Contect Page",
  description: "Contact description",
};

function ContactPage() {
  // const a = Math.random();
  // console.log(a);

  return (
    <div>
      <div>
        <Image src="/assets/contact.png" width={500} height={500} alt="" />
      </div>
      <div>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className="flex gap-2 flex-col items-center">
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
