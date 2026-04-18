// src/components/Envelope3D.jsx
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const Envelope3D = ({ onOpen }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-sm mx-auto perspective-1000">
        
        {/* 3D Envelope Container */}
        <motion.div 
          className="relative"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          
          {/* Envelope Shadow */}
          <div className="absolute -bottom-8 left-8 right-8 h-12 bg-black/20 rounded-full blur-xl" />
          
          {/* Main Envelope Body */}
          <div className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-2xl shadow-2xl overflow-hidden"
               style={{ minHeight: '480px', boxShadow: '0 30px 50px rgba(244,63,94,0.3)' }}>
            
            {/* Decorative Border */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-2xl" />
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-2xl" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-2xl" />
            </div>
            
            {/* 3D Flaps */}
            <div className="relative" style={{ minHeight: '480px' }}>
              
              {/* Top Flap - 3D Rotate */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-300 to-pink-500 z-20 rounded-t-2xl"
                style={{ transformOrigin: 'top', backfaceVisibility: 'hidden' }}
                animate={{ 
                  rotateX: [0, -180],
                  transition: { duration: 0.8, delay: 0, ease: "easeInOut" }
                }}
              />
              
              {/* Bottom Flap */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-300 to-pink-500 z-20 rounded-b-2xl"
                style={{ transformOrigin: 'bottom', backfaceVisibility: 'hidden' }}
                animate={{ 
                  rotateX: [0, 180],
                  transition: { duration: 0.8, delay: 0.15, ease: "easeInOut" }
                }}
              />
              
              {/* Left Flap */}
              <motion.div 
                className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-rose-300 to-pink-500 z-20"
                style={{ transformOrigin: 'left', backfaceVisibility: 'hidden' }}
                animate={{ 
                  rotateY: [0, -180],
                  transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" }
                }}
              />
              
              {/* Right Flap */}
              <motion.div 
                className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-rose-300 to-pink-500 z-20"
                style={{ transformOrigin: 'right', backfaceVisibility: 'hidden' }}
                animate={{ 
                  rotateY: [0, 180],
                  transition: { duration: 0.8, delay: 0.45, ease: "easeInOut" }
                }}
              />
              
              {/* Envelope Content - Bride Groom Names */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-16 h-16 text-white/80" fill="#fff" stroke="#f43f5e" strokeWidth={1} />
                </motion.div>
                
                <p className="text-white/80 text-xs tracking-wider mt-6 mb-4 font-lato">
                  ESTA INVITACION ES EXCLUSIVA PARA TI
                </p>
                
                <h1 className="font-cormorant text-4xl font-bold text-white mb-2">Priya</h1>
                <div className="flex items-center gap-2 my-2">
                  <Heart className="w-4 h-4 text-white/80" fill="#fff" />
                  <span className="text-white/80 text-2xl">&</span>
                  <Heart className="w-4 h-4 text-white/80" fill="#fff" />
                </div>
                <h1 className="font-cormorant text-4xl font-bold text-white">Arjun</h1>
              </div>
            </div>
          </div>
          
          {/* Open Button */}
          <motion.button
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full px-8 py-3 font-bold shadow-xl flex items-center gap-2 z-30 whitespace-nowrap text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
          >
            <Sparkles className="w-4 h-4" />
            Open Invitation
            <Heart className="w-4 h-4 fill-white" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Envelope3D