import React, { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactForm({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<Inputs>();
  const recaptchaRef = useRef(ReCAPTCHA);
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const token = await recaptchaRef.current.executeAsync();
    emailjs
      .sendForm(
        "service_gkhwnqt",
        "template_jxvupnc",
        form.current!,
        "rXJ6E9e13rr5Db0ao"
      )
      .then(
        (result) => {
          setSuccessMessage(
            `${formData.name}, your message was sent successfully. You'll get a response within 24hrs`
          );
        },
        (error) => {
          setErrorMessage(`Sending message unsuccessful, try again`);
          console.log(error);
        }
      );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
    }
  }, [formState, reset]);

  return (
    <div className="mt-12 text-center">
      <div className="space-y-10">
        {successMessage && (
          <div className="bg-green-300 p-4 rounded-lg">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="bg-red-400 p-4 rounded-lg">{errorMessage}</div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
          className="flex flex-col space-y-2 md:w-full"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY_DEV}
          />
          <button className="bg-priYellow py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
