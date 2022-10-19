import React from "react";
import Header from "../components/Header";
import PrimaryNav from "../components/PrimaryNav";
import ProjectCard from "../components/ProjectCard";

type Props = {};

function index({}: Props) {
  return (
    <div className="">
      <Header />
      <PrimaryNav />
      <ProjectCard />
    </div>
  );
}

export default index;
