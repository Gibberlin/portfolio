"use client"
import {useTheme} from "next-themes";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    const alien = "/images/alien.gif"
    const {resolvedTheme, setTheme} = useTheme()
    return (
        <div className="m-0 md:rounded-3xl md:p-5 flex flex-row md:flex-col sticky z-50 top-0 w-full md:h- md:w-1/6 md:ml-5 Navbar shadow-lg md:mr-5 mt-4 mb-4 bg-gradient-to-r from-green-400  to-green-900 font-xs dark:bg-green-700  dark:to-green-950">
            <h1 className=" h-full w-full">
                <Link href={"/"} ><Image src={alien} alt="alien" width={10} height={15} className="md:m-auto m-4 p-1 size-10 md:size-auto "/></Link>
            </h1>
            <div className="flex flex-row md:flex-col items-center justify-center">
                <Link href={"/about"} className="text-balance font-bold text-l md:text-2xl p-2 md:p-5 hover:scale-105 transition-transform hover:bg-green-100 hover:border-2 hover:border-green-500 rounded-full hover:text-green-500 hover:shadow-lg hover:shadow-green-900">About</Link>
                <Link href={"/projects"} className="text-balance font-bold text-l md:text-2xl p-2 md:p-5 hover:scale-105 transition-transform hover:bg-green-100 hover:border-2 hover:border-green-500 rounded-full hover:text-green-500 hover:shadow-lg hover:shadow-green-900">Projects</Link>
                <Link href={"/contact"} className="text-balance font-bold text-l md:text-2xl p-2 md:p-5 hover:scale-105 transition-transform hover:bg-green-100 hover:border-2 hover:border-green-500 rounded-full hover:text-green-500 hover:shadow-lg hover:shadow-green-900">Socials</Link>
                <button className="p-2 md:p-5 ease-in-out border-blue-100 hover:rotate-45 transition-transform"
                        onClick={() => {
                            setTheme(resolvedTheme === "light" ? "dark" : "light");
                        }}>{resolvedTheme === "light" ? <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg> : <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>}</button>
            </div>
        </div>
    )
}
