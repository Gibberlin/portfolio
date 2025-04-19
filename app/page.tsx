import Type from "@/app/components/type";


export default function Home() {
  return (
      <div id ="Main" className="h-screen pt-40 w-full ease-in transition-colors duration-100 backdrop-blur-lg backdrop-brightness-150 backdrop-contrast-200 dark:backdrop-brightness-50 md:rounded-lg shadow-xl p-8 ">
        <div className="pr-10 p-5 flex flex-col md:flex-row w-full h-100  rounded-xl ">
          <div>
            <Type />
            <p className="max-w-prose italic p-5 md:text-2xl">&ldquo;Oh hey! I&apos;m <b>Syed Yashin Hussain</b>.
                A student 📚, freelance web developer 💻,
                and a proud chai ☕ & coffee addict ☕.
                I juggle classes, client deadlines, and caffeine like a pro 🎯.
                If your website&apos;s broken, I&apos;ll fix it 🛠️. If it&apos;s ugly, I&apos;ll make it shine ✨.
                Just don&apos;t ask me to choose between chai and coffee.... 😮‍💨<br/>we all have our limits 😎.&rdquo;</p>
          </div>
        </div>
      </div>
  );
}
