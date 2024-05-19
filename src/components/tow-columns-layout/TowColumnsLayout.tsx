"use client";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  img: string;
  reversed?: boolean;
  withRadius?: boolean;
}
function TowSideLayout({ img, reversed, children, withRadius }: Props) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        bgcolor: "transparent",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        pt: 15,
        pb: 7,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          // flexDirection: "row",
          flexDirection: reversed ? "row-reverse" : "row",
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "100%",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
            gap: "2rem",
          },
          [`& .${typographyClasses.root}`]: {
            // textWrap: "balance",
          },
        })}
      >
        {children}
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="plain"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: "300",
          alignSelf: "stretch",

          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },

          borderRadius: withRadius ? "4px 35px 4px 35px" : "lg",
          //   bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        <Image
          src={img}
          alt="Programming"
          priority
          quality={100}
          sizes="100vw"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            // transition: "all 0.3s linear",
            // objectFit: "contain",
          }}
        />
      </AspectRatio>
    </Container>
  );
}

export default TowSideLayout;
