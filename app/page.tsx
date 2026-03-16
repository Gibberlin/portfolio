import Type from "@/app/components/type";
import PlayerStats from "@/app/components/player-stats";
import Head from "next/head";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Syed Yashin Hussain — Web Developer & Portfolio</title>
        <meta name="description" content="Portfolio of Syed Yashin Hussain — freelance web developer, software projects, skills, and contact info." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Syed Yashin Hussain — Web Developer" />
        <meta property="og:description" content="Portfolio and projects by Syed Yashin Hussain" />
        <meta property="og:image" content="https://syeds.in/images/preview.png" />
       
         {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syed Yashin Hussain — Web Developer & Portfolio" />
        <meta name="twitter:description" content="Portfolio and projects by Syed Yashin Hussain" />
        <meta name="twitter:image" content="https://syeds.in/images/preview.png" />
        {/*Whatsapp */}
        <meta name="whatsapp:card" content="summary_large_image" />
        <meta name="whatsapp:title" content="Syed Yashin Hussain — Web Developer & Portfolio" />
        <meta name="whatsapp:description" content="Portfolio and projects by Syed Yashin Hussain" />
        <meta name="whatsapp:image" content="https://syeds.in/images/preview.png" />
        <meta property="og:url" content="https://syeds.in/" />
        <meta property="og:type" content="website" />


        {/* favicon */}
        <link rel="icon"type="image/png" href="./favicon.ico" />
        
      </Head>
      <main
        id="Main"
        className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col overflow-hidden px-3 pb-8 pt-24 sm:px-4 sm:pb-10 sm:pt-28 md:min-h-screen md:px-8 md:pb-16 md:pt-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 top-20 h-36 animate-terminal-glow rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(30,238,12,0.18),transparent_68%)] blur-2xl sm:inset-x-4 sm:top-24 sm:h-48 md:inset-x-8"
        />
        <section className="terminal-reveal terminal-delay-1 w-full">
          <Type />
        </section>
        <section className="terminal-reveal terminal-delay-2 mt-6 sm:mt-8 md:mt-10">
          <Hero />
        </section>
        <section className="terminal-panel terminal-reveal terminal-delay-3 mt-8 flex flex-col md:mt-16">
          <PlayerStats />
        </section>
      </main>
    </>
  );
}
