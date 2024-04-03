import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/common/Navbar";
import StoreProvider from "@/lib/StoreProvider";
import {Toaster} from "@/components/ui/toaster";
import Setup from "@/components/utils/Setup";
import {Suspense} from "react";
import Spinner from "@/components/common/Spinner";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});


export const metadata: Metadata = {
  title: "Full Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
      )}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <StoreProvider>
          <Setup/>
          <Navbar/>
          <Suspense fallback={<Spinner size={300}/>}>
          <main>{children}</main>
          </Suspense>
          <Toaster/>
          <Footer/>
        </StoreProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
