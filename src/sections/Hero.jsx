import React from "react";
import moosaImage from "../assets/images/moosa.jpg";
// Swap in whichever icon library you prefer:
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Hero = () => (
  <section className="bg-gray-900 text-white px-8 py-16 md:px-16 lg:px-32">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto gap-12">
      {/* ————— Left: Text Content ————— */}
      <div className="flex flex-col gap-6 md:flex-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Hi all, I'm Moosa{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="text-lg sm:text-xl max-w-prose leading-relaxed">
          A passionate Full Stack Software Developer&nbsp;
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          with experience in building Web & Mobile applications using
          JavaScript, React.js, TailwindCSS, Node.js, Flutter, SpringBoot and
          other amazing libraries and frameworks!
        </p>

        {/* ——— Social Icons ——— */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/moosah01"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/moosahashim/"
            aria-label="LinkedIn"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:moosah01@gmail.com"
            aria-label="Email"
            className="hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* ——— Call to Action Buttons ——— */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-center font-medium transition"
          >
            Contact Me
          </a>
          <a
            href="/assets/files/SWE-Muhammad_Moosa_Hashim_Resume-2025.pdf"
            download
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-center font-medium transition"
          >
            Download My Resume
          </a>
        </div>
      </div>

      {/* ————— Right: Your Photo ————— */}
      <div className="flex-shrink-0">
        <img
          src={moosaImage}
          alt="Moosa"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
