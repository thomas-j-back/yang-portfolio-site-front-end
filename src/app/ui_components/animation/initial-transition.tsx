import { motion } from "framer-motion"
const white_box = {
    initial: {
        height: "100vh",
        bottonm: 0,
    },
    animate: {
        height: 0
    }
}

export const InitialTransition = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                className="relative z-50 w-full bg-black"
                initial="initial"
                animate="animate"
                variants={white_box}
            >

            </motion.div>
        </div>
    )
}