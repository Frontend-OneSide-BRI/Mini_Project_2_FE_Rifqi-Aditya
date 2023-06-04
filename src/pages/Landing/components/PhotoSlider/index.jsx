// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import BaseSwiper from "@shared/components/BaseSwiper";

const PhotoSlider = ({ imgData }) => {
  return (
    <BaseSwiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        468: { slidesPerView: 2.3, spaceBetween: 10 },
        768: { slidesPerView: 3.3, spaceBetween: 10 },
        1024: { slidesPerView: 4.3, spaceBetween: 10 },
        1536: { slidesPerView: 5.3, spaceBetween: 10 },
      }}
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

export default PhotoSlider;
