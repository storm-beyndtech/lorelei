import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "LORELEI ELISABETH JOHN",
  description:
    "Welcome to Financial Coach Hub, led by Lorelei Elisabeth John. We're dedicated to helping you achieve financial success through personalized coaching and expert guidance. Take control of your finances, build wealth, and reach your goals with us by your side. Start your journey to financial freedom today!",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const panchang = localFont({
  src: "../public/fonts/Panchang-Variable.ttf",
  display: "swap",
  variable: "--font-panchang",
});

const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const bagero = localFont({
  src: "../public/fonts/Bagero.otf",
  display: "swap",
  variable: "--font-bagero",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${panchang.variable} ${montserrat.variable} ${bagero.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
