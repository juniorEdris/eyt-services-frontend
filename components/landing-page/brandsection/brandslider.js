"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithCustomSize from "@/components/primary/FreeSizeImage";
import Link from "next/link";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Swiper Modules
import "swiper/css/autoplay";

const BrandsSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
      }}
      breakpoints={{
        480: { slidesPerView: 3 },
        768: { slidesPerView: 5 },
      }}
      modules={[Autoplay]}
    >
      {items?.map((item, _idx) => (
        <SwiperSlide key={_idx} className="relative" title={item?.label}>
          <Link
            href={item?.href}
            className={`w-full h-full flex items-center justify-center`}
            target="_blank"
          >
            <ImageWithCustomSize
              parentClassName="w-12 h-12 rounded-none"
              className="rounded-none"
              image={item?.image}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandsSlider;
