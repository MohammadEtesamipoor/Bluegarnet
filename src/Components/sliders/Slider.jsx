import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import BoxSliderHero from "Components/box-slider-hero/BoxSliderHero";

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="hero-header__info__swiper__slider"
      >
        <SwiperSlide>
          <BoxSliderHero />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSliderHero />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSliderHero />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSliderHero />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

