import { Box, Container, Grid, Typography } from "@mui/joy";
import React from "react";
import IconCard from "../../icon-card/IconCard";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <MdOutlineDashboardCustomize />,
    name: "حلول مخصصة",
    color: "neutral",
    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات",
  },
  {
    id: 2,
    icon: <GoShieldCheck />,
    name: "إدارة المخاطر",
    color: "success",

    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات",
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    name: "إرشادات الخبراء",
    color: "danger",
    subtitle:
      "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات",
  },
];
function HomeValues() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography
        level="h1"
        fontWeight="lg"
        sx={{ maxWidth: "25ch", margin: "50px auto", textAlign: "center" }}
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        يقدم فريقنا خدمات قيّمة في أي وقت وفي أي موقف
      </Typography>

      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={4}>
            <IconCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeValues;
