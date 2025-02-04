import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vignon Adjanohoun",
  description: "Senior Software Engineer with 10+ years of experience | Java | Ruby on Rails | React Native | Node | AWS | TDD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased bg-[#7c5f71]`}
      >
        {children}
      </body>
    </html>
  );
}
