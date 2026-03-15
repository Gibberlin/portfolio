import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About — Syed Yashin Hussain | Web Developer</title>

<meta
  name="description"
  content="Learn more about Syed Yashin Hussain — a Web Developer specializing in React, Next.js, JavaScript and Full Stack development."
/>

<link rel="canonical" href="https://syeds.in/about" />

{/* Open Graph */}
<meta property="og:type" content="profile" />
<meta property="og:title" content="About Syed Yashin Hussain — Web Developer" />
<meta
  property="og:description"
  content="Discover the journey, skills, and experience of Syed Yashin Hussain — Web Developer & Software Engineer."
/>
<meta property="og:url" content="https://syeds.in/about" />
<meta property="og:image" content="https://syeds.in/images/preview.png" />

{/* Twitter */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About Syed Yashin Hussain — Web Developer" />
<meta
  name="twitter:description"
  content="Learn more about Syed Yashin Hussain — Web Developer & Software Engineer."
/>
<meta name="twitter:image" content="https://syeds.in/images/preview.png" />
      </Head>
      <div className="min-h-screen flex md:flex-row flex-col md:p-10 w-full">
        <div className="max-w-4xl justify-center align-middle m-auto ">
          <div className="bg-white/70 dark:bg-[#0F172A]/70 backdrop-blur-md border-4 border-[var(--border-color)] p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[var(--text-color)] border-b-4 border-[var(--border-color)] pb-2">
              About Me
            </h1>
            
            <div className="space-y-6 text-lg text-[var(--text-color)]">
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
              <h2 className="text-2xl font-semibold mb-6 text-[var(--text-color)] border-b-4 border-[var(--border-color)] pb-2">Technical Skills</h2>
              <div className="flex flex-col md:flex-row w-full gap-3">
                
                <div className="p-4 bg-[var(--card-bg)] border-4 border-[var(--border-color)] w-full">
                  <h3 className="font-semibold mb-2 text-[var(--text-color)]">Programming Languages</h3>
                  <ul className="list-disc list-inside space-y-1 text-[var(--text-color)]">
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-[var(--card-bg)] border-4 border-[var(--border-color)] w-full">
                  <h3 className="font-semibold mb-2 text-[var(--text-color)]">Web Development</h3>
                  <ul className="list-disc list-inside space-y-1 text-[var(--text-color)]">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-[var(--card-bg)] border-4 border-[var(--border-color)] w-full">
                  <h3 className="font-semibold mb-2 text-[var(--text-color)]">Backend & Databases</h3>
                  <ul className="list-disc list-inside space-y-1 text-[var(--text-color)]">
                    <li>ExpressJS</li>
                    <li>PHP</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>Firebase</li>
                    <li>AWS</li>
                  </ul>
                </div>

                <div className="p-4 bg-[var(--card-bg)] border-4 border-[var(--border-color)] w-full">
                  <h3 className="font-semibold mb-2 text-[var(--text-color)]">Graphics</h3>
                  <ul className="list-disc list-inside space-y-1 text-[var(--text-color)]">
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
