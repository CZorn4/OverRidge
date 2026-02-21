import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.overridge.com"),
  title: "Independent Financial Advisor Fort Worth, TX - OverRidge Wealth Advisors",
  description:
    "OverRidge Wealth Advisors is an Independent Financial Advisory Firm located in Fort Worth, TX. Serving clients across the U.S.",
  keywords:
    "investment management fort worth, wealth management fort worth, retirement planning fort worth, financial planning fort worth",
  openGraph: {
    type: "website",
    siteName: "OverRidge Wealth Advisors",
    locale: "en_US",
    title: "Independent Financial Advisor Fort Worth, TX - OverRidge Wealth Advisors",
    description:
      "OverRidge Wealth Advisors is an Independent Financial Advisory Firm located in Fort Worth, TX. Serving clients across the U.S.",
    images: ["/images/logo-color.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#0d1724",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
