import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins Configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
});

// 🔥 SEO Metadata (Logic Preserved & Untouched)
export const metadata: Metadata = {
  title: {
    default: "Intervexia | AI Interview Preparation Platform",
    template: "%s | Intervexia",
  },
  description:
    "Intervexia is an AI-powered interview preparation platform that helps students practice mock interviews, improve skills, and get job-ready with real-time feedback.",

  keywords: [
    "AI Interview Preparation",
    "Mock Interview Platform",
    "Technical Interview Practice",
    "Placement Preparation",
    "Intervexia",
    "AI Mock Interviews",
    "Interview Feedback AI"
  ],

  authors: [{ name: "Intervexia Team" }],
  creator: "Intervexia",
  publisher: "Intervexia",

  metadataBase: new URL("https://intervexi.com"),

  openGraph: {
    title: "Intervexia - AI Interview Preparation Platform",
    description: "Practice AI-based mock interviews and prepare for placements with Intervexia.",
    url: "https://intervexi.com",
    siteName: "Intervexia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intervexia Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intervexia - AI Interview Preparation",
    description: "Get job-ready with AI-powered mock interviews and real-time feedback.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* CRITICAL FIX: Inline style on HTML ensures the browser paints 
       the background black BEFORE the JS even loads.
    */
    <html
      lang="en"
      className={`dark ${poppins.variable} h-full antialiased scroll-smooth`}
      style={{ backgroundColor: '#020609', colorScheme: 'dark' }}
    >
      <body
        className="min-h-full font-sans selection:bg-[#00D2DF]/20 selection:text-[#00D2DF]"
        style={{ backgroundColor: '#020609' }}
      >
        {children}
      </body>
    </html>
  );
}