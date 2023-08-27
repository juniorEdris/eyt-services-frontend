"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Swiper Modules
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns absolute top-2/4 px-4 z-10 w-full">
      <div className="flex items-center justify-between">
        <button onClick={() => swiper.slidePrev()}>
          <ChevronLeftCircle color="white" size={48} strokeWidth={1} />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <ChevronRightCircle color="white" size={48} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

const HeroSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Navigation]}
      className="w-screen relative"
      effect="fade"
    >
      {items?.map((item) => (
        <SwiperSlide
          key={item?.description}
          className="!flex justify-center items-center w-full"
        >
          <div className="h-[485px] w-full relative overflow-hidden">
            <Image
              className="object-cover"
              src={item?.image}
              fill={true}
              priority={false}
              alt={item?.description}
            />
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};

export default HeroSlider;
