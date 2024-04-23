import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";

function ImageCard({ item }: { item: { img: string } }) {
  return (
    <Card variant="plain" sx={{ flexGrow: 1 }}>
      <CardCover>
        <Image src={item.img} fill alt="" />
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={22}
        ></Typography>
      </CardContent>
    </Card>
  );
}

export default ImageCard;
