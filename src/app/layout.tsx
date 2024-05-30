import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/morph/bootstrap.css"
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Santisteban Portafolio",
  description: "Mi portafolio digital personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
