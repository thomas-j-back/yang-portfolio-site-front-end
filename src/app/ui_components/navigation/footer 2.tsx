import Link from "next/link"
import navConfig from "./navconfig"

export default function footerBar() {
    return (
        <div className="bg-footer py-12 px-8 md:px-20 lg:px-32 xl:px-52">
            <p className="font-bold text-3xl mb-10">Thanks for stopping by, Let&apos;s chat!</p>
            <div className="flex sm:flex-row flex-col justify-between gap-x-4">
                <div>
                    <p className="mb-5">CONTACT ME</p>
                    <p className="mb-10">yangliudesignerus@gmail.com</p>
                    <p className="mb-5">LET&apos;S CONNECT</p>
                    <div className="flex flex-column gap-3">
                        <Link href="#">Linkedin</Link>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Resume</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between text-2xl mt-10 sm:mt-0">
                    <a href={navConfig.WORK}>Works</a>
                    <a href={navConfig.FUN}>Fun</a>
                    <a href={navConfig.ABOUT}>About</a>
                </div>
            </div>
        </div>
    )
}