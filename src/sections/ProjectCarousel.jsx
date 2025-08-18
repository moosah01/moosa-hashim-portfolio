import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; // ⬅️ add this

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
      <h2 className="text-4xl font-bold font-montserrat max-sm:justify-center max-md:text-3xl mt-5">
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
                className="relative z-[2] origin-center w-[290px] sm:w-[346px] lg:w-[420px]"
              >
                <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
                  <ProjectCard2 data={project} />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* controls row: prev • dots • next */}
          <div className="slider-controller pt-10 max-md:pt-5">
            <div
              className="swiper-button-prev slider-arrow"
              aria-label="Previous"
            >
              <FaChevronCircleLeft
                size="12px"
                className="text-black hover:text-blue-500 transition ease-in-out duration-500"
              />
            </div>

            <div className="swiper-pagination text-blue-300" />
            <div className="swiper-button-next slider-arrow" aria-label="Next">
              <FaChevronCircleRight
                size="12px"
                className="text-black  hover:text-blue-500 transition ease-in-out duration-500 "
              />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
