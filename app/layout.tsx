import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page.jsx";
import Footer from "./components/Footer/page.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-zap",
  description: "Site restaurant d-zap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
