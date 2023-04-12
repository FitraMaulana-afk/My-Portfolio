import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import TwitterIcon, { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1.5px] inline-block bg-dark 
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav className=''>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>
      <Logo />
      <nav className='flex justify-center items-center flex-wrap'>
        <motion.a href="/" target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-2'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href="/" target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'
        >
          <GithubIcon />
        </motion.a>
        <motion.a href="/" target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="/" target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-2'
        >
          <PinterestIcon />
        </motion.a>
        <motion.a href="/" target='_blank'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-2'
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className='absolute hidden left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
