// src/components/FloatingElements.jsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [elements, setElements] = useState([])
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    // Mobile pe kam elements
    const count = isMobile ? 12 : 24
    const items = []
    
    const icons = ['🦋', '🌹', '🌸', '🌺', '🦋', '🌼', '🌷']
    
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: Math.random() * 100,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 15,
        size: 16 + Math.random() * 16,
        direction: Math.random() > 0.5 ? 1 : -1
      })
    }
    
    setElements(items)
  }, [isMobile])

  if (elements.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          initial={{ y: -50, x: `${el.left}%`, opacity: 0 }}
          animate={{
            y: '100vh',
            x: [`${el.left}%`, `${el.left + (el.direction * 20)}%`, `${el.left}%`],
            opacity: [0, 1, 1, 0],
            rotate: [0, el.direction * 180, el.direction * 360]
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span 
            style={{ 
              fontSize: el.size,
              display: 'inline-block',
              filter: 'drop-shadow(0 2px 4px rgba(244,63,94,0.3))'
            }}
          >
            {el.icon}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements