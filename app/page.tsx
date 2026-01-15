import Type from "@/app/components/type";
import Head from "next/head";
import Hero from "./components/hero";


export default function Home() {
  return (
    <>
      <Head>
        <title>Syed Yashin Hussain | Home</title>
        <meta name="description" content="Personal portfolio of Syed Yashin Hussain - Student, Developer, and Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="🌏" />
      </Head>
      <div id="Main" className="flex flex-col m-auto h-full pt-40 w-full ease-in transition-colors duration-100 dark:backdrop-brightness-50 dark:backdrop-blur-xl dark:backdriop-contrast-200 p-8 ">
        <div className="m-auto pr-10 p-5 flex md:h-1/2 w-full h-100 md:w-2/3 rounded-xl bg-white dark:backdrop-blur-2xl dark:bg-transparent dark:backdrop-contrast-200 ">
          <div>
            <div className="bg-black h-40 w-80 border-2 border-green-500 rounded-xl">
            <Type />
            </div>
            
            <p className="max-w-prose italic p-5 md:text-2xl">&ldquo;Oh hey! I&apos;m <b>Syed Yashin Hussain</b>.
                A student 📚, freelance web developer 💻,
                and a proud chai ☕ & coffee addict ☕.
                I juggle classes, client deadlines, and caffeine like a pro 🎯.
                If your website&apos;s broken, I&apos;ll fix it 🛠️. If it&apos;s ugly, I&apos;ll make it shine ✨.
                Just don&apos;t ask me to choose between chai and coffee.... 😮‍💨<br/>we all have our limits 😎.&rdquo;</p>
          </div>
        </div>
        <div>
            <Hero />
          </div>
        <div className="m-auto flex flex-col mt-20 p-5 md:h-1/3 w-full h-100 md:w-2/3 rounded-xl bg-white backdrop-blur-xl dark:bg-transparent dark:backdrop-contrast-200  ">
            <h3 className="text-2xl text-green-700 text-center border-b-4 border-green-700">status</h3>
            <p>I am currently pursuing my B.Tech in Computer Science and Engineering at Barak Valley Engineering College (BVEC). 
              As a dedicated and curious student, I have a strong interest in software development, web technologies, and programming. 
              My academic journey so far has helped me build a solid foundation in both theoretical concepts and practical applications. 
              I enjoy exploring new technologies and continuously strive to enhance my skills through hands-on projects and self-learning. 
              Being a part of BVEC has provided me with valuable learning opportunities,
               and I aim to make the most of my time here to grow both academically and personally.</p>
          </div>
         
      </div>
    </>
  );
}
