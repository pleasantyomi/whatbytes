import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Nav from "@/components/layout/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "whatBytes Assessment",
  authors: [{ name: "Yomi-Adekunle Pleasant" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black overflow-x-hidden`}
      >
        <Header />
        <div className="md:flex md:gap-10">
          <div className="w-3/12">
            <Nav />
          </div>
          <div className="w-full md:pr-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
