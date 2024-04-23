import { Box, Container, Grid, Typography } from "@mui/joy";
import React from "react";

import { OurValuesData } from "@/src/data/data";
import ValuesCard from "../../values-card/ValuesCard";

function OurValues() {
  return (
    <Box mt={10}>
      <Container>
        <Typography level="h2" fontWeight="800" mb={5} textAlign="center">
          القصة والقيم وراء
          <br /> شركتنا
        </Typography>
        <Grid container spacing={2}>
          {OurValuesData.map((item) => (
            <Grid md={6} xs={12} key={item.name}>
              <ValuesCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default OurValues;
