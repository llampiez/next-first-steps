import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
