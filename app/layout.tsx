import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Maurya Refrigeration — Spare Parts for Fridge, Washing Machine, Microwave & AC | Chandigarh",
    template: "%s | Maurya Refrigeration",
  },
  description:
    "Maurya Refrigeration, Kajheri Sector 52 Chandigarh. All kinds of spare parts for washing machines, microwaves, refrigerators and air conditioners. 25+ years of experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <TopBar />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
