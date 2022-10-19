import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import profilePic from "../public/Assets/Images/TTUmejiaku-with-white-border.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";

type Props = {};

function Header({}: Props) {
  return (
    <header className="mt-6 lg:mt-9 ">
      <div className="container text-center">
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
          {/* Image */}
          <div className="image-wrapper rounded-full border-[3px] border-solid border-white70 p-2 flex items-center justify-center">
            <Image src={profilePic} alt="TTUmejiaku" />
          </div>

          {/* Profile details */}
          <div className="text-white mt-10">
            <h1 className="text-large font-bold tracking-wide">
              Temple Umejiaku
            </h1>
            <p className="text-small text-white70 mt-2">Front-end Developer</p>
            <p className="text-xSmall mt-2">
              <strong>Specialty:</strong> HTML, CSS, JavaScript, React.js
            </p>

            {/* Social icons */}
            <div className="mt-5">
              <SocialIcon
                url="https://twitter.com/TTUmejiaku"
                style={{ height: 40, width: 40 }}
                fgColor="hsl(49, 94%, 61%)"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/temple-umejiaku-9b6443b0/"
                style={{ height: 40, width: 40 }}
                fgColor="hsl(49, 94%, 61%)"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://github.com/TTUmejiaku"
                style={{ height: 40, width: 40 }}
                fgColor="hsl(49, 94%, 61%)"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://join.slack.com/t/templeumejiaku/shared_invite/zt-1fbais9o4-0hbXQOC4HFRY40cGw7E6Dg"
                style={{ height: 40, width: 40 }}
                fgColor="hsl(49, 94%, 61%)"
                bgColor="transparent"
              />
            </div>
          </div>
        </div>

        {/* Header buttons */}
        <div className="flex items-center justify-center space-x-4 mt-7 lg:mt-14">
          <a
            href="./Assets/Images/TTUmejiaku-CV.pdf"
            download
            className="header-btn bg-priYellow text-baseBlack "
          >
            <span>Download CV</span>
            <AiOutlineDownload className="text-small" />
          </a>

          <div className="header-btn bg-white10 text-priYellow">
            <span>Contact me</span>
            <FaRegEnvelope className="text-small" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
