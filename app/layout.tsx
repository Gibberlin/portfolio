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

export const metadata: Metadata = {
  title: "Syed Yashin Hussain",
  description: "Student, Developer, Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AnalyticsWrapper />
      <body
        className={`${silkscreen.className} antialiased`}
      >
      <ThemeProvider defaultTheme="system" attribute="class" enableSystem >
        <div className="flex md:flex-row flex-col min-h-screen transition-colors ease-in-out w-full overflow-clip">
          <Navbar/>
          {children}
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
