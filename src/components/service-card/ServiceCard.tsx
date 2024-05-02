import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import MuiLink from "@mui/joy/Link";

import Typography from "@mui/joy/Typography";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: {
    id: number;
    img: string;
    name: string;
    desc: string;
  };
}
export default function ServiceCard({ item }: Props) {
  return (
    <Card variant="plain" sx={{ maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio ratio="10 / 9" sx={{ minWidth: 200 }}>
          <Image
            src={item.img}
            loading="lazy"
            alt=""
            width={100}
            height={100}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <MuiLink
          component={Link}
          href={`/services/${item.name}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
        >
          <Typography
            level="h3"
            fontWeight="lg"
            fontSize="clamp(1.3rem, 1.3636rem + 1.1818vw, 1rem)"
          >
            {item.name}
          </Typography>
        </MuiLink>

        <Typography level="body-sm">{item?.desc?.slice(0, 100)}...</Typography>
      </CardContent>
    </Card>
  );
}
