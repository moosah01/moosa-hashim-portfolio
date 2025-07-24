import EducationCard from "../components/EducationCard";
import { education } from "../constants";

const Education = () => {
  return (
    <section className="w-[95%] mx-auto max-w-8xl flex flex-col justify-center">
      <div className="">
        <h2 className="text-4xl font-bold mb-8 font-manrope">Education</h2>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <EducationCard key={index} data={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
