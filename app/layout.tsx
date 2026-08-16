import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen Nebari",
  description: "Step-by-step recipes with built-in cooking timers.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=2",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  appleWebApp: {
    capable: true,
    title: "Kitchen Nebari",
  },
};

export const viewport: Viewport = {
  themeColor: "#365d49",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}