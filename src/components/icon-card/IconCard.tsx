import * as React from "react";
import Avatar from "@mui/joy/Avatar";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";

interface Props {
  item: {
    icon: React.JSX.Element;
    name: string;
    subtitle: string;
    color: any;
  };
}
export default function IconCard({ item }: Props) {
  return (
    <Card
      variant="plain"
      sx={{
        maxWidth: "100%",
        bgcolor: "transparent",
      }}
    >
      <CardContent sx={{ alignItems: "start", textAlign: "start", gap: 2 }}>
        <Avatar
          color={item.color}
          variant="soft"
          sx={{ "--Avatar-size": "4rem" }}
        >
          {item.icon}
        </Avatar>

        <Typography
          level="h1"
          fontWeight="lg"
          fontSize="clamp(1.5rem, 1.3636rem + 1.1818vw, 1rem)"
        >
          {item.name}
        </Typography>
        <Typography level="body-sm">{item.subtitle}</Typography>
      </CardContent>
    </Card>
  );
}
