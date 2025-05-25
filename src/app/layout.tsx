import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Finsimco",
    absolute: "",
  },
  description: "Simulation of financial markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <main className="px-4 py-5 md:px-10 md:py-8">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
