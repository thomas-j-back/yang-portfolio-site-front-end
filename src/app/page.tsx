'use client'
import { CasePreview } from './ui_components/case_preview'
import { HeroImage } from './ui_components/hero_banner/hero_image'
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import React from 'react'


export default function Home() {

    const heroImages = {
        default: '/hero_banner/ux_designer_1.png',
        culinary: '/hero_banner/culinary.png',
        cat: '/hero_banner/cat_enthusiast.png',
        storyteller: '/hero_banner/storyteller.png'
    }

    //Toggle selected hero image
    const [currentHeroImg, setCurrentHeroImg] = React.useState(heroImages.default)


    return (
        <div>
            {/* hero banner */}
            <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }} className="hero-banner-bg bg-white text-black pt-8 px-8 pb-16 md:px-20 lg:px-32 xl:px-52 2xl:px-96 flex flex-col justify-center grid  sm:grid-cols-2 grid-cols-1 items-center justify-center gap-0 sm:gap-4">
                <div>
                    <div className="font-bold text-4xl relative z-10">
                        <p>
                            Hi! I&apos;m Yang.</p>
                        <p>
                            <span id="ux_designer" onClick={() => {
                                setCurrentHeroImg(heroImages.default);
                            }} className={`${currentHeroImg == heroImages.default ? 'span-selected' : 'text-hero-highlight'} cursor-pointer relative`}>UX designer
                                <Image
                                    src="/hero_banner/highlights/ux_designer_highlight.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', top: '-12px', 'z-index': '-1' }}
                                    className="absolute"
                                />
                            </span> by day,
                    </p>
                        <p>
                            <span id="culinary" onClick={() => {
                                setCurrentHeroImg(heroImages.culinary);
                            }} className={`${currentHeroImg == heroImages.culinary ? 'span-selected' : 'text-hero-highlight'} cursor-pointer`} >Culinary wizard</span> by night,
                    </p>
                        <p>
                            A <span id="cat" onClick={() => {
                                setCurrentHeroImg(heroImages.cat);
                            }} className={`${currentHeroImg == heroImages.cat ? 'span-selected' : 'text-hero-highlight'} cursor-pointer`}>cat enthusiast</span> 24/7,
                    </p>
                        <p>
                            and <span id="storyteller" onClick={() => {
                                setCurrentHeroImg(heroImages.storyteller);
                            }} className={`${currentHeroImg == heroImages.storyteller ? 'span-selected' : 'text-hero-highlight'} cursor-pointer`}>visual storyteller</span>
                        </p>

                    </div>
                    <div className="relative bottom-10  mt-20 text-xl">
                        <Link href="#case_previews">View Projects <FontAwesomeIcon className="ml-2" icon={faArrowDown} /></Link>
                    </div>
                </div>
                <div>
                    <HeroImage key={currentHeroImg} imageSrc={currentHeroImg} imageAlt="UX Designer Yang Liu" />
                </div>
            </motion.div>

            <motion.div id="case_previews"
                className="pt-8 px-8 md:px-20 lg:px-32 xl:px-52 2xl:px-96 last:mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }} >
                <CasePreview
                    title="E-commerce Check Out Experience"
                    proficiencies={['Product Design', 'Customer Support', 'Shipping Restrictions']}
                    description="Designing a clear information guide, offering product alternatives, implementing zip code checkout control to benefit Customer Care, reduce costs, and enhance user’s satisfaction."
                    previewImage="/ecommerce_site/ecommerce_preview.png"
                    pageRoute="/case_study/ecommerce_site"
                ></CasePreview>
                <CasePreview
                    title="B2B Website Redesign"
                    proficiencies={['Marketing', 'UX/UI Design', 'Accessibility Design']}
                    description="Redesigning Firework’s Website to offer clear product information, build trust, raise awareness, and enhance visitor engagement for this expanding startup."
                    previewImage="/b2b_site/b2b_preview.png"
                    pageRoute="/case_study/b2b_site"
                ></CasePreview>
                <CasePreview
                    title="Branding Identity Design for Donation Application"
                    proficiencies={['Branding Guideline', 'Iconography', 'UI Design']}
                    description="Revamping AngeLink's brand and product with a new logo, a unified brand identity for their website and app, and various promotional materials."
                    previewImage="/angelink/angelink_preview.png"
                    pageRoute="/case_study/angel_link"
                ></CasePreview>
                <CasePreview
                    title="User-Friendly Design System for Streamlined Web Operations"
                    proficiencies={['Prototyping', 'Component Libraries', 'Responsive Design']}
                    description="Creating a design system simplifies collaboration, reduces redundancy, and allows for rapid development and scalability."
                    previewImage="/user_friendly/user_friendly_preview.png"
                    pageRoute="/case_study/angel_link"
                ></CasePreview>
            </motion.div>


            {/* footer */}

        </div >)
}