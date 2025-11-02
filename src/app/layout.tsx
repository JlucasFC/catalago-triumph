// import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen"`}
      >
        <Header/>
        <main className="mx-10 md:mx-16 overflow-hidden">
        {children}
        </main>
      </body>
    </html>
  );
}
