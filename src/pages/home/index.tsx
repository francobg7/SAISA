import React from 'react'
import { motion } from 'framer-motion'
import { Hero, About, Services, Projects, Alliances } from '../../components/sections'

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
    </motion.main>
  )
}

export default HomePage 