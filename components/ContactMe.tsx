import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import ContactForm from "./ContactForm";

type Props = {};

function ContactMe({}: Props) {
  return (
    <>
      <div className="mt-28 text-center ">
        <h3 className="uppercase tracking-[16px] text-priYellow text-small">
          Contact Me
        </h3>
        <div className="divider"></div>
        <div className="space-y-10 w-full">
          <h4 className="text-large text-white70 font-semibold text-center mt-7">
            I am an email away.{" "}
            <span className="decoration-priYellow/50 underline">
              Let&apos;s Talk
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-priYellow h-7 w-7 animate-pulse" />
              <p className="text-small text-white70">+234-90-3355-9461</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-priYellow h-7 w-7 animate-pulse" />
              <p className="text-small text-white70">
                templeumejiaku@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-priYellow h-7 w-7 animate-pulse" />
              <p className="text-small text-white70">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default ContactMe;
