import { AspectRatio, Card, CardContent, Typography } from "@mui/joy";
import Image from "next/image";

import React from "react";

function HorizontalIconCard({
  item,
}: {
  item: { name: string; img: string; desc: string };
}) {
  return (
    <Card
      variant="plain"
      orientation="horizontal"
      color="primary"
      sx={{
        boxShadow: "xl",
        bgcolor: "transparent",
        direction: "ltr !important",
        textAlign: "left!important",
        overflow: "hidden",
      }}
    >
      <AspectRatio
        ratio="1"
        sx={{ width: 60, display: { xs: "none", md: "block" } }}
      >
        <Image
          src={item.img}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      </AspectRatio>
      <CardContent
        sx={{
          margin: "auto",
        }}
      >
        <Typography level="h4" id="card-description">
          {item.name}
        </Typography>
        <Typography
          sx={{
            direction: "rtl !important",
            textAlign: "left!important",
          }}
          fontSize="clamp(0.9rem, 1.3636rem + 2.1818vw, 1rem)"
          level="body-lg"
          aria-describedby="card-description"
        >
          {item.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HorizontalIconCard;
