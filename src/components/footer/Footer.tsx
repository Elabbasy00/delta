"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone, MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const BottomIcon = styled(ListItem)(({ theme }) => ({
  fontSize: "1rem",
  transition: "all 0.3s linear",
  color: "#fff",
}));

const FooterLink = styled(ListItem)(({ theme }) => ({
  fontSize: "1.2rem",
  transition: "color 0.3s linear",
  color: "#fff",
}));

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ overflow: "hidden", mt: 8, bgcolor: "primary.solidBg" }}
    >
      <Container sx={{}}>
        <Grid container spacing={3} mt={4} mb={4}>
          <Grid lg={4} md={6} xs={12}>
            <Link href="/">
              <Image
                src={"/White-Logo.png"}
                alt="hewar logo"
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </Link>
            <Typography level="body-md" textColor="neutral.400" mt={2}>
               المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
              منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
              بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو وبشكله
              الأصلا
            </Typography>
            <List
              aria-labelledby="contact-list"
              orientation="horizontal"
              size="md"
              sx={{
                border: "none",
                fontWeight: "bold",
                "--ListItem-paddingY": "0rem",
                "--ListItem-paddingX": ".4rem",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              <a href="https://twitter.com/kaffo_co" target="_blank">
                <BottomIcon>
                  Twitter <BsTwitterX />
                </BottomIcon>
              </a>
              <a href="https://www.instagram.com/kaffo.co" target="_blank">
                <BottomIcon>
                  Instagram <FaInstagram />
                </BottomIcon>
              </a>

              <a href="mailto:kaffo2024@gmail.com">
                <BottomIcon>
                  Facebook <MdFacebook />
                </BottomIcon>
              </a>
            </List>
          </Grid>
          <Grid lg={2} md={6} xs={12}>
            <Typography sx={{ color: "#fff" }} level="h4">
              خدمتنا
            </Typography>
            <List
              orientation="vertical"
              variant="outlined"
              size="md"
              sx={{
                border: "none",

                fontWeight: "bold",
                "--ListItem-paddingY": "0.1rem",
                "--ListItem-paddingX": "0rem",
              }}
            >
              <FooterLink>
                <Link href="/">الـرئـيـسيـة</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/about">مـن نـحـن</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/contact">تـواصـل مـعـانـا</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/services">خـدمـاتـنـا</Link>
              </FooterLink>
            </List>
          </Grid>
          <Grid lg={2} md={6} xs={12}>
            <Typography sx={{ color: "#fff" }} level="h4">
              الـصـفـحـات
            </Typography>
            <List
              orientation="vertical"
              variant="outlined"
              size="md"
              sx={{
                border: "none",
                fontWeight: "bold",

                "--ListItem-paddingY": "0.1rem",
                "--ListItem-paddingX": "0rem",
              }}
            >
              <FooterLink>
                <Link href="/">الـرئـيـسيـة</Link>
              </FooterLink>
              <FooterLink>
                <Link href="/about">مـن نـحـن</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/contact">تـواصـل مـعـانـا</Link>
              </FooterLink>

              <FooterLink>
                <Link href="/services">خـدمـاتـنـا</Link>
              </FooterLink>
            </List>
          </Grid>
          <Grid lg={4} md={6} xs={12}>
            <Typography sx={{ color: "#fff" }} level="h4">
              معلومات التواصل
            </Typography>
            <List
              orientation="vertical"
              variant="outlined"
              size="md"
              sx={{
                border: "none",
                fontWeight: "bold",
                "--ListItem-paddingY": "0.1rem",
                "--ListItem-paddingX": "0rem",
              }}
            >
              <FooterLink>contact@delta.com</FooterLink>
              <FooterLink>+20 10 6234 77 69</FooterLink>
            </List>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#fff" }} />
        <Grid container spacing={2} mt={3} mb={2}>
          <Grid xs={12}>
            <Typography textColor="#fff" fontWeight="bold">
              جميع الحقوق محفوظة © {new Date().getFullYear()} دلتا مصر.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
