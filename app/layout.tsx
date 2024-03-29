import type { Metadata } from "next";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>{children}</body>
    </html>
  );
}
