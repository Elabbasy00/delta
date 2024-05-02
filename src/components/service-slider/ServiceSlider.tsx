"use client";
import React from "react";
import SwiperComponent from "../swiper-component/SwiperComponent";
import { services } from "@/src/data/data";
import { SwiperSlide } from "swiper/react";
import ServiceCard from "../service-card/ServiceCard";
import { Box, Container } from "@mui/joy";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
function ServiceSlider() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        ".swiper-wrapper": {
          paddingY: 6,
        },
      }}
    >
      <SwiperComponent
        slidesPerView={4.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".services-btn-next",
          prevEl: ".services-btn-prev",
        }}
        modules={[Navigation, Pagination]}
      >
        {services.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Container>
  );
}

export default ServiceSlider;
