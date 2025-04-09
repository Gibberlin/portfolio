"use client"
import { TypeAnimation } from "react-type-animation";

export default function Type() {
    return (
        <div className="flex flex-row items-center justify-center m-2">
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
                className="text-7xl font-bold text-green-500"
            />
        </div>
    )
}
