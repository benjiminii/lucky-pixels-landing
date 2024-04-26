import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../public/grotesque-font/RG-SlimBook.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/grotesque-font/RG-StandardMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/grotesque-font/RG-StandardSemibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/grotesque-font/RG-StandardBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lucky Pixels",
  description: "Your Brand Our Canvas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="bg-black">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
