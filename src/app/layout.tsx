import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Ordering App | Vincent Cheung's project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={cn(
            "flex flex-col mx-auto justify-center items-center px-6",
            inter.className
          )}
        >
          <main>
            <Navbar />
            {children}
            <Toaster />
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
