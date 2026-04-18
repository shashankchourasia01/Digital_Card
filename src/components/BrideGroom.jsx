// src/components/BrideGroom.jsx
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const BrideGroom = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-cormorant text-4xl md:text-5xl text-center rose-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Beautiful Couple
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          
          {/* Bride */}
          <motion.div 
            className="flex-1 max-w-sm text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-75 transition" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-rose-400">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Bride"
                />
              </div>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl rose-text mt-4">Priya Sharma</h3>
            <p className="text-rose-500 text-sm mt-2">Daughter of Mr. & Mrs. Ramesh Sharma</p>
          </motion.div>
          
          {/* Animated Heart */}
          <motion.div 
            className="text-4xl md:text-5xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-12 h-12 text-rose-500" fill="#f43f5e" />
          </motion.div>
          
          {/* Groom */}
          <motion.div 
            className="flex-1 max-w-sm text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-75 transition" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-rose-400">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Groom"
                />
              </div>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl rose-text mt-4">Arjun Mehta</h3>
            <p className="text-rose-500 text-sm mt-2">Son of Mr. & Mrs. Suresh Mehta</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrideGroom