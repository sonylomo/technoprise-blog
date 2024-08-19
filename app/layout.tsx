import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Technoprise Blog",
  description: "Technoprise Global Blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar>{children}</Navbar>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
