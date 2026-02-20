// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio_nextjs" : "";

export const metadata: Metadata = {
  title: {
    default: "Kale Praveen Raj | Full Stack Developer",
    template: "%s | Kale Praveen Raj",
  },
  description:
    "Kale Praveen Raj - Full Stack Developer specializing in modern web technologies and scalable applications.",

  icons: {
    icon: `${basePath}/logo2.png`,
    shortcut: `${basePath}/logo2.png`,
    apple: `${basePath}/logo2.png`,
  },

  openGraph: {
    title: "Kale Praveen Raj | Full Stack Developer",
    description:
      "Full Stack Developer creating scalable, high-performance applications.",
    url: "https://kalepraveenraj.github.io/portfolio_nextjs",
    siteName: "Kale Praveen Raj Portfolio",
    images: [
      {
        url: `${basePath}/logo2.png`,
        width: 800,
        height: 600,
        alt: "Kale Praveen Raj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kale Praveen Raj | Full Stack Developer",
    description:
      "Full Stack Developer creating scalable, high-performance applications.",
    images: [`${basePath}/logo2.png`],
  },

  themeColor: "#1b253d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[rgb(27,37,61)] text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
