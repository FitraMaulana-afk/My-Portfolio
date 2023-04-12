import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import ProfilePic from '../../public/assets/images/deadpool.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Website</title>
        <meta name="description" content="Generate by next app" />
        <meta name="viewport" content="width=device-width,initial-scale = 1" />
        <link rel="icon" href="" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={ProfilePic} alt='Fitra Maulana' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design. " className='!text-6xl !text-left' />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/" target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 border-2 border-solid border-transparent hover:border-dark rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition ease-in-out duration-200'
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:abcdef@gmail.com" target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
