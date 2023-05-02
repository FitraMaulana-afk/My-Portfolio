import { motion, useScroll } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex  shadow-dark dark:shadow-light items-center justify-center rounded-full font-semibold dark:bg-light dark:text-dark bg-dark text-light cursor-pointer absolute py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {

    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm

            "
            >
                <motion.div className="flex p-8 shadow-dark dark:shadow-light dark:bg-light dark:text-dark items-center justify-center rounded-full font-semibold bg-dark text-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <Skill name="HTML" x="-12vw" y="6vw" />
                <Skill name="JavaScript" x="25vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="ReactJs" x="-22vw" y="-4vw" />
                <Skill name="PHP" x="0vw" y="15vw" />
                <Skill name="Laravel" x="20vw" y="-15vw" />
                <Skill name="Next Js" x="-20vw" y="15vw" />
                <Skill name="Figma" x="-30vw" y="-15vw" />

            </div>
        </>
    )
}

export default Skills