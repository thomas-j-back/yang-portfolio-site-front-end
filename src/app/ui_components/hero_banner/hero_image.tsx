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

    return (
        <AnimatePresence>
            <motion.div
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
                />
            </motion.div></AnimatePresence >)

    // switch (selectedImage) {
    //     case 'default':
    //         return <Image
    //             src="/hero_banner/ux_designer_1.png"
    //             alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} // option
    //         />
    //     case 'uxDesigner':
    //         return <Image src="" alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} />
    //     case 'culinaryWizard':
    //         return <Image src="" alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} />
    //     case 'catEnthusiast':
    //         return <Image src=""
    //             alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} />
    //     case 'visualStoryTeller':
    //         return <Image src=""
    //             alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} />
    //     default:
    //         return <Image src="/hero_banner/ux_designer_1.png"
    //             alt={selectedImage}
    //             width={0}
    //             height={0}
    //             sizes="100vw"
    //             style={imageProps.css} />

    // }

}