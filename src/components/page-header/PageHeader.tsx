import { Box, Container, Typography } from "@mui/joy";
import React from "react";
interface Props {
  title: string;
  highlight?: string;
}

function PageHeader({ title, highlight }: Props) {
  return (
    <Box
      sx={{
        py: "20vh",
        backgroundImage: "url(/background-pattern.png)",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            level="h1"
            fontWeight="lg"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
            maxWidth="25ch"
            sx={{ margin: "0 auto" }}
          >
            <Typography textColor="primary.softBg">{highlight}</Typography>
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PageHeader;
