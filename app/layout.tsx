import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quirke Inmobiliaria | Inversión es visión",
  description: "Quirke Inmobiliaria | Inversión es visión",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
