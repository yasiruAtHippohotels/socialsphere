import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

function ContactPage() {
  return (
    <div>
      <div>
        <Image src="/assets/contact.png" width={500} height={500} alt="" />
      </div>
      <div>
        {/* <HydrationTestNoSSR/> */}
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
