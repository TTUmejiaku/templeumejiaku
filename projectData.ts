import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandReactNative,
} from "react-icons/tb";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiReactrouter,
} from "react-icons/si";
import { FaGithub, FaSass } from "react-icons/fa";
import React from "react";

export const projectData = [
  {
    id: 1,
    imageURL: "/Assets/Images/wood-services-website.png",
    projectTitle: "Wood-Product-Services",
    projectInfo: "HTML, SASS, JavaScript",
    projectURL: "https://ttumejiaku-wood-services-website.netlify.app/",
    projectDescription:
      "This is a static website for a business in the wood services industry",
  },
  {
    id: 2,
    imageURL: "/Assets/Images/Task-book.png",
    projectTitle: "Task-Book",
    projectInfo: "ReactJS, SASS, Firebase",
    projectURL: "https://ttumejiaku-task-book.netlify.app",
    projectDescription:
      "This is a todo management app with login and signup functionality.",
  },
];

// const javascript = () => <TbBrandJavascript/>
export const skillsData = [
  {
    id: 1,
    brand: TbBrandJavascript,
    directionLeft: true,
    brandName: "JavaScript",
  },
  {
    id: 2,
    brand: SiTypescript,
    directionLeft: true,
    brandName: "TypeScript",
  },
  {
    id: 3,
    brand: SiReact,
    directionLeft: true,
    brandName: "React",
  },
  {
    id: 4,
    brand: TbBrandNextjs,
    directionLeft: true,
    brandName: "NextJs",
  },
  {
    id: 5,
    brand: TbBrandHtml5,
    directionLeft: true,
    brandName: "HTML5",
  },
  {
    id: 6,
    brand: TbBrandCss3,
    directionLeft: true,
    brandName: "CSS3",
  },
  {
    id: 7,
    brand: FaGithub,
    directionLeft: false,
    brandName: "GitHub",
  },
  {
    id: 8,
    brand: SiTailwindcss,
    directionLeft: false,
    brandName: "Tailwind-CSS",
  },
  {
    id: 9,
    brand: FaSass,
    directionLeft: false,
    brandName: "SASS",
  },
  {
    id: 10,
    brand: SiReactrouter,
    directionLeft: false,
    brandName: "React-Router",
  },
  {
    id: 11,
    brand: TbBrandReactNative,
    directionLeft: false,
    brandName: "React-Native",
  },
];
