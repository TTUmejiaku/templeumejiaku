import Link from "next/link";
import React from "react";

type Props = {};

function PrimaryNav({}: Props) {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="bg-white10 rounded-[60px] space-x-2 flex items-center justify-between pri-nav">
          <span className="nav-btn ">
            <Link href="/">Work</Link>
          </span>
          <span className="nav-btn ">
            <Link href="/about">About</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNav;
