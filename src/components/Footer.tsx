import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
    return (
        <footer className="w-ful border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:pt-2">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    Buid With <span className="text-primary text-2xl px-1">&#9825;</span>
                    by&nbsp;<Link href="/" className="underline underline-offset-2"
                        target="_blank"
                    >FitraMaulana</Link>
                </div>
                <Link href="/" target="_blank">Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer