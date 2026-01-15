import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Syed Yashin Hussain | About</title>
        <meta name="description" content="Learn more about Syed Yashin Hussain - Skills, Experience, and Background" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="ℹ️" />
      </Head>
      <div className="min-h-screen flex md:flex-row flex-col md:p-10 w-full">
        <div className="max-w-4xl justify-center align-middle m-auto ">
          <div className="backdrop-blur-lg backdrop-brightness-150 backdrop-contrast-200 dark:bg-transparent dark:backdrop-blur-2xl dark:backdrop-brightness-50 dark:backdrop-contrast-200 md:rounded-lg shadow-xl p-8  ">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-bold">
              About Me
            </h1>
            
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                Hi, I&apos;m Yashin! I&apos;m a passionate software and web developer with expertise in C, C++, Java, and Python. 
                For web development, I specialize in JavaScript, TypeScript, React, and Next.js, along with backend technologies 
                like ExpressJS, PHP, and NodeJS. I also work with MySQL and NoSQL databases like Firebase and AWS.
              </p>
              
              <p className="leading-relaxed">
                I love building efficient, scalable, and user-friendly applications. My GitHub showcases several projects that 
                reflect my skills and creativity. Always eager to learn and innovate, I&apos;m open to new challenges and collaborations!
              </p>
            </div>

            <div className="mt-12 ">
              <h2 className="text-2xl font-semibold mb-6 text-semibold">Technical Skills</h2>
              <div className="flex flex-col md:flex-row w-full gap-3">
                
                <div className="p-4 bg-green-100 dark:bg-green-700 rounded-lg w-full">
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-100 dark:bg-green-700 rounded-lg w-full">
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-100 dark:bg-green-700 rounded-lg w-full">
                  <h3 className="font-semibold mb-2">Backend & Databases</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>ExpressJS</li>
                    <li>PHP</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>Firebase</li>
                    <li>AWS</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-100 dark:bg-green-700 rounded-lg w-full">
                  <h3 className="font-semibold mb-2">Graphics</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Blender</li>
                    <li>GIMP</li>
                    <li>Figma</li>
                    <li>Inkscape</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
