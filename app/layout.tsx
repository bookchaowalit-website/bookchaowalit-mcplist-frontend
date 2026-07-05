import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  {/* Structured Data for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Mcplist',
        url: 'https://bookchaowalit-mcplist.vercel.app',
        description: 'Mcplist by Bookchaowalit - A modern web application',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        author: {
          '@type': 'Person',
          name: 'Bookchaowalit',
          url: 'https://bookchaowalit.com'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Bookchaowalit',
          url: 'https://bookchaowalit.com'
        }
      })
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mcplist',
        url: 'https://bookchaowalit-mcplist.vercel.app',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://bookchaowalit-mcplist.vercel.app/more-projects',
          'query-input': 'required name=search_term'
        }
      })
    }}
  />


        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

// SEO TODO: Add Open Graph tags for social sharing
