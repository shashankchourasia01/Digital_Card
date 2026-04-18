// src/components/Navigation.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = ['hero', 'bride-groom', 'events', 'venue', 'gallery', 'family', 'rsvp']
const sectionNames = ['Home', 'Couple', 'Events', 'Venue', 'Gallery', 'Family', 'RSVP']

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id))
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i]
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(i)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (index) => {
    document.getElementById(sections[index])?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {sections.map((_, index) => (
        <motion.button
          key={index}
          className={`block rounded-full transition-all duration-300 ${
            activeSection === index 
              ? 'w-3 h-3 bg-rose-500 shadow-lg shadow-rose-500/50' 
              : 'w-2 h-2 bg-rose-300 hover:bg-rose-400'
          }`}
          onClick={() => scrollTo(index)}
          whileHover={{ scale: 1.5 }}
          title={sectionNames[index]}
        />
      ))}
    </div>
  )
}

export default Navigation