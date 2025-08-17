// src/components/ProjectCard2.jsx
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionCard = motion.div;
const fallbackImage = "https://placehold.co/600x400?text=Image+not+available";

const ProjectCard2 = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(data.imageUrl ?? fallbackImage);

  return (
    <MotionCard
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-lg overflow-hidden shadow-xl flex flex-col relative
                 h-[400px] w-[400px] will-change-transform"
    >
      <div>
        <img
          src={imgSrc}
          onError={() => setImgSrc(fallbackImage)}
          alt={data.title}
          className="h-64 w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-1 p-4">
        <h2 className="text-lg font-manrope font-extrabold leading-tight md:text-xl">
          {data.title}
        </h2>
        <h3 className="text-slate-gray">{data.description}</h3>

        <div className="flex flex-row gap-4 py-8">
          {data.liveDemo && (
            <a
              href={data.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 underline-offset-4 hover:underline"
            >
              <span>Open</span>
              <ArrowUpRight size={16} />
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 underline-offset-4 hover:underline"
            >
              <span>GitHub</span>
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </MotionCard>
  );
};

export default ProjectCard2;
