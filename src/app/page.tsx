'use client'
import { CasePreview } from './ui_components/case_preview'
import { HeroBanner } from './ui_components/hero_banner/hero_banner'
import { motion } from "framer-motion"
import React from 'react'
import { allProjects } from './ui_components/consts'


export default function Home() {



    return (
        <div>
            {/* hero banner */}
            <HeroBanner />

            <motion.div id="case_previews"
                className="pt-8 px-8 md:px-20 lg:px-32 xl:px-64 2xl:px-96 last:mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }} >
                {
                    allProjects.map((proj, i) => {
                        return <CasePreview
                            title={proj.title}
                            proficiencies={proj.proficiencies}
                            description={proj.description}
                            previewImage={proj.previewImage}
                            pageRoute={proj.pageRoute}
                        ></CasePreview>
                    })
                }

            </motion.div>


            {/* footer */}

        </div >)
}