import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/navbar";
import {ThemeProvider} from "next-themes";
import {Silkscreen} from "next/font/google"
import AnalyticsWrapper from "@/app/components/analytics";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
})


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const helvetica =localFont({src: "./fonts/helvetica-regular.otf",
//     variable: "--font-helvetica",
//     weight: "100 900",
// });

export const metadata = {
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
        url: "https://syeds.in/images/preview.png",
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
    images: ["https://syeds.in/images/preview.png"],
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
        <div className="flex md:flex-row flex-col min-h-screen overflow-clip bg-[url(/images/background.jpg)] bg-cover bg-no-repeat md:bg-repeat-x md:bg-contain ">
          <Navbar/>
          {children}
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
