"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Swiper Modules
import "swiper/css/autoplay";

const SwiperSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      //   breakpoints={{
      //     480: { slidesPerView: 2 },
      //     768: { slidesPerView: 3 },
      //   }}
      modules={[Autoplay]}
    >
      {items?.map((item) => (
        <SwiperSlide
          key={item?.description}
          className="!flex justify-center items-center"
        >
          <div
            className={`w-full h-full bg-[url("/images/landing-page/hero/01.jpg")]`}
          >
            Slider
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
