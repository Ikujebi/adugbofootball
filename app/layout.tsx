
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adugbo Football League | Community Football, Organized",
    template: "%s | Adugbo Football League",
  },
  description:
    "Organize community football competitions, manage teams and players, track fixtures, publish results and follow league standings with Adugbo Football League.",
  applicationName: "Adugbo Football League",
  keywords: [
    "Adugbo Football League",
    "community football",
    "football league management",
    "football competitions",
    "street football",
    "Nigeria football",
  ],
};

export const viewport: Viewport = {
  themeColor: "#102B20",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
