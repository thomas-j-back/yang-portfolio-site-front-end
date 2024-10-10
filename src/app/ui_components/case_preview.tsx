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
    pageRoute,
    layout
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

    const imageProps = {
        css: {
            height: 'auto',
            width: '100%',
            borderRadius: '15px'
        },
        col_css: {

            borderRadius: '1px',
            maxHeight: '17rem',
            objectFit: 'cover'
        }

    }

    return (
        <motion.div className={layout == 'column' ? 'flex flex-col-reverse content-center justify-between sm:gap-x-5 gap-x-1' : "flex flex-col-reverse even:sm:flex-row odd:sm:flex-row-reverse justify-between sm:gap-x-5 gap-x-1 mb-28"}>
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={caseVariants.left} className="max-w-sm flex flex-col justify-between">
                <div className="flex-1">
                    {layout !== 'column' &&
                        <h1 className="font-medium text-3xl">{title}</h1>
                    }

                    <motion.div whileInView="animate" viewport={{ once: true, amount: 0.5 }} transition={caseVariants.transition} initial="initial" variants={profVariants.parent} className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-4 py-6">
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
                <Link className="sm:relative bottom-0 left-0 mt-4 text-md font-medium" href={pageRoute}>
                    View Project <FontAwesomeIcon className="ml-2 text-lg" icon={faArrowRight} />
                </Link>
            </motion.div>
            <motion.div transition={caseVariants.transition} initial="initial" viewport={{ once: true, amount: 0.5 }} whileInView="animate" variants={caseVariants.right} className="pb-6 md:pb-0">
                <Link href={pageRoute}>
                    <Image
                        src={previewImage}
                        width={350}
                        height={350}
                        style={layout == 'column' ? imageProps.col_css : imageProps.css}
                        alt={title}
                    />
                </Link>
                {layout == 'column' &&
                    <h1 className="font-medium text-2xl mt-4">{title}</h1>
                }


            </motion.div>
        </motion.div>)
}
