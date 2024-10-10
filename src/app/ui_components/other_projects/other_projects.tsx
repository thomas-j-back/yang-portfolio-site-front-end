'use client'
import React, { FunctionComponent } from 'react'
import { allProjects } from '../../ui_components/consts'
import { OtherProjectProps } from '../../../models/ui_components/otherProjectProps'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { CasePreview } from '../case_preview'


export const OtherProjects: FunctionComponent<OtherProjectProps> = ({
    currentProjectIndex
}) => {
    const proj_1 = allProjects[((currentProjectIndex + 1) % allProjects.length + allProjects.length) % allProjects.length]
    const proj_2 = allProjects[((currentProjectIndex - 1) % allProjects.length + allProjects.length) % allProjects.length]

    return (
        <div>
            <section className="py-20 px-8 md:px-20 lg:px-32 xl:px-52">
                <h1 className="font-semibold text-3xl mb-8 text-dark-text">
                    Other Projects
                </h1>
                <section className="grid sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-8">
                    <CasePreview
                        title={proj_1.title}
                        proficiencies={proj_1.proficiencies}
                        description=''
                        previewImage={proj_1.previewImage}
                        pageRoute={proj_1.pageRoute}
                        layout="column"
                    ></CasePreview>
                    <CasePreview
                        title={proj_2.title}
                        proficiencies={proj_2.proficiencies}
                        description=''
                        previewImage={proj_2.previewImage}
                        pageRoute={proj_2.pageRoute}
                        layout="column"
                    ></CasePreview>

                </section>
            </section>

        </div>
    )
}