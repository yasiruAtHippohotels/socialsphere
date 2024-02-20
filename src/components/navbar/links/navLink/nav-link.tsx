"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

interface LinkItem {
  title: string;
  path: string;
}

interface NavLinkProps {
  item: LinkItem;
}

function NavLink({ item }: NavLinkProps) {
  const pathName: string = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
