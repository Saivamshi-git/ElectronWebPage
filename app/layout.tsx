import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: "Electron - AI Agent",
  description: "Giving AI Hands & Eyes on Windows. The desktop bridge for LLMs.",
  // This tells the browser to use your skull image
  icons: {
    icon: '/skull.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Added 'bg-[#0A0A0A]' to match your theme
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}