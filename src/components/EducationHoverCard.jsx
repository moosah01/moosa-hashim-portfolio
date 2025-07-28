import React from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const EducationHoverCard = ({ data, isOpen, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* glassy backdrop */}
      <div
        className="absolute inset-0 bg-white/10 backdrop-filter backdrop-blur-lg"
        onClick={onClose}
      />

      {/* modal card */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* close button */}
        <button
          onClick={onClose}
          title="Close"
          className="
            absolute top-4 right-4 z-10 p-2
            bg-white/80 backdrop-filter backdrop-blur-sm
            rounded-full shadow hover:bg-white transition-colors
          "
        >
          <FiX size={20} className="text-gray-800" />
        </button>

        <div className="p-6">
          {/* header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1 pr-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {data.degree}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={data.src}
                  alt={`${data.university} logo`}
                  className="w-8 h-8 rounded"
                />
                <span className="text-lg font-medium text-gray-700">
                  {data.university}
                </span>
              </div>

              {/* action buttons */}
              <div className="flex gap-3 mb-4">
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white
                    rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium
                  "
                >
                  <FiExternalLink size={16} />
                  Website
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2 bg-blue-600 text-white
                    rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium
                  "
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* CGPA badge */}
            {data.cgpa && (
              <div className="flex-shrink-0 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                CGPA – {data.cgpa}
              </div>
            )}
          </div>

          {/* session attended */}
          {data.session && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-1">
                Session Attended
              </h3>
              <p className="text-gray-600">{data.session}</p>
            </div>
          )}

          {/* about */}
          {data.description && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {data.description}
              </p>
            </div>
          )}

          {/* main highlight */}
          {data.mainHighlight && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 font-medium">{data.mainHighlight}</p>
            </div>
          )}

          {/* achievements */}
          {data.highlights?.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Achievements</h3>
              <ul className="space-y-2">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationHoverCard;
