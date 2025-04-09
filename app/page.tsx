import Image from "next/image";
import {Silkscreen} from "next/font/google"

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
    const images = "/images/this-one.jpg";
  return (
      <div id ="Main" className="h-screen pt-40 w-full ease-in transition-colors">
          <div className={`flex flex-col w-full md:flex-row flex-wrap md:pl-5`}>
              <h1 className={"w-full text-5xl flex-grow p-5 mb-9 font-bold font-Arial"}>Syed Yashin Hussian</h1>
              <p className="max-w-prose italic p-5 md:text-2xl">"Oh hey! I’m Syed Yashin Hussain.
                  A student 📚, freelance web developer 💻,
                  and a proud chai ☕ & coffee addict ☕.
                  I juggle classes, client deadlines, and caffeine like a pro 🎯.
                  If your website’s broken, I’ll fix it 🛠️. If it’s ugly, I’ll make it shine ✨.
                  Just don’t ask me to choose between chai and coffee.... 😮‍💨<br/>we all have our limits 😎."</p>
              <Image src={images} alt="profile picture" width="200" height="300" className='rounded-3xl p-1 border-4 border-blue-900 m-auto' />
          </div>
      </div>
  );
}
