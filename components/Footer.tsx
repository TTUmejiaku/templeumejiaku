import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    // Footer section
    <footer className="mt-8 md:mt-20 mb-5">
      <div className="container text-white40 text-center ">
        <p className="flex items-center justify-center">
          <span>&#169;</span> 2022 made with{" "}
          <FaHeart className="text-red-600 mx-1" />
          by TTUmejiaku
        </p>
      </div>
    </footer>
  );
}

export default Footer;
