import React from 'react'
import { motion } from 'framer-motion'
import { Hero, About, Services, Projects, Alliances, Contact } from '../../components/sections'

const HomePage: React.FC = () => {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Services />
      <Projects />
      <Alliances />
      <Contact />
    </motion.main>
  )
}

export default HomePage 