// src/components/HeroSection.jsx
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronDown, Heart } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center relative px-4">
      <motion.div 
        className="text-center z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-rose-500 font-lato tracking-wider mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Together with their families
        </motion.p>
        
        <motion.h1 
          className="font-cormorant text-5xl md:text-7xl font-bold rose-text mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          Priya
          <br />
          <span className="text-3xl md:text-5xl">&</span>
          <br />
          Arjun
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-rose-600 font-cormorant mb-4">
            Request the pleasure of your company
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-rose-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 14, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11:00 AM onwards</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="mt-8" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6 text-rose-400 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection