"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const NavigationTestPage = () => {
    
  //CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname: string = usePathname();
  const searchParams: URLSearchParams = useSearchParams();
  const q: string | null = searchParams.get("q");

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>write and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
