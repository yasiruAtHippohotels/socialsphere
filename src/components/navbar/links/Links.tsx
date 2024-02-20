"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import NavLink from "./navLink/nav-link";
import { link } from "fs";
import styles from "./links.module.css";
import Image from "next/image";

function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className="container">
      <div className="flex flex-row gap-10">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <Fragment>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logout">Logout</button>
          </Fragment>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/assets/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
