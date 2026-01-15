"use client"
import { TypeAnimation } from "react-type-animation";




export default function Type() {
    return (
        <div className="flex flex-row items-center justify-center text-center m-2 w-full ">
            <TypeAnimation
                sequence={[
                    "Hello, I'm Yashin",
                    1000,
                    "I'm a Student",
                    700,
                    "Also a Web Developer",
                    1200,
                    "And a Designer",
                    700,
                ]}
                repeat={1}
                className="md:text-7xl text-3xl font-bold text-green-500"
            />
        </div>
    )
}
