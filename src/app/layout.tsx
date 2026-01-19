import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow global CSS side-effect import in Next.js
import "./globals.css";
// Si moviste la carpeta a src/components, esta es la ruta correcta:
import {Navbar} from "../Components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Survival Gear Pro | Equipo Táctico",
  description: "Reseñas de supervivencia 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {/* En v4, flex-grow es totalmente válido. El error era la ruta del Navbar */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}