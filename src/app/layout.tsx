import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Тестовое задание: создать форму захвата на базе Tailwind, Vite, Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 min-h-screen flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
