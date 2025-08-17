import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const MotionCard = motion.div;

export default function ProjectCard({
  project,
  isActive = false,
  fallbackImage = "https://placehold.co/600x400?text=Image+not+available",
}) {
  const [imgSrc, setImgSrc] = useState(project.imageUrl ?? fallbackImage);

  return (
    <MotionCard
      initial={false}
      animate={{
        scale: isActive ? 1.1 : 1,
        filter: isActive ? "none" : "grayscale(0.35) blur(2px)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className="relative w-[320px] sm:w-[380px] overflow-hidden rounded-2xl bg-blue-500 shadow-md
                 transition-colors duration-300 ease-in-out z-10"
    >
      {/* Image */}
      <div className="p-0">
        <img
          src={imgSrc}
          onError={() => setImgSrc(fallbackImage)}
          alt={project.title}
          className="h-48 w-full object-cover"
        />
      </div>

      {/* Bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-1 p-4">
        <h3 className="text-lg font-extrabold leading-tight md:text-xl">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600">{project.description}</p>

        <div className="mt-3 flex gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 underline-offset-4 hover:underline"
            >
              <span>Open</span>
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
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
}
