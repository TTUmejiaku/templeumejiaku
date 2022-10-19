import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import PrimaryNav from "../components/PrimaryNav";
import { TbShovel, TbTool } from "react-icons/tb";
import { BiBookReader } from "react-icons/bi";

type Props = {};

function about({}: Props) {
  return (
    <>
      <Header />
      <PrimaryNav />
      {/* About section */}
      <div className="text-white  text-center">
        <div className="container">
          <p className="mt-8 md:mt-10 w-4/5 mx-auto">
            Add a brief introduction here.Nullam quis risus eget urna mollis
            ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </p>
        </div>
      </div>

      {/* Work, education, skills section */}
      <main className="mt-20 md:mt-28">
        <div className="container">
          {/* Work section */}
          <section className="text-center py-4">
            {/* Tittle logo */}
            <div className="title__logo">
              <TbShovel className="icons" />
            </div>
            <h2 className="section__title">Work history</h2>
            <div className="divider"></div>
            <div className="md:mx-auto">
              <div className="work-history__company">
                <p>2016 to present</p>
                <p>Company name</p>
              </div>
              <div className="work-history__company">
                <p>2011-2016</p>
                <p>Whitford, Whitford</p>
              </div>
              <div className="work-history__company">
                <p>2011-2014</p>
                <p>Acme Corp</p>
              </div>
              <div className="work-history__company">
                <p>2010-2011</p>
                <p>Freelance / contracting</p>
              </div>
            </div>
          </section>

          {/* Education section */}
          <section className="mt-20 md:mt-28 text-center py-4">
            <div className="title__logo">
              <BiBookReader className="icons" />
            </div>
            <h2 className="section__title">Education</h2>
            <div className="divider"></div>
            <div className="md:mx-auto">
              <div className="academics__qualification">
                <BiBookReader className="icons" />
                <p>Qualification title (2016)</p>
              </div>
              <div className="academics__qualification">
                <BiBookReader className="icons" />
                <p>BA (Getting It Done), University of Life, Earth (2013)</p>
              </div>
              <div className="academics__qualification">
                <BiBookReader className="icons" />
                <p>Graduate Cert IV, School of Hard Knocks, Earth (2010)</p>
              </div>
            </div>
          </section>

          {/* Skills section */}
          <section className="text-center py-4 mt-20 md:mt-28">
            <div className="title__logo">
              <TbTool className="icons" />
            </div>
            <h2 className="section__title">Skills</h2>
            <div className="divider"></div>
            <div className="md:mx-auto">
              <div className="flex items-center justify-start space-x-4 text-small text-left">
                <div className="text-priYellow">
                  <p>4.8</p>
                </div>
                <div className="text-white70">
                  <h3 className="text-normal font-bold">
                    Skill with graph component
                  </h3>
                  <p>
                    To publish, you’ll need to set the graph values, then detach
                    the Figma component instance and flatten the ellipse value
                    layer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default about;
