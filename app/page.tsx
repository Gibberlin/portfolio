import Image from "next/image";
import Type from "@/app/components/type";

export default function Home() {
    const images = "/images/this-one.jpg";
  return (
      <div id ="Main" className="h-screen pt-40 w-full ease-in transition-colors">
        
          <div className={`flex flex-col w-full md:flex-row flex-wrap md:pl-5 `}>
              <Type />
              <p className="max-w-prose italic p-5 md:text-2xl">&ldquo;Oh hey! I&apos;m <b>Syed Yashin Hussain</b>.
                  A student 📚, freelance web developer 💻,
                  and a proud chai ☕ & coffee addict ☕.
                  I juggle classes, client deadlines, and caffeine like a pro 🎯.
                  If your website&apos;s broken, I&apos;ll fix it 🛠️. If it&apos;s ugly, I&apos;ll make it shine ✨.
                  Just don&apos;t ask me to choose between chai and coffee.... 😮‍💨<br/>we all have our limits 😎.&rdquo;</p>
              <Image src={images} alt="profile picture" width="200" height="300" className='rounded-3xl p-1 border-4 border-blue-900 m-auto' />
          </div>
      </div>
  );
}
