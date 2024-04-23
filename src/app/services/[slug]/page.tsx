import PageHeader from "@/src/components/page-header/PageHeader";
import TowSideLayout from "@/src/components/tow-columns-layout/TowColumnsLayout";
import { services } from "@/src/data/data";
import { Container, Grid, List, ListItem, Typography } from "@mui/joy";
import React from "react";

function page({ params }: { params: { slug: string } }) {
  const service = services.filter(
    (item) => item.name === decodeURIComponent(params?.slug)
  )?.[0];

  return (
    <div>
      <PageHeader title={service?.name} />

      <TowSideLayout img={service?.img}>
        <Typography
          level="h1"
          fontWeight="lg"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          maxWidth="25ch"
        >
          {service?.name}
        </Typography>
        <Typography>{service.desc}</Typography>
      </TowSideLayout>
      <Container>
        <Typography
          level="h1"
          fontWeight="lg"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          maxWidth="25ch"
        >
          التفاصيل:
        </Typography>
        <List marker={"disc"}>
          <ListItem>مصانع الاعلاف</ListItem>
          <ListItem>مزارع الدواجن</ListItem>
          <ListItem>مصانع اغذية</ListItem>
          <ListItem>المساكن</ListItem>
          <ListItem>التجمعات طعوم</ListItem>
        </List>
      </Container>
    </div>
  );
}

export default page;
