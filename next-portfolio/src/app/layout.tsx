import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahul Hameed | Technology Business Analyst",
  description:
    "Technology Business Analyst improving operations through systems, data analytics, and automation.",
  applicationName: "Shahul Hameed Portfolio",
  metadataBase: new URL("https://shahulhameed.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shahul Hameed | Technology Business Analyst",
    description:
      "Technology Business Analyst improving operations through systems, data analytics, and automation.",
    url: "https://shahulhameed.site",
    siteName: "Shahul Hameed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahul Hameed | Technology Business Analyst",
    description:
      "Technology Business Analyst improving operations through systems, data analytics, and automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
