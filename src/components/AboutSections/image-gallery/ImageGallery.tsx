import { imageGallery } from "@/src/data/data";
import { Box, Container, Grid, Typography } from "@mui/joy";
import React from "react";
import ImageCard from "../../image-card/ImageCard";

function ImageGallery() {
  return (
    <Box mt={10}>
      <Container>
        <Typography level="h2" fontWeight="800" mb={5} textAlign="center">
          معرض الصور
        </Typography>
        <Grid container spacing={1}>
          {imageGallery.map((item) => (
            <Grid lg={3} md={4} sm={6} xs={12} key={item.id}>
              <ImageCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ImageGallery;
