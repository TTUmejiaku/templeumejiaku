import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

type Props = {};

function Projects({}: Props) {
  return (
    <>
      <div className="container">
        {/* Navigate button */}
        <Link href="/">
          <div className="mt-10 flex flex-col items-center justify-center bg-priYellow w-10 h-10 md:w-16 md:h-16 rounded-full mx-auto cursor-pointer">
            <BiLeftArrowAlt className="text-small" />
          </div>
        </Link>

        <div className="mt-10 md:mt-20">
          <h1 className="section__title font-bold text-center">
            Featured Projects
          </h1>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
