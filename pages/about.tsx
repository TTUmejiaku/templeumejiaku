import React, { useState } from "react";
import Header from "../components/Header";
import PrimaryNav from "../components/PrimaryNav";
import { TbShovel, TbTool } from "react-icons/tb";
import { GiMoebiusTriangle } from "react-icons/gi";
import { workHistoryData } from "../workHistoryData";
import { skillsData } from "../projectData";
import Skill from "../components/Skill";
import ContactMe from "../components/ContactMe";

type Props = {};

function About({}: Props) {
  const [count, setCount] = useState(0);

  const workHistoryLists = workHistoryData.map((workHistory) => {
    return (
      <div key={workHistory.companyName}>
        <div className="flex space-x-1 font-bold text-normal">
          <h2 className="text-white70 text-left">
            {workHistory.role}{" "}
            <span className="text-priYellow">
              &#64; {workHistory.companyName}
            </span>
          </h2>
        </div>
        <p className="text-xSmall text-white40 tracking-widest text-left">
          {workHistory.date}
        </p>
        <ul className="text-white70 mt-4 text-left tracking-wide">
          {workHistory.tasks.map((task) => {
            return (
              <li
                className="mt-3 flex items-center justify-start space-x-1"
                key={task.substring(0, 15)}
              >
                <GiMoebiusTriangle className="w-1/12 text-priYellow -rotate-12" />
                <p className="w-11/12">{task}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  const buttonLists = workHistoryData.map((workHistory, i) => {
    return (
      <button
        id={`tab-${i}`}
        key={workHistory.companyName}
        onClick={() => setCount(workHistory.id)}
      >
        <span>{workHistory.companyName}</span>
      </button>
    );
  });

  const skillsLists = skillsData.map((skill) => (
    <Skill
      directionLeft={skill.directionLeft}
      brandLogo={skill.brand}
      brandName={skill.brandName}
      key={skill.id}
    />
  ));

  return (
    <>
      <Header />
      <PrimaryNav />
      {/* About section */}
      <div className="text-white  text-center">
        <div className="container">
          <p className="mt-8 md:mt-10 mx-auto md:w-4/5">
            I love to build cool stuff with code. I delight in manipulating
            HTML, CSS, and JavaScript to turn designs into functional and
            user-friendly web applications. I am currently looking for a
            challenging opportunity to contribute to developing web applications
            that solve business problems.
          </p>
        </div>
      </div>

      {/* Work, skills section */}
      <main className="mt-20 md:mt-28">
        <div className="container">
          {/* Work section */}
          <section className="text-center py-4">
            <div className="title__logo">
              <TbShovel className="icons" />
            </div>
            <h2 className="section__title">Relevant work experience</h2>
            <div className="divider"></div>
            <div className="flex flex-col md:flex-row mt-20">
              <div className="work-history__buttons">{buttonLists}</div>
              <div className="md:w-2/3">{workHistoryLists[count]}</div>
            </div>
          </section>

          {/* Skills section */}
          <section className="text-center py-4 mt-20 md:mt-28">
            <div className="title__logo">
              <TbTool className="icons" />
            </div>
            <h2 className="section__title">Skills</h2>
            <div className="divider"></div>
            <div className="flex items-center justify-center flex-wrap gap-4 md:mx-auto">
              {skillsLists}
            </div>
          </section>

          {/* Contact me */}
          <section id="contact">
            <ContactMe />
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
