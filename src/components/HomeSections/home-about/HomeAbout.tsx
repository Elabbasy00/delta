import React from "react";
import TowSideLayout from "../../tow-columns-layout/TowColumnsLayout";
import { Box, Button, Chip, Divider, Typography } from "@mui/joy";
import Link from "next/link";

function HomeAbout() {
  return (
    <Box>
      <TowSideLayout withRadius reversed img="/home-about.png">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Chip size="lg" variant="solid" color="primary">
            من نحن
          </Chip>
          <Divider
            sx={{
              width: 100,
              bgcolor: "primary.softBg",
              height: "2px",
              margin: "auto",
            }}
          />
        </Box>
        <Typography
          level="h1"
          fontWeight="lg"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 4rem)"
        >
          <Typography textColor="primary.softBg">دلتا</Typography>، لدينا منظومة
          متكاملة لمكافحة جميع الحشرات
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          لدينا خبرة في مكافحة الحشرات، وتصنيع الاسمدة و المعقمات و تصنيع تصنيع
          أسمدة عضوية نيتروجينية، إزالة املاح من خطوط مياه البطاريات النبل و
          تنظيفها من الشوائب و املاح
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            my: 2,
            flexWrap: "wrap",
            "& > *": { flex: "auto" },
          }}
        >
          <Button
            size="lg"
            variant="outlined"
            component={Link}
            href="/services"
          >
            خـدمـتـنـا
          </Button>
        </Box>
      </TowSideLayout>
    </Box>
  );
}

export default HomeAbout;
