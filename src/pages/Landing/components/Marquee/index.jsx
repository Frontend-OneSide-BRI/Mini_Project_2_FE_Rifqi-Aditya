import BaseSwiper from "@shared/components/BaseSwiper";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./marquee.css";

const Marquee = ({ imgData }) => {
  return (
    <BaseSwiper
      speed={4000}
      autoplay={{ delay: 0 }}
      loop={true}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        468: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1536: { slidesPerView: 4, spaceBetween: 10 },
      }}
      allowTouchMove={false}
    >
      {imgData.map((image, i) => (
        <SwiperSlide key={i}>
          <img
            className="w-full h-full object-cover"
            src={image.url}
            alt={image.title}
          />
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
};

export default Marquee;
