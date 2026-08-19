import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "USA Web App Coder | Website & App Development for Growing Businesses",
  description: "USA-based web design, app development, and digital marketing agency. We turn your idea into a professional website or app that converts. Get a free quote today.",
  metadataBase: new URL("https://usawebappcoder.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "USA Web App Coder | Website & App Development for Growing Businesses",
    description: "USA-based web design, app development, and digital marketing agency. We turn your idea into a professional website or app that converts. Get a free quote today.",
    url: "https://usawebappcoder.com",
    siteName: "USA Web App Coder",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "USA Web App Coder - Website and App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Web App Coder | Website & App Development for Growing Businesses",
    description: "USA-based web design, app development, and digital marketing agency. We turn your idea into a professional website or app that converts. Get a free quote today.",
    images: ["/og-image.png"],
  },
  creator: "USA Web App Coder",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1B33" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <a href="#main" className="skip-link">Skip to main content</a>
        <main id="main">{children}</main>
        <JsonLd />
      </body>
    </html>
  );
}
