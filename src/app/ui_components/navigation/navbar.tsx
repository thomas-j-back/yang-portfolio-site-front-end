import Link from "next/link"
import Image from "next/image"


export default function navBar() {
    return (

        <div className="w-full h-16 fixed top-0 z-10 bg-white px-8 md:px-20 lg:px-28">
            <div className="flex  justify-between mx-auto h-full">
                <div>
                    <Image />
                </div>
                <div className="hidden sm:flex justify-between items-center h-full">
                    <ul className="flex gap-x-6 text-black">
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