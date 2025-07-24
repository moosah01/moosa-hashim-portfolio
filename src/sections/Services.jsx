import React from "react";
import moosaImage from "../assets/images/moosa.jpg";
import Lottie from "lottie-react";
import catProgrammer from "../assets/images/catProgrammer.json";

import {
  FaNodeJs,
  FaJava,
  FaDocker,
  FaDatabase,
  FaAws,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import {
  SiMongodb,
  SiYaml,
  SiApachekafka,
  SiSpringboot,
  SiExpress,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { services } from "../constants";

const Services = () => {
  // Reorganized technologies by category
  const technologies = [
    // Programming Languages
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },

    // Frontend Frameworks/Libraries
    { name: "ReactJS", icon: FaReact },
    { name: "Flutter", icon: FaFlutter },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },

    // Backend Frameworks
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Spring Boot", icon: SiSpringboot },

    // Databases
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: DiMysql },
    { name: "SQL Database", icon: FaDatabase },

    // Cloud & DevOps
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: VscAzure },
    { name: "Firebase", icon: IoLogoFirebase },
    { name: "Docker", icon: FaDocker },

    // Tools & Others
    { name: "Apache Kafka", icon: SiApachekafka },
    { name: "YAML", icon: SiYaml },
  ];

  return (
    <section className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:items-start py-12 px-4 gap-10">
      {/* Left: your illustration or photo */}
      {/* <div className="max-md:order-3  max-md:mt-10 md:block md:w-1/2">
        <img
          src={moosaImage}
          alt="Coding illustration"
          className="w-full h-auto object-cover"
        />
      </div> */}

      <div className="max-md:order-3 max-md:mt-10 mt-20 md:block md:w-1/2">
        <Lottie
          animationData={catProgrammer}
          loop={true}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right: heading, subtitle, icons, bullets */}
      <div className="w-full md:w-1/2 md:pl-12 text-left">
        <h2 className="text-4xl font-bold mb-2 font-manrope max-md:text-center">
          What I do
        </h2>
        <p className="uppercase text-sm tracking-wide mb-8 max-md:text-center font-montserrat">
          Try to become a better version of myself every day
        </p>

        {/* Icon grid - properly centered */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 mb-8">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon || AiOutlineQuestionCircle;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center w-16 hover:scale-115 transition ease-in-out duration-300"
              >
                <Icon className="w-10 h-10 mb-1 group-hover:text-blue-400" />
                <span className="text-xs lowercase text-center text-slate-gray group-hover:text-black">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bullet list */}
        <ul className="space-y-4">
          {services.map((text, idx) => (
            <li
              key={idx}
              className="flex items-start text-md font-manrope max-w-prose text-justify max-md:text-[16px]"
            >
              <span className="mr-2 py-2">⚡</span>
              <p className="px-5">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
