import { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dxrery Networks — Minecraft Server",
    template: "%s | Dxrery Networks",
  },
  description:
    "Welcome to Dxrery Networks — an immersive Minecraft server experience. Explore our wiki, guides, ranks, and more.",
  keywords: [
    "Minecraft",
    "Minecraft Server",
    "Dxrery Networks",
    "Dxrery",
    "MC Server",
    "RPG",
    "Wiki",
  ],
  openGraph: {
    title: "Dxrery Networks — Minecraft Server",
    description:
      "Welcome to Dxrery Networks — an immersive Minecraft server experience.",
    type: "website",
    siteName: "Dxrery Networks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
