import Type from "@/app/components/type";
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
        className="flex flex-col w-full max-w-5xl mx-auto h-full md:min-h-screen pt-32 px-4 md:px-8"
      >
        <div className="w-full mx-auto p-4 md:p-6 flex bg-white/70 dark:bg-[#0F172A]/70 backdrop-blur-md border-4 border-[var(--border-color)]">
          <div className="w-full bg-white/70 dark:bg-[#0F172A]/70 backdrop-blur-md px-4 py-6 md:px-6 md:py-8 border-4 border-[var(--border-color)]">
            <Type />
          </div>
        </div>
        <div>
            <Hero />
          </div>
        <div className="w-full mx-auto flex flex-col mt-10 md:mt-16 p-4 md:p-6 bg-white/70 dark:bg-[#0F172A]/70 backdrop-blur-md border-4 border-[var(--border-color)]">
          <h2 className="text-2xl font-semibold text-[var(--text-color)] text-center border-b-4 border-[var(--border-color)] pb-2">
            Status
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-color)]">
            I am currently pursuing my B.Tech in Computer Science and Engineering at Barak Valley Engineering College (BVEC).
            As a dedicated and curious student, I have a strong interest in software development, web technologies, and programming.
            My academic journey so far has helped me build a solid foundation in both theoretical concepts and practical applications.
            I enjoy exploring new technologies and continuously strive to enhance my skills through hands-on projects and self-learning.
            Being a part of BVEC has provided me with valuable learning opportunities, and I aim to make the most of my time here to grow
            both academically and personally.
          </p>
        </div>

      </main>
    </>
  );
}
