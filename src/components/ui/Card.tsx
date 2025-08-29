import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  delay?: number
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  animate = false,
  delay = 0 
}) => {
  const baseClasses = 'bg-white shadow-lg border border-gray-100 rounded-xl p-6'
  
  if (!animate) {
    return (
      <div className={`${baseClasses} ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card 