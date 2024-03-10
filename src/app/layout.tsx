import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Reacton",
  description: "Stay high",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen justify-center bg-stone-400 pb-24 pt-32 ">
          <div className="flex w-[1440px] flex-wrap max-md:gap-12">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
