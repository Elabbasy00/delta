import { AspectRatio, Box, Card, Container } from "@mui/joy";
import React from "react";

function VideoCard() {
  return (
    <Container>
      <Card
        variant="plain"
        sx={{
          width: "100%",
          bgcolor: "transparent",
        }}
      >
        <Box sx={{ position: "relative", background: "transparent" }}>
          <AspectRatio sx={{ background: "transparent" }} ratio="16/9">
            <figure>
              <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
                style={{}}
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </figure>
          </AspectRatio>
        </Box>
      </Card>
    </Container>
  );
}

export default VideoCard;
