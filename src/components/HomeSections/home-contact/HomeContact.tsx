import { Box, Chip, Container, Divider, Typography } from "@mui/joy";
import React from "react";
import ContactForm from "../../contact-form/ContactForm";

function HomeContact() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "primary.solidBg",
          borderRadius: "4px 35px 4px 35px",
          paddingX: { xs: "10px", md: "40px" },
          paddingY: "40px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 7,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
            maxWidth: "20ch",
          }}
        >
          <Chip size="lg" sx={{ color: "#fff" }} variant="soft" color="primary">
            اطلب خدمتك
          </Chip>
          <Divider
            sx={{
              width: 100,
              bgcolor: "primary.softBg",
              height: "2px",
              margin: "auto",
            }}
          />
        </Box>
        <Typography
          level="h1"
          fontWeight="lg"
          textColor="#fff"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
          sx={{ mt: 2, maxWidth: "25ch", textAlign: "center" }}
        >
          ارسل لنا طلبك وسنقوم بتواصل معك في اقرب وقت
        </Typography>
        <ContactForm />
      </Box>
    </Container>
  );
}

export default HomeContact;
