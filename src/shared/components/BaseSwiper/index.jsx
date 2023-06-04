// Import Swiper React components
import { Swiper } from "swiper/react";
import React from "react";
import "./baseSwiper.css";

const BaseSwiper = ({
  children,
  speed,
  autoplay,
  loop,
  modules,
  breakpoints,
  allowTouchMove = true,
}) => {
  return (
    <Swiper
      allowTouchMove={allowTouchMove}
      speed={speed}
      autoplay={autoplay}
      loop={loop}
      modules={modules}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

export default BaseSwiper;
