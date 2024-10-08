import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import TwitterIcon, { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();


  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1.5px] inline-block bg-dark dark:bg-light
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }


  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1.5px] inline-block bg-light dark:bg-dark
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative
    z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button className="flex flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className=''>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          <CustomLink href="/articles" title="Articles" className='ml-4' />
        </nav>
        {/* <Logo /> */}
        <nav className='flex justify-center items-center flex-wrap'>
          <motion.a href="/" target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-2'
          >
            <TwitterIcon />
          </motion.a>
          <motion.a href="https://github.com/FitraMaulana-afk" target='_blank'
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
            <PinterestIcon className="bg-light rounded-full" />
          </motion.a>
          <motion.a href="/" target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 ml-2'
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center roundefd-full p-1`}
          >
            {mode === "dark" ?
              <SunIcon className={"fill-dark "} /> :
              <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      {/* hamburger */}
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[70vw]  flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
          >
            <nav className='flex items-center flex-col justify-center '>
              <CustomMobileLink toggle={handleClick} href="/" title="Home" className='' />
              <CustomMobileLink toggle={handleClick} href="/about" title="About" className='' />
              <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" className='' />
              <CustomMobileLink toggle={handleClick} href="/articles" title="Articles" className='' />
            </nav>
            <Logo />
            <nav className='flex justify-center items-center flex-wrap mt-2'>
              <motion.a href="/" target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-2 sm:mx-1'
              >
                <TwitterIcon />
              </motion.a>
              <motion.a href="https://github.com/FitraMaulana-afk" target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-2  sm:mx-1 bg-light rounded-full dark:bg-dark'
              >
                <GithubIcon className="" />
              </motion.a>
              <motion.a href="/" target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-2  sm:mx-1'
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a href="/" target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-2  sm:mx-1'
              >
                <PinterestIcon className="bg-light rounded-full" />
              </motion.a>
              <motion.a href="/" target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 ml-2  sm:mx-1'
              >
                <DribbbleIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1`}
              >
                {mode === "dark" ?
                  <SunIcon className={"fill-dark "} /> :
                  <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </motion.div>
          : null
      }

      <div className='absolute  left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
