import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";
import Footer from "../components/footer/Footer";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "دالتا لمكافحة جميع انواع الحشرات",
  description: "دلــتــا ايــجــيــب للحلول المتقدمة",
  keywords:
    "مكافحة الصراصير و تعقيم المساكن, مكافحة الناموس, مكافحة الفئران, مكافحة الذبابة البيضاء, حشرة الفاش, السوس المتواجد بالعنابر, معقمات, مطهرات, تصنيع أسمدة عضوية نيتروجينية, إزالة العفن الاسود من على أوراق أشجار الفواكه,إعداد منظومة التعقيم و التطهير لمداخل و مخارج مزارع الدواجن، إزالة الاملاح من خطوط مياه البطاريات، تنظيف و إزالة الاملاح و الكلس و الفطريات، تنظيف و تعقيم حمامات السباحة، غسيل خلايا التبريد لمزارع الدواجن، مكافحة ذباب المزارع، مكافحة الابراص و السحالى، مكافحة النمل و الخنافس، إزالة الدهون و المواد العضوية بالمجازر، القضاء على برغوث الفراش، مكافحة حشرة الفراش",
  authors: [{ name: "Ahmed Elabbasy" }],
  openGraph: {
    title: "دالتا لمكافحة جميع انواع الحشرات",
    description: "دلــتــا ايــجــيــب لمكافحة جميع اتواع الحشرات ",
  },
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
          <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
