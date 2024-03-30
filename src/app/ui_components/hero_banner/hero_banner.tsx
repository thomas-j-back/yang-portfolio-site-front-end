import React, { FunctionComponent, useEffect } from 'react'
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HeroImage } from './hero_image'


export const HeroBanner: FunctionComponent = () => {

    const heroImages: any = {
        default: '/hero_banner/ux_designer_1.png',
        culinary: '/hero_banner/culinary.png',
        cat: '/hero_banner/cat_enthusiast.png',
        storyteller: '/hero_banner/storyteller.png'
    }


    //Toggle selected hero image
    let [currentHeroImg, setCurrentHeroImg] = React.useState(heroImages.default)

    const revolveImage = () => {
        let i = 0;
        const keys = Object.keys(heroImages);
        for (let k in heroImages) {
            if (heroImages[k] == currentHeroImg) {
                i = keys.indexOf(k);
            }
        }
        ++i;
        if (i >= keys.length)
            i = 0;

        setCurrentHeroImg(heroImages[keys[i]]);
    }

    useEffect(() => {
        const intervalVals = {
            interval: 5000,
            intervalId: -1
        }
        intervalVals.intervalId = window.setInterval(revolveImage, intervalVals.interval);
        return () => {
            window.clearInterval(intervalVals.intervalId)
        }

    })




    return (
        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} className="hero-banner-bg bg-white text-black pt-8 px-8 pb-16 md:px-20 lg:px-32 xl:px-64 2xl:px-96 flex flex-col justify-center grid  sm:grid-cols-2 grid-cols-1 items-center justify-center gap-0 sm:gap-4">
            <div>
                <div className="font-semibold tracking-tight text-4xl relative z-10">
                    <p>
                        Hi! I&apos;m Yang.</p>
                    <p>
                        <span id="ux_designer" onClick={() => {
                            setCurrentHeroImg(heroImages.default);
                        }} className={`${currentHeroImg == heroImages.default ? 'span-selected' : 'text-hero-highlight'} cursor-pointer relative whitespace-nowrap`}>UX designer
                                <Image
                                src="/hero_banner/highlights/ux_designer_highlight.png"
                                alt="text scribble"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', top: '-12px' }}
                                className={`${currentHeroImg == heroImages.default ? '' : 'hidden'} absolute -z-10`}
                            />
                        </span> by day,
                    </p>
                    <p>
                        <span id="culinary" onClick={() => {
                            setCurrentHeroImg(heroImages.culinary);
                        }} className={`${currentHeroImg == heroImages.culinary ? 'span-selected' : 'text-hero-highlight'} cursor-pointer relative whitespace-nowrap`} >Culinary wizard
                                <Image
                                src="/hero_banner/highlights/culinary_highlight.png"
                                alt="text scribble"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', bottom: '-2px' }}
                                className={`${currentHeroImg == heroImages.culinary ? '' : 'hidden'} absolute -z-10`}
                            />
                        </span> by night,
                    </p>
                    <p>
                        A <span id="cat" onClick={() => {
                            setCurrentHeroImg(heroImages.cat);
                        }} className={`${currentHeroImg == heroImages.cat ? 'span-selected' : 'text-hero-highlight'} cursor-pointer relative whitespace-nowrap`}>cat enthusiast
                                <Image
                                src="/hero_banner/highlights/cat_highlight.png"
                                alt="text scribble"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', right: '5px', bottom: '-5px' }}
                                className={`${currentHeroImg == heroImages.cat ? '' : 'hidden'} absolute -z-10`}
                            />
                        </span> 24/7,
                    </p>
                    <p>
                        and <span id="storyteller" onClick={() => {
                            setCurrentHeroImg(heroImages.storyteller);
                        }} className={`${currentHeroImg == heroImages.storyteller ? 'span-selected' : 'text-hero-highlight'} cursor-pointer relative whitespace-nowrap`}>visual storyteller
                                <Image
                                src="/hero_banner/highlights/storyteller_highlight.png"
                                alt="text scribble"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '127%', right: '-22px', bottom: '-13px' }}
                                className={`${currentHeroImg == heroImages.storyteller ? '' : 'hidden'} absolute -z-10`}
                            />
                        </span>
                    </p>

                </div>
                <div className="relative bottom-10 mt-20 text-xl tracking-normal">
                    <Link href="#case_previews">View Projects <FontAwesomeIcon className="ml-2" icon={faArrowDown} /></Link>
                </div>
            </div>
            <div>
                <HeroImage key={currentHeroImg} imageSrc={currentHeroImg} imageAlt="UX Designer Yang Liu" />
            </div>
        </motion.div>
    )

}