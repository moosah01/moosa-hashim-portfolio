import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard2 from "../components/ProjectCard2";
import { projectData } from "../constants";

import { Pagination } from "swiper/modules";

export default function ProjectCardCarousel() {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {projectData.map((project, idx) => (
          <ProjectCard2 data={project} />
        ))}
      </div>
      {/* <div className="flex flex-wrap max-w-[992px] items-center justify-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={false}
          className="mySwiper pt-0.5 pb-2 w-full overflow-x-hidden"
        >
          {projectData.map((project, idx) => (
            <SwiperSlide>
              <ProjectCard2 data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
}
