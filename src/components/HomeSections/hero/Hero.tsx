import React from "react";
import TwoColumnsLayout from "../../tow-columns-layout/TowColumnsLayout";
import { Button, Typography } from "@mui/joy";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
function Hero() {
  return (
    <TwoColumnsLayout reversed img="/images/Hero.png">
      <Typography
        level="h1"
        fontWeight="lg"
        fontSize="clamp(1.875rem, 1.3636rem + 3.1818vw, 4rem)"
      >
        <Typography textColor="primary.softBg">دلتا</Typography>، لدينا منظومة
        متكاملة لمكافحة جميع الحشرات
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
        ويُستخدم في صناعات
      </Typography>
      <Button
        component="a"
        href="https://wa.me/+201062347769"
        size="lg"
        endDecorator={<BsWhatsapp fontSize="xl" />}
      >
        تواصل معانا
      </Button>
    </TwoColumnsLayout>
  );
}

export default Hero;
