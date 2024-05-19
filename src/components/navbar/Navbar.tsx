"use client";
import Box from "@mui/joy/Box";
import React from "react";

import {
  Button,
  Container,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  styled,
} from "@mui/joy";
import { MdMenu } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../active-link/ActiveLink";

const Header = styled(Box)(({ theme }) => ({
  gap: 1,
  border: "none",
  bgcolor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gridColumn: "1 / -1",
  position: "absolute",
  top: 0,
  left: 0,
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  gap: 1,
  border: "none",
  display: "flex",
  flexDirection: "row",
  color: "#fffff",
  justifyContent: "space-between",
  alignItems: "center",
  gridColumn: "1 / -1",
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
  // position: "absolute",
}));

const Logo = styled(Image)(({ theme }) => ({
  width: 100,
  height: 70,
  [theme.breakpoints.down("md")]: {
    width: 100,
    height: 60,
  },
}));

function Navbar() {
  return (
    <Container sx={{ position: "relative" }}>
      <Header
        sx={{ px: { xs: 2, md: 4 } }}
        component="header"
        className="Header"
      >
        <HeaderWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // flexGrow: { md: 1, xs: 1 },
            }}
          >
            <Link href="/">
              <Logo src="/Logo.svg" width={100} height={60} alt="Kaffo Logo" />
            </Link>
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <ActiveLink href="/" name="الرئيسية" />
            <ActiveLink href="/about" name="من نحن" />
            <ActiveLink href="/services" name="خدماتنا" />
            <ActiveLink href="/contact" name="اتصل بنا" />
          </Box>

          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Button component={Link} href="/contact">
              تواصل معانا
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { md: "none", xs: "flex" },
                flexDirection: "row",
                gap: 3,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button component={Link} href="/contact">
                تواصل معانا
              </Button>
              <Dropdown>
                <MenuButton size="sm" color="primary" variant="solid">
                  <MdMenu />
                </MenuButton>
                <Menu
                  sx={{ zIndex: "200000", paddingX: 2 }}
                  color="neutral"
                  variant="soft"
                >
                  <MenuItem component={Link} href="/">
                    الـرئـيـسـيـة
                  </MenuItem>
                  <MenuItem component={Link} href="/about">
                    مـن نـحـن
                  </MenuItem>
                  <MenuItem component={Link} href="/services">
                    خـدمـاتـنـا
                  </MenuItem>
                  <MenuItem component={Link} href="/contact">
                    اتـصـل بـنـا
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Box>
          </Box>
        </HeaderWrapper>
      </Header>
    </Container>
  );
}

export default Navbar;
