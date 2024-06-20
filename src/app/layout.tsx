import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Just Another Image Converter",
  description: "Open Source, Free to use, image converter app that requires no signups, allows multiple unlimited image uploads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
