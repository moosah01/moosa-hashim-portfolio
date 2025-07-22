import React from "react";
import moosaImage from "../assets/images/moosa.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => (
  <section className="w-[90%] py-10 px-8 mx-auto max-w-8xl">
    <div className="flex flex-row md:flex-row max-md:flex-col items-center justify-between gap-10 max-w-7xl mx-auto">
      {/* 1) Social Icons */}
      <div className="order-1 md:order-none flex flex-col max-md:flex-row space-x-4 text-2xl md:text-3xl gap-5">
        <a
          href="https://github.com/moosah01"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-gray hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moosahashim/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-gray hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:moosah01@gmail.com"
          aria-label="Email"
          className="text-slate-gray hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* 2) Text Content */}
      <div className="order-2 md:order-none flex flex-col gap-6 max-md:flex-1">
        <h1 className="text-4xl font-bold font-manrope max-md:text-3xl max-md:text-center">
          Muhammad Moosa Hashim{" "}
          <span role="img" aria-label="waving hand" className="wave-emoji">
            👋
          </span>
        </h1>
        <p className="font-manrope text-xl text-slate-gray max-md:text-center">
          Software Engineer
        </p>
        <p className="font-manrope max-w-prose leading-relaxed text-justify max-md:text-[13px] max-md:text-center">
          A passionate Full Stack Software Developer&nbsp;
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          with experience in building Web & Mobile applications using
          JavaScript, React.js, TailwindCSS, Node.js, Flutter, SpringBoot and
          other amazing libraries and frameworks!
        </p>

        {/* 3) Image - Mobile Only (appears after text, before buttons) */}
        <div className="profile_img_mobile order-3 md:hidden flex-shrink-0 self-center">
          <img
            src={moosaImage}
            alt="Moosa"
            className="w-72 h-72 rounded-full object-cover shadow-2xl"
          />
        </div>

        {/* 4) CTA Buttons */}
        <div className="order-4 md:order-none flex flex-row max-md:flex-col gap-4 mt-5 items-center justify-center lg:justify-start">
          <a
            href="#contact"
            className="w-64 font-manrope transition ease-in-out duration-300 inline-block px-8 py-3 bg-white hover:bg-neutral-800 rounded-full text-center hover:text-white border border-slate-gray hover:border-transparent"
          >
            Contact Me
          </a>
          <a
            href="/SWE-Muhammad_Moosa_Hashim_Resume-2025.pdf"
            download
            className="wiggle w-64 font-manrope transition ease-in-out duration-300 inline-block px-8 py-3 bg-neutral-800 hover:bg-blue-400 rounded-full text-center text-white"
          >
            Download My Resume
          </a>
        </div>
      </div>

      {/* 5) Image - Desktop Only (appears on the right side) */}
      <div className="profile_img order-5 md:order-none flex-shrink-0 hidden md:block">
        <img
          src={moosaImage}
          alt="Moosa"
          className="h-96 w-96 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
