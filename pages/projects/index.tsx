import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import ProjectCards from "../../components/ProjectCard";

type Props = {};

function ProjectDetails({}: Props) {
  return (
    <>
      {/* Navigate button */}
      <div className="mt-10 ">
        <div className="container">
          <Link href="/">
            <div className="flex flex-col items-center justify-center bg-priYellow w-10 h-10 md:w-16 md:h-16 rounded-full mx-auto cursor-pointer">
              <BiLeftArrowAlt className="text-small" />
            </div>
          </Link>
        </div>
      </div>

      <div className="section__title container mt-10 md:mt-20">
        <h1 className="font-bold text-center">Featured Projects</h1>
      </div>
      <section className="projects mt-40-80">
        <div className="container">
          <ProjectCards />
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
