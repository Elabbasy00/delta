"use client";
import React from "react";
import SwiperComponent from "../swiper-component/SwiperComponent";
import { services } from "@/src/data/data";
import { SwiperSlide } from "swiper/react";
import ServiceCard from "../service-card/ServiceCard";
import { Box, Button, Container } from "@mui/joy";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";
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
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          425: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {services.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button component={Link} href="/services" size="lg" variant="outlined">
          اعرف اكثر
        </Button>
      </Box>
    </Container>
  );
}

export default ServiceSlider;
