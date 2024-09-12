import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const LTWave = localFont({
  src: "./fonts/LTWave-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wibblit Resume Tweaker",
  description:
    "Craft a standout resume with ease using the power of AI. Receive tailored suggestions, optimize your content for specific job roles, and ensure your resume perfectly aligns with job descriptions—designed to accelerate your path to landing your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/lt-wave-2"
          rel="stylesheet"
        />
      </head>
      <body className={`${LTWave.className} antialiased font-custom`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
