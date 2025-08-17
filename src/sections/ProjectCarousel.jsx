import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ⬅️ add this

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
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <span className="text-sm opacity-80 mb-4">
        Have a look at some of my highlighted projects
      </span>

      <div className="w-full max-w-[992px]">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={false}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
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
                className="relative z-[2] origin-center w-[320px] sm:w-[360px]"
              >
                <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
                  <ProjectCard2 data={project} />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* controls row: prev • dots • next */}
          <div className="slider-controller">
            <div
              className="swiper-button-prev slider-arrow"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-black" size={0.5} />
            </div>

            <div className="swiper-pagination" />
            <div className="swiper-button-next slider-arrow" aria-label="Next">
              <FaChevronRight className="text-black" size={0.5} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
