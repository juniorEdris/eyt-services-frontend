"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Swiper Modules
import "swiper/css/autoplay";

const HeroSlider = ({ items }) => {
  return (
    <Swiper slidesPerView={1} modules={[Autoplay]}>
      {items?.map((item) => (
        <SwiperSlide
          key={item?.description}
          className="!flex justify-center items-center w-full"
        >
          <div
            className={`w-full h-[952px]`}
            // style={{ backgroundImage: `url('${item?.image}'))` bg-top bg-contain bg-no-repeat}}
          >
            {/* <Image
              src={item?.image}
              height={1950}
              width={952}
              alt={item?.description}
            /> */}
            {item?.description}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
