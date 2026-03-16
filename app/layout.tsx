import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/navbar";
import {ThemeProvider} from "next-themes";
import {Silkscreen} from "next/font/google"
import AnalyticsWrapper from "@/app/components/analytics";
import RouteTransition from "@/app/components/route-transition";
import BackgroundPulse from "@/app/components/background-pulse";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Syed Yashin Hussain — Web Developer & Portfolio",
  description:
    "Portfolio of Syed Yashin Hussain — freelance web developer, software projects, skills, and contact info.",

  openGraph: {
    title: "Syed Yashin Hussain — Web Developer",
    description: "Portfolio and projects by Syed Yashin Hussain",
    url: "https://syeds.in/",
    siteName: "Syed Yashin Hussain",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Syed Yashin Hussain Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Syed Yashin Hussain — Web Developer & Portfolio",
    description: "Portfolio and projects by Syed Yashin Hussain",
    images: ["/images/preview.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${silkscreen.className} antialiased`}
      >
        <AnalyticsWrapper />
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem >
        <div className="relative min-h-screen overflow-clip">
          <div
            aria-hidden="true"
            className="background-scene pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-bottom"
            style={{
              backgroundColor: "var(--background)",
              backgroundImage: "url('/images/.picasaoriginals/background.jpg')",
            }}
          />
          <div
            aria-hidden="true"
            className="clouds-drift"
          />
          <BackgroundPulse />
          <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
            <Navbar/>
            <RouteTransition>{children}</RouteTransition>
          </div>
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
