import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";
// import required modules
import {
  Pagination,
  Autoplay,
  EffectFlip,
  EffectCreative,
  Navigation,
} from "swiper";
import BoxSliderHero from "Components/box-slider-hero/BoxSliderHero";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Slider({ item, effect = "", navigation = false }) {
  // item props for Slider
  const [swiper, setSwiper] = React.useState(null);

  const next = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };

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
        effect={effect}
        grabCursor={true}
        speed={1000}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectFlip]}
      >
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
      </Swiper>
      {navigation && (
        <>
          <button className="cursor-pointer-nextBtn" onClick={next}>
            <FaAngleLeft />
          </button>
          <button className="cursor-pointer-prevBtn" onClick={prev}>
            <FaAngleRight />
          </button>
        </>
      )}
    </>
  );
}
