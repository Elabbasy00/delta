import { Box, Card, Container, Grid, Typography } from "@mui/joy";
import React from "react";

function Statistics() {
  return (
    <Box sx={{ py: 10, my: 8, background: "#F4F4F4" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={3}>
            <Card
              variant="plain"
              sx={{ bgcolor: "transparent", textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
              >
                200
                <Typography fontWeight="xl" textColor="primary.softBg">
                  +
                </Typography>
              </Typography>
              <Typography fontWeight="xl" textColor="primary.softBg">
                عميل
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card
              variant="plain"
              sx={{ bgcolor: "transparent", textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
              >
                98
                <Typography fontWeight="xl" textColor="primary.softBg">
                  k+
                </Typography>
              </Typography>
              <Typography fontWeight="xl" textColor="primary.softBg">
                عدد المبيعات
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card
              variant="plain"
              sx={{ bgcolor: "transparent", textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
              >
                24
                <Typography fontWeight="xl" textColor="primary.softBg">
                  h
                </Typography>
              </Typography>
              <Typography fontWeight="xl" textColor="primary.softBg">
                فريق دعم الخبراء
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card
              variant="plain"
              sx={{ bgcolor: "transparent", textAlign: "center" }}
            >
              <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
              >
                100
                <Typography fontWeight="xl" textColor="primary.softBg">
                  M
                </Typography>
              </Typography>
              <Typography fontWeight="xl" textColor="primary.softBg">
                رضا العملاء
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Statistics;
