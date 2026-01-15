"use client"
import { TypeAnimation } from "react-type-animation";





export default function Type() {
    return (
        <div className="flex flex-row items-center   m-2 w-full ">
            <h2 className="md:text-7xl text-2xl font-bold text-green-500 m-2">&gt;</h2>
            <TypeAnimation
            cursor={false}
             wrapper="span"
                sequence={[
                    "Hello, I'm Yashin",
                    2000,
                    "I'm a Student",
                    1000,
                    "Also a Web Developer",
                    1200,
                    "And a Designer",
                    1200,
                ]}
                repeat={30}
                className="md:text-7xl text-3xl font-bold text-green-500 inline-block m-2 "
            />
        </div>
    )
}
