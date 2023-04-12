import { motion, useScroll } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex  shadow-dark items-center justify-center rounded-full font-semibold bg-dark text-light cursor-pointer absolute py-3 px-6"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {

    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className="flex p-8 shadow-dark items-center justify-center rounded-full font-semibold bg-dark text-light"
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