import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";
import Footer from "../components/footer/Footer";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "دالتا",
  description: "دلــتــا ايــجــيــب للحلول المتقدمة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <link rel="manifest" href="/site.webmanifest"></link>
      <body className={cairo.className}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
