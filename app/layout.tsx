import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCP List - Model Context Protocol Server Directory",
  description: "A comprehensive directory of Model Context Protocol (MCP) servers. Discover, explore, and integrate AI-powered tools into your applications.",
  keywords: ["MCP", "Model Context Protocol", "AI", "Claude", "Anthropic", "Server Directory"],
  authors: [{ name: "bookchaowalit" }],
  openGraph: {
    title: "MCP List - Model Context Protocol Server Directory",
    description: "Discover and connect MCP servers for AI-powered applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// SEO TODO: Add Open Graph tags for social sharing
