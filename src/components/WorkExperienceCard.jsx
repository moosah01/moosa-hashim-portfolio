import React, { useEffect, useRef } from "react";

const WorkExperienceCard = ({ data, index }) => {
  const headerStyle = data.gradient
    ? {
        backgroundImage: `linear-gradient(135deg, ${data.gradient.from}, ${data.gradient.to})`,
      }
    : data.color
    ? { backgroundColor: data.color } // fallback if only a single color is provided
    : {};

  return (
    <div
      className="rounded-lg overflow-hidden shadow-2xl
                flex flex-col relative h-[550px]"
    >
      {/* same height for all */}
      <div
        className="text-white text-center py-10 px-6 flex-shrink-0 font-manrope"
        style={headerStyle}
      >
        <h3 className="text-2xl font-bold">{data.company}</h3>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-20 z-10">
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={data.logo}
            alt={`${data.company} logo`}
            className="w-24 h-24 object-contain rounded-full"
          />
        </div>
      </div>
      <div className="p-6 pt-12 flex-1 flex flex-col overflow-hidden">
        <div className="text-center mb-4 flex-shrink-0">
          <h4 className="text-lg font-semibold mb-1">{data.role}</h4>
          <p className="text-sm text-slate-gray">{data.duration}</p>
        </div>

        <p className="text-[14px] leading-relaxed mb-3 flex-shrink-0 mt-5">
          {data.description}
        </p>

        <ul className="space-y-1 overflow-y-auto flex-1 pr-2">
          {data.highlights.map((h, i) => (
            <li key={i} className="flex items-start text-[14px]">
              <span className="mr-2 mt-1 flex-shrink-0">•</span>
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
