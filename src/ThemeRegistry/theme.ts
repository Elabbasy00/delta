import { extendTheme } from "@mui/joy/styles";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: ["var(--joy-fontFamily-fallback)"], // use Joy UI's fallback font
  display: "swap",
  preload: true,
  variable: "--font-cairo",
});

const theme = extendTheme({
  direction: "rtl",
  fontFamily: {
    body: cairo.style.fontFamily,
    display: cairo.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        text: {},
        background: {},
        primary: {
          solidBg: "#0D75B8",
          softBg: "#3B8FC5",
        },
        neutral: {},
      },
    },
    dark: {
      palette: {
        background: {
          body: "rgb(16, 20, 24)",
          surface: "rgba(16, 20, 24, 0.8)",
        },
      },
    },
  },

  components: {
    JoyButton: {
      styleOverrides: {},
    },
  },
});

export default theme;
