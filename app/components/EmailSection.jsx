"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [messageSubmitted, setMessageSubmitted] = useState();
  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const messageData = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    console.log(messageData);
    //todo
    setMessageSubmitted(false);
    // const JSONData = JSON.stringify(messageData);
    // const endpoint = "/api/send";

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONData,
    // };

    // const response = await fetch(endpoint, options);
    // const resData = await response.json();
    // console.log(resData)
    // if (response.status === 200) {
    //   console.log("Message sent success");
    //   setMessageSubmitted(true);
    // }else {
    //   setMessageSubmitted(false);
    //}
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">
          Let&apos;s connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/kavindu25">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kavindu-de-alwis-9a2a571b1/">
            <Image src={LinkedinIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleMessageSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="john@example.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
          {messageSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
          {messageSubmitted === false && (
            <p className="text-red-500 text-sm mt-2">Something went wrong!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
