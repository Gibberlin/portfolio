"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";

const navItems = [
    {href: "/about", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/contact", label: "Socials"},
]

export default function Navbar() {
    const alien = "/images/alien.gif"
    const pathname = usePathname()
    const {resolvedTheme, setTheme} = useTheme()

    return (
        <nav
            aria-label="Primary"
            className="Navbar sticky top-0 z-50 flex flex-row items-center gap-3 border-b-4 border-[var(--border-color)] px-3 py-2 text-[var(--nav-text)] backdrop-blur-md md:h-screen md:w-64 md:flex-col md:justify-start md:gap-6 md:border-b-0 md:border-r-4 md:px-5 md:py-6 lg:w-72"
            style={{
                backgroundColor: "var(--nav-surface)",
                boxShadow: "var(--nav-shadow)",
            }}
        >
            <h1 className="flex shrink-0 w-auto justify-center md:w-full">
                <Link href="/" aria-label="Home">
                    <Image src={alien} alt="" width={10} height={15} className="m-1 p-1 size-10 sm:size-11 md:m-4 md:size-44 lg:size-48" />
                </Link>
            </h1>

            <div className="flex min-w-0 flex-1 flex-row items-center justify-start gap-1.5 overflow-x-auto rounded-full bg-black/5 px-1.5 py-1 scrollbar-none dark:bg-white/5 md:w-full md:flex-col md:justify-start md:gap-2 md:overflow-visible md:rounded-none md:bg-transparent md:px-0 md:py-0 md:dark:bg-transparent">
                {navItems.map(({href, label}) => {
                    const isActive = pathname === href

                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            data-active={isActive ? "true" : "false"}
                            className="menu-item inline-flex min-h-10 min-w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold text-[var(--nav-text)] transition-[color,transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:min-h-11 sm:px-4 md:w-full md:justify-start md:px-5 md:py-3 md:text-2xl"
                        >
                            {label}
                        </Link>
                    )
                })}

                <button
                    type="button"
                    aria-label={resolvedTheme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                    aria-pressed={resolvedTheme === "dark"}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border p-2 transition-transform duration-150 ease-out hover:rotate-12 focus-visible:rotate-12 sm:h-11 sm:w-11 md:h-14 md:w-14 md:self-center md:p-3"
                    style={{
                        backgroundColor: "var(--nav-button-bg)",
                        borderColor: "var(--nav-button-border)",
                    }}
                    onClick={() => {
                        setTheme(resolvedTheme === "light" ? "dark" : "light");
                    }}
                >
                    {resolvedTheme === "light" ? <svg
                        className="swap-on h-8 w-8 fill-current md:h-10 md:w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                    </svg> : <svg
                        className="swap-off h-8 w-8 fill-current md:h-10 md:w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                    </svg>}
                </button>
            </div>
        </nav>
    )
}
