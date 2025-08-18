import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const fallbackImage = "https://placehold.co/600x400?text=Image+not+available";

export default function ProjectCard2({ data }) {
  const [imgSrc, setImgSrc] = useState(data.imageUrl ?? fallbackImage);

  return (
    <div className="w-full flex flex-col">
      {/* use contain to avoid cropping; rounded top to match card */}
      <img
        src={imgSrc}
        onError={() => setImgSrc(fallbackImage)}
        alt={data.title}
        className="w-full aspect-[4/3] object-contain rounded-t-2xl"
      />

      <div className="relative z-10 flex flex-col items-start gap-1 p-3 sm:p-4">
        <h2 className="text-base sm:text-lg font-manrope font-extrabold leading-tight">
          {data.title}
        </h2>
        <h3 className="text-slate-gray text-sm sm:text-base">
          {data.description}
        </h3>
        <div className="flex flex-row gap-4 py-6 sm:py-8">
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
    </div>
  );
}
