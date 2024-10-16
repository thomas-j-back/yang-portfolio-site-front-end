'use client'
import { HeroImageProps } from '../../../models/ui_components/heroImage'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"


export const HeroImage: FunctionComponent<HeroImageProps> = ({
    imageSrc,
    imageAlt
}) => {
    const [selectedImage, setSelectedImage] = React.useState(imageSrc);
    const [selectedImageAlt, setImageAlt] = React.useState(imageAlt)

    React.useEffect(() => {
        setSelectedImage(imageSrc)
        setImageAlt(imageAlt)
    }, [imageSrc, imageAlt]);

    const imageProps = {
        css: {
            height: 'auto',
            width: 'auto',
        },
    }

    return (
        <AnimatePresence>
            <motion.div
                className="flex justify-center"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={
                    { duration: 0.8, delay: 0.2 }
                }
                animate={{ opacity: 1, y: 0 }}>
                <Image
                    src={selectedImage}
                    alt={selectedImageAlt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={imageProps.css}
                    priority={true}
                />
            </motion.div>
        </AnimatePresence>
    )
}