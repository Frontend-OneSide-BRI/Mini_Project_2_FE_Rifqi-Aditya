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
          <div className="group bg-gradient-to-b from-black to-black relative overflow-hidden h-full w-full">
            <div className="transition-opacity ease-in-out duration-300 opacity-100 h-full w-full group-hover:opacity-80">
              <img
                className="transition ease-in-out duration-300 object-cover h-full w-full group-hover:scale-110"
                src={image.url}
                alt={image.title}
              />
            </div>
            <p className="absolute bottom-1 left-2 text-white text-sm transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
              {image.title || ""}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
};

export default PhotoSlider;
