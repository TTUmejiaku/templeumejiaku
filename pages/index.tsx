import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import PrimaryNav from "../components/PrimaryNav";
import ProjectCard from "../components/ProjectCard";

type Props = {};

function index({}: Props) {
  return (
    <>
      <div className="container">
        <Header />
        <PrimaryNav />
        <section id="projects">
          <ProjectCard />
        </section>
        <section id="contact" className="text-center mt-28">
          <h3 className="uppercase tracking-[16px] text-priYellow text-small">
            Contact Me
          </h3>
          <div className="divider"></div>
          <ContactForm />
        </section>
      </div>
      {/* <section id="contact">
        <div className="mt-28 container text-center">
          <h3 className="uppercase tracking-[16px] text-priYellow text-small">
            Contact Me
          </h3>
          <div className="divider"></div>
          <ContactForm />
        </div>
      </section> */}
    </>
  );
}

export default index;
