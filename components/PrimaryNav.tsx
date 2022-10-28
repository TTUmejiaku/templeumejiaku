import Link from "next/link";
import React from "react";

type Props = {};

function PrimaryNav({}: Props) {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="bg-white10 rounded-[60px] space-x-2 flex items-center justify-between pri-nav ">
          <Link href="/">
            <span className="nav-btn ">Projects</span>
          </Link>
          <Link href="/about">
            <span className="nav-btn ">About</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNav;
