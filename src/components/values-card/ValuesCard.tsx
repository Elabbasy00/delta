import { AspectRatio, Card, CardContent, Chip, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";

function ValuesCard({
  item,
}: {
  item: { name: string; img: string; desc: string };
}) {
  return (
    <Card
      variant="soft"
      orientation="horizontal"
      color="neutral"
      size="lg"
      sx={{
        overflow: "hidden",
        "&:hover": {
          boxShadow: "md",
        },
      }}
    >
      <Image
        src={item.img}
        width={100}
        height={0}
        // sizes="100vw"

        style={{
          margin: "auto",
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
        alt=""
      />

      <CardContent>
        <Typography level="h4" fontWeight="600" id="card-description">
          {item.name}
        </Typography>
        <Typography level="body-md" textColor="neutral.400" mb={1}>
          {item?.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ValuesCard;
