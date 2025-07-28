import React, { useState, useEffect } from "react";
import EducationCard from "../components/EducationCard";
import EducationHoverCard from "../components/EducationHoverCard";
import { education } from "../constants";

const Education = () => {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cards = Array.from(
        document.querySelectorAll("[data-education-card]")
      );

      let best = { index: 0, ratio: -1 };
      cards.forEach((card, idx) => {
        const r = card.getBoundingClientRect();
        const visible = Math.max(
          0,
          Math.min(window.innerHeight, r.bottom) - Math.max(0, r.top)
        );
        const ratio = visible / r.height;
        if (ratio > best.ratio) {
          best = { index: idx, ratio };
        }
      });

      setActiveIndex(best.index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-[95%] mx-auto max-w-8xl flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8 font-manrope max-md:text-3xl max-md:text-center">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <EducationCard
            key={idx}
            data={edu}
            isActive={idx === activeIndex}
            onCardClick={setSelected}
          />
        ))}
      </div>

      <EducationHoverCard
        data={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default Education;
