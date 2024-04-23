import { Box, Container, Typography } from "@mui/joy";
import React from "react";

function AboutInfo() {
  return (
    <Box sx={{ py: 10, my: 1, background: "#F4F4F4" }}>
      <Container>
        <Typography
          level="h1"
          fontWeight="md"
          textColor="text.tertiary"
          fontSize="clamp(1.6rem, 1.3636rem + 2.1818vw, 1rem)"
          sx={{ margin: "0 auto", wordSpacing: "2px", lineHeight: "40px" }}
        >
          تآسست شركة الدلتا لمكافحة الحشرات عام ١٩٥٠ و قدمت الكثير من الحلو
          المبتكرة باجود الامكانيات لابادة الحشرات المستعصية بشكل نهائي و فعلا
          تآسست شركة الدلتا لمكافحة الحشرات عام ١٩٥٠ و قدمت الكثير من الحلو
          المبتكرة باجود الامكانيات لابادة الحشرات المستعصية بشكل نهائي و فعلا
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutInfo;
