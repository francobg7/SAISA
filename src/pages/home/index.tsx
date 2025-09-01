import React from 'react'
import { motion } from 'framer-motion'
import { Hero, About, Projects, Objetivos, SEO } from '../../components'

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="SAISA - Servicios Ambientales Integrales S.A."
        description="Empresa pionera en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular en Paraguay."
        keywords="saisa, sostenibilidad, tecnología ambiental, economía circular, paraguay, medio ambiente, servicios ambientales"
        url="https://saisa.com.py"
      />
      <motion.main
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Hero />
        <Objetivos />
        <About />
        <Projects />
      </motion.main>
    </>
  )
}

export default HomePage 