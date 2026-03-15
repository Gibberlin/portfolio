"use client"
import { TypeAnimation } from "react-type-animation";





export default function Type() {
    return (
        <div className="m-2 w-full md:w-auto bg-slate-900/80 backdrop-blur-sm border-4 border-green-700 h-20 sm:h-24 md:h-32 flex items-center px-3 sm:px-4 md:px-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-800 tracking-[0.2em] mr-3 sm:mr-4">
                &gt;
            </h1>
            <TypeAnimation
            cursor={false}
             wrapper="span"
                sequence={[
                    "Hello, I'm Yashin!",
                    2000,
                    "I'm a Student",
                    1000,
                    "A Developer",
                    1200,
                    "And a Designer",
                    1200,
                ]}
                repeat={5}
                className="text-lg sm:text-2xl md:text-6xl font-bold text-green-800 inline-block tracking-[0.08em] whitespace-nowrap"
            />
            <span className="text-xl sm:text-2xl md:text-6xl font-bold text-green-800 ml-2">
                _
            </span>
        </div>
    )
}
