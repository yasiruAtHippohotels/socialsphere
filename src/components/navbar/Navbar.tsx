import React from "react";
import Links from "./links/Links";

function Navbar() {
  return (
    <div className="flex justify-between p-5 bg-slate-400 font-semibold text-white">
      <div className="">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
