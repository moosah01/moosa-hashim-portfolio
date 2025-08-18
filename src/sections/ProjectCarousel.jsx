import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard2 from "../components/ProjectCard2";
import { projectData } from "../constants";

export default function ProjectCardCarousel() {
  return (
    <section
      id="Featured"
      className="w-full flex flex-col items-center select-none"
    >
      <h2 className="text-5xl font-agustina font-extrabold max-sm:justify-center max-md:text-3xl mt-5">
        Featured Projects
      </h2>
      <span className="text-m opacity-80 mb-12 text-slate-gray max-sm:text-sm mt-2">
        Have a look at some of my highlighted projects
      </span>

      <div className="w-full max-w-[992px]">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: -8,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container px-2 pt-2 pb-8 overflow-visible"
        >
          {projectData.map((project, idx) => (
            <SwiperSlide key={project?.id ?? idx} className="!w-auto !h-auto">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                /* width by breakpoint
                    - mobile   : 290 px
                    - ≥640 px  : 346 px
                    - ≥1024 px : 420 px            */
                className="relative z-[2] origin-center w-[350px] lg:w-[420px] max-sm:w-[316px]"
              >
                <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
                  <ProjectCard2 data={project} />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* controls row: prev • dots • next */}
          <div className="slider-controller pt-10 max-md:pt-5 gap-2 lg:gap-6">
            {/*  ← Prev  */}
            <div
              className="swiper-button-prev slider-arrow
               flex items-center justify-center
               w-4  h-4   sm:w-5  sm:h-5   lg:w-6  lg:h-6"
              aria-label="Previous"
            >
              <FaChevronCircleLeft
                className="text-black
                 w-3  h-3   sm:w-4  sm:h-4   lg:w-5  lg:h-5
                 hover:text-blue-500 transition duration-500"
              />
            </div>

            {/*  dots  */}
            <div
              className="swiper-pagination
               mx-[1.25rem] sm:mx-[2rem] lg:mx-[3rem]" /* ← spacing */
            />

            {/*  → Next  */}
            <div
              className="swiper-button-next slider-arrow
               flex items-center justify-center
               w-4  h-4   sm:w-5  sm:h-5   lg:w-6  lg:h-6"
              aria-label="Next"
            >
              <FaChevronCircleRight
                className="text-black
                 w-3  h-3   sm:w-4  sm:h-4   lg:w-5  lg:h-5
                 hover:text-blue-500 transition duration-500"
              />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
