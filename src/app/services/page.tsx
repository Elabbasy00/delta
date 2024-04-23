"use client";
import PageHeader from "@/src/components/page-header/PageHeader";
import ServiceCard from "@/src/components/service-card/ServiceCard";
import { services } from "@/src/data/data";
import { Container, Grid } from "@mui/joy";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="خدمتنا" />
      <Container>
        <Grid container spacing={2}>
          {services.map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ServiceCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default page;
