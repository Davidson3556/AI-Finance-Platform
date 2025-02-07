import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "AI BANK",
  description: "AI FINANCE PLATFORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <main className="min-h-screen">
              {children}
        </main>
    
        {/* footer */}
        <footer className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center
        text-gray-600">
          <p>Davidson</p>
        </div>
        </footer>
      </body>
    </html>
  );
}
