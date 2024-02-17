'use client'
import React, { FunctionComponent } from 'react'
import { CasePreviewProps } from '../../models/ui_components/casePreview'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"


export const CasePreview: FunctionComponent<CasePreviewProps> = ({
    title,
    proficiencies,
    description,
    previewImage,
    pageRoute
}) => {
    const profVariants = {
        parent: {
            animate: {
                transition: {
                    staggerChildren: 0.1
                }
            }
        },
        block: {
            initial: {
                opacity: 0,
                x: 15
            },
            animate: {
                opacity: 1,
                x: 0
            }
        }
    }
    const caseVariants = {
        transition: {
            duration: 0.5,
            delay: 0.1
        },
        left: {
            initial: {
                opacity: 0,
                x: 20
            },
            animate: {
                opacity: 1,
                x: 0
            }
        },
        right: {
            initial: {
                opacity: 0,
                x: -20
            },
            animate: {
                opacity: 1,
                x: 0
            }
        }

    };

    return (
        <motion.div className="flex flex-col-reverse even:sm:flex-row odd:sm:flex-row-reverse justify-between sm:gap-x-10 gap-x-1 md:mb-10 mb-2">
            <motion.div initial="initial" whileInView="animate" variants={caseVariants.left} className="max-w-sm flex flex-col justify-between">
                <div className="flex-1">
                    <h1 className="font-bold text-3xl ">{title}</h1>
                    <motion.div whileInView="animate" transition={caseVariants.transition} initial="initial" variants={profVariants.parent} className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-4 py-6">
                        {
                            proficiencies.map((name, i) => {
                                return <motion.div variants={profVariants.block} key={i + name} className="font-normal rounded-md py-1 px-3 text-xs bg-accent text-accent-dark">
                                    {name}
                                </motion.div>
                            })
                        }
                    </motion.div>
                    <p className="text-sm font-normal">{description}</p>
                </div>
                <Link className="sm:relative bottom-0 left-0 mt-4 text-md" href={pageRoute}>
                    View Project <FontAwesomeIcon className="ml-2 text-lg" icon={faArrowRight} />
                </Link>
            </motion.div>
            <motion.div transition={caseVariants.transition} initial="initial" whileInView="animate" variants={caseVariants.right} className="pb-6 md:pb-0">
                <Link href={pageRoute}>
                    <Image
                        src={previewImage}
                        width={450}
                        height={400}
                        alt={title}
                    />
                </Link>

            </motion.div>
        </motion.div>)
}
