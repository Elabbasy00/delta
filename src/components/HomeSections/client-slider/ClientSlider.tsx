"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "../../swiper-component/SwiperComponent";
import { clients } from "@/src/data/data";
import Image from "next/image";
import { Box, Container } from "@mui/joy";

function ClientSlider() {
  return (
    <Container sx={{ mt: 10 }}>
      <SwiperComponent
        slidesPerView={6}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {clients?.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                alignItems: "center",
                filter: "contrast(0)",
                width: "100%",
                height: "100%",
              }}
            >
              <Image width={100} height={30} alt="Client" src={item.img} />
            </Box>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Container>
  );
}

export default ClientSlider;
