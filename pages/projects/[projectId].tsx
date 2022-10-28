import React from "react";
import { projectData } from "../../projectData";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { TbShovel } from "react-icons/tb";
import { IoLinkSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";

type Props = {};

function ProjectDetails({}: Props) {
  const router = useRouter();
  const projectId = router.query.projectId;

  const project = projectData.find((projectEl) => {
    return projectEl.projectTitle === projectId;
  })!;

  const reg = /-/g;
  const projectName = project?.projectTitle.replaceAll(reg, " ");
  const imgURL = project?.imageURL;

  return (
    <>
      {/* Navigate button */}
      <div className="mt-10 ">
        <div className="container">
          <Link href="/projects">
            <div className="flex flex-col items-center justify-center bg-priYellow w-10 h-10 md:w-16 md:h-16 rounded-full mx-auto cursor-pointer hover:scale-110">
              <BiLeftArrowAlt className="text-small" />
            </div>
          </Link>
        </div>
      </div>

      {/* Project name section */}
      <main className="mt-10 md:mt-20">
        <div className="container text-center text-white70">
          <div className="title__logo">
            <TbShovel className="icons" />
          </div>
          <h2 className="section__title text-priYellow font-bold">
            {projectName}
          </h2>
          <p className="mb-14">Technology: {project?.projectInfo}</p>
          <p className="mb-10">{project?.projectDescription}</p>
          <a
            href={project?.projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-priYellow space-x-2 flex flex-col items-center justify-center md:flex-row"
          >
            <IoLinkSharp className="icons" />
            <span>{project?.projectURL}</span>
          </a>

          {/* Project image section */}
          <div className="project__img">
            <div className="w-full h-full relative rounded-3xl">
              {imgURL && (
                <Image
                  src={`${imgURL}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              )}
            </div>
            <div className="absolute bottom-0 bg-black w-full p-5">
              <p>Desktop View</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectDetails;
