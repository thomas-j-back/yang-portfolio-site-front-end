'use client'
import { HeroImageProps } from '../../../models/ui_components/heroImage'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"


export const HeroImage: FunctionComponent<HeroImageProps> = ({
    imageSrc,
    imageAlt
}) => {
    const [selectedImage, setSelectedImage] = React.useState('/hero_banner/ux_designer_1.png');
    const [selectedImageAlt, setImageAlt] = React.useState('UX Designer Yang Liu')

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

    const imageLoader = () => {
        return selectedImage;
    }

    return (
        <AnimatePresence>
            <motion.div
                className="flex items-center justify-center h-100"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={
                    { duration: 0.8, delay: 0.2 }
                }
                animate={{ opacity: 1, y: 0 }}>
                <Image
                    src={selectedImage}
                    loader={imageLoader}
                    alt={selectedImageAlt}
                    width={0}
                    height={0}
                    sizes="100vh"
                    style={imageProps.css}
                    priority
                />
            </motion.div>
        </AnimatePresence>
    )
}