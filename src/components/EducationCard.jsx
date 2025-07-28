// src/components/EducationCard.jsx

import React, { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

const EducationCard = ({ data, isActive, onCardClick }) => {
  const cardRef = useRef(null);

  // Auto‐focus only on mobile when this card becomes active
  useEffect(() => {
    if (!isActive) return;

    // Check screen width at moment of activation
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      cardRef.current?.focus({ preventScroll: true });
    }
  }, [isActive]);

  const handleCardClick = () => {
    // On mobile, tapping the card expands
    if (window.innerWidth < 768) {
      onCardClick(data);
    }
  };

  const handleExpandClick = (e) => {
    e.stopPropagation();
    onCardClick(data);
  };

  return (
    <div
      ref={cardRef}
      data-education-card
      tabIndex={0}
      onClick={handleCardClick}
      className={`
        group relative py-6 px-2 rounded-3xl transition-colors outline-none cursor-pointer
        ${
          isActive
            ? "bg-gray-100 focus-within:bg-gray-100"
            : "hover:bg-gray-100"
        }
      `}
    >
      {/* Expand button */}
      <button
        onClick={handleExpandClick}
        className="
          absolute top-4 right-4 flex items-center space-x-1
          bg-white shadow-lg rounded-full border border-gray-200
          hover:shadow-xl hover:bg-gray-50 transition-all p-2
        "
        title="Expand"
      >
        <FiExternalLink size={16} className="text-gray-600" />
        <span className="text-sm text-gray-600">Expand</span>
      </button>

      {/* Logo + Content */}
      <div className="flex max-sm:flex-col gap-4">
        <div className="flex-shrink-0">
          <img
            src={data.src}
            alt={`${data.university} logo`}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-xl md:text-3xl font-bold font-manrope">
            {data.university}
          </h1>
          <h2 className="text-md md:text-2xl font-manrope">{data.degree}</h2>
          <p
            className="
            text-sm md:text-base font-manrope text-slate-gray
            group-hover:text-black group-focus-within:text-black
            transition-colors duration-300 ease-in-out
          "
          >
            {data.duration}
          </p>
          <p
            className="
            text-sm md:text-base font-manrope text-slate-gray
            group-hover:text-black group-focus-within:text-black
            transition-colors duration-300 ease-in-out
          "
          >
            {data.mainHighlight}
          </p>
          <ul className="mt-2 space-y-2 list-none">
            {data.highlights.map((h, i) => (
              <li
                key={i}
                className="
                  flex items-start text-sm md:text-base font-manrope text-slate-gray
                  transition-colors duration-300 ease-in-out
                "
              >
                <span className="mr-3 leading-tight">•</span>
                <span
                  className="
                  leading-tight
                  group-hover:text-black group-focus-within:text-black
                  transition-colors duration-300 ease-in-out
                "
                >
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Underline */}
      <div className="mt-4 w-full">
        <div
          className="
          max-md:mx-auto h-1 w-[80%] bg-slate-800 rounded-full
          transition-all duration-500
          group-hover:w-full group-focus-within:w-full
          group-hover:bg-blue-400 group-focus-within:bg-blue-400
          group-hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]
          group-focus-within:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]
        "
        />
      </div>
    </div>
  );
};

export default EducationCard;
