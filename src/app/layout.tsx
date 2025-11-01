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
        className={`antialiased`}
      >
        <Header/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
