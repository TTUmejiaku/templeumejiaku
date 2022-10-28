import React from "react";
import Link from "next/link";
import { projectData } from "../projectData";
import Image from "next/image";

type Props = {};

function ProjectCard({}: Props) {
  const projects = projectData.map((project) => {
    return (
      <Link href={`/projects/${project.projectTitle}`} key={project.id}>
        <div className="projects__card cursor-pointer">
          <div className="img-wrapper">
            <Image
              src={project.imageURL}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="bg-black w-full absolute bottom-8 md:bottom-20 -skew-y-12 p-4">
            <h3>{project.projectTitle}</h3>
            <p className="text-white">Technology: {project.projectInfo}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="projects mt-8">
      <div className="container md:grid md:grid-cols-2 md:gap-6">
        {projects}
      </div>
    </section>
  );
}

export default ProjectCard;
