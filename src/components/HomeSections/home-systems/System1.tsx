import React from "react";
import TowSideLayout from "../../tow-columns-layout/TowColumnsLayout";
import { Box, Button, Chip, Divider, Typography } from "@mui/joy";

function System1() {
  return (
    <TowSideLayout withRadius img="/system1.png">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Chip size="lg" variant="solid" color="primary">
          خدمتنا
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
        لدينا منظومة لتصنيع السماد العضوي (الاسمدة الخضراء )
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
         المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ
        القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل
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
        <Button size="lg" variant="outlined">
          اعرف اكثر
        </Button>
      </Box>
    </TowSideLayout>
  );
}

export default System1;
