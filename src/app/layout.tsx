import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AGBA Consulting — Business. Technology. Intelligence.",
    template: "%s · AGBA Consulting",
  },
  description:
    "We build intelligent systems for ambitious businesses. Strategy, data, automation and artificial intelligence for companies ready to operate smarter.",
  keywords: [
    "technology consulting",
    "data analytics",
    "automation",
    "artificial intelligence",
    "digital transformation",
    "business intelligence",
  ],
  icons: {
    icon: "/logo-favicon.png",
    apple: "/logo-favicon.png",
  },
  openGraph: {
    title: "AGBA Consulting — Business. Technology. Intelligence.",
    description:
      "We build intelligent systems for ambitious businesses. Strategy, data, automation and artificial intelligence.",
    type: "website",
    siteName: "AGBA Consulting",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "AGBA Consulting — Business. Technology. Intelligence.",
    description:
      "We build intelligent systems for ambitious businesses.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <I18nProvider>
          <SmoothScroll>
            <AmbientBackground />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AGBA Consulting",
              slogan: "Business. Technology. Intelligence.",
              description:
                "We build intelligent systems for ambitious businesses.",
            }),
          }}
        />
      </body>
    </html>
  );
}
