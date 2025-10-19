import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jana - Portfolio",
  description: "Personal portfolio and career information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col flex-1">
        {children}
      </body>
    </html>
  );
}
