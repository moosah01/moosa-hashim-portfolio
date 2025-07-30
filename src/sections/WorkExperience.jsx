import React, { useState, useEffect } from "react";
import WorkExperienceCard from "../components/WorkExperienceCard";
import { workExperience } from "../constants";

const WorkExperience = () => {
  return (
    <section className="mx-auto max-w-8xl w-[95%]">
      <h2 className="text-4xl font-bold mb-8 font-manrope max-md:text-3xl max-md:text-center">
        Proffesional Experience
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workExperience.map((company, idx) => (
          <WorkExperienceCard key={idx} index={idx} data={company} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
