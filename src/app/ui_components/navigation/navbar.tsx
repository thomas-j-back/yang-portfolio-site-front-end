import Link from "next/link"
import Image from "next/image"


export default function navBar() {
    return (
        <div className="w-full h-16 fixed top-0 z-10 bg-white px-8 md:px-20 lg:px-28">
            <div className="flex  justify-between mx-auto h-full">
                <div>
                    <Image />
                </div>
                <div className="flex justify-between items-center h-full">
                    <div className="sm:hidden flex hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                    <ul className="hidden sm:flex gap-x-6 text-black">
                        <li>
                            <Link href="/about">
                                <p>Works</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <p>Fun</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>About</p>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}