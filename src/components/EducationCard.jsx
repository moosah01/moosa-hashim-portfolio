const EducationCard = ({ data }) => {
  return (
    <div
      tabIndex={0}
      className="group relative py-6 px-2 rounded-3xl hover:bg-gray-100 focus-within:bg-gray-100"
    >
      {/* Row: logo + content */}
      <div className="flex max-sm:flex-col gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={data.src}
            alt={`${data.university} logo`}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-xl md:text-3xl font-bold font-manrope">
            {data.university}
          </h1>

          <h2 className="text-md md:text-2xl font-manrope">{data.degree}</h2>

          <p className="text-sm md:text-base font-manrope text-slate-gray group-hover:text-black transition duration-300 ease-in-out">
            {data.duration}
          </p>
          <p className="text-sm md:text-base font-manrope text-slate-gray group-hover:text-black transition duration-300 ease-in-out">
            {data.mainHighlight}
          </p>

          <ul className="mt-2 space-y-2 list-none">
            {data.highlights.map((highlight, idx) => (
              <li
                key={idx}
                md:text-base
                className="flex items-start text-sm  font-manrope text-slate-gray"
              >
                <span className="mr-3 leading-tight">•</span>
                <span className="leading-tight group-hover:text-black transition duration-300 ease-in-out">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Underline that spans the whole card */}
      <div className="mt-4 w-full">
        <div
          className="max-md:mx-auto h-1 w-[80%] bg-slate-800 transition-all duration-500
                     group-hover:w-full group-hover:bg-blue-400
                     group-hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]
                     rounded-full"
        />
      </div>
    </div>
  );
};

export default EducationCard;
