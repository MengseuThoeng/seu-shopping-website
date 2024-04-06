import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "../components/layouts/Navbar";
import FooterComponent from "@/components/layouts/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "favicon.ico"
  },
  title: {
    template: "%s - Seu Shopping",
    default: "Seu Seu Shopping",
  },
  description: "This is description shop",
  keywords: ["shop", "anime", "shopping", "store"],
  openGraph: {
    title: {
      template: "%s - Seu Shopping",
      default: "Seu Shopping",
    },
    description: "Ey Kor Louk Del Oy Tae mean luy",
    images: [
      "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <FooterComponent/>
        </body>
    </html>
  );
}
