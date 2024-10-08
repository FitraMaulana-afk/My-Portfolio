import { motion } from "framer-motion"
import Link from "next/link"

const MotionLink = motion(Link)

const Logo = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-2 relative">
                <MotionLink href="/"
                    className="w-16 h-16 bg-dark flex rounded-full dark:border-light border border-solid border-transparent text-2xl font-bold text-light items-center justify-center"
                    whileHover={{
                        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)"],
                        transition: { duration: 1, repeat: Infinity },
                    }}
                >FM</MotionLink>
            </div>
        </>
    )
}

export default Logo