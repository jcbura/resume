import "./globals.css";
import type { Metadata } from "next";
import { Gupter } from "next/font/google";

const gupter = Gupter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Bura",
  description: "Jason Bura Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gupter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
