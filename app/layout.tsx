import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valle Alegre | Fundo La Tiza",
  description: "Parcelas en Valle Alegre, Puchuncaví.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
