import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./components/NextAuthProvider";
import { MainNav } from "./components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T-Hub",
  description: "AI 과외 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
