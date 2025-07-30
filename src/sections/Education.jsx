import React, { useState, useEffect } from "react";
import EducationCard from "../components/EducationCard";
import EducationHoverCard from "../components/EducationHoverCard";
import { education } from "../constants";

const Education = () => {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // Keep a map of the latest intersection ratios
    const ratioMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          ratioMap[idx] = entry.intersectionRatio;
        });

        // Pick the index with the highest ratio
        const bestIdx = Object.keys(ratioMap).reduce(
          (best, idx) => (ratioMap[idx] > ratioMap[best] ? idx : best),
          Object.keys(ratioMap)[0]
        );
        setActiveIndex(Number(bestIdx));
      },
      {
        // Watch every 1% of visibility from 0% to 100%
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    // Observe all cards
    const cards = document.querySelectorAll("[data-education-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
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
            index={idx}
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
