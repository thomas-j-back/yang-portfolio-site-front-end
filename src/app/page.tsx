'use client'
import { CasePreview } from './ui_components/case_preview'
import { HeroBanner } from './ui_components/hero_banner/hero_banner'
import { motion } from "framer-motion"
import React from 'react'


export default function Home() {



    return (
        <div>
            {/* hero banner */}
            <HeroBanner />

            <motion.div id="case_previews"
                className="pt-8 px-8 md:px-20 lg:px-32 xl:px-64 2xl:px-96 last:mb-10"
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