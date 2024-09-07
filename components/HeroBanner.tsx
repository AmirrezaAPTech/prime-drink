'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import GreenHeroBanner from './GreenHeroBanner';
import PinkHeroBanner from './PinkHeroBanner';

export default function HeroBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><GreenHeroBanner /></SwiperSlide>
        <SwiperSlide><PinkHeroBanner /></SwiperSlide>
      </Swiper>
    </>
  );
}
