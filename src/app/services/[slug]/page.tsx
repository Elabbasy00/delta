import PageHeader from "@/src/components/page-header/PageHeader";
import TowSideLayout from "@/src/components/tow-columns-layout/TowColumnsLayout";
import { services } from "@/src/data/data";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/joy";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

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
        <Typography>{service?.desc}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            component="a"
            href="https://wa.me/+201062347769"
            size="lg"
            endDecorator={<BsWhatsapp fontSize="xl" />}
          >
            تواصل معانا
          </Button>
          <Button
            variant="outlined"
            size="lg"
            component={Link}
            href="/services"
          >
            اطلب الخدمة
          </Button>
        </Box>
      </TowSideLayout>
      <Container></Container>
    </div>
  );
}

export default page;
