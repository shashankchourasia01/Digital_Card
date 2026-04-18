// src/components/Envelope.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const Envelope = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleOpen = () => {
    setIsAnimating(true)
    // Pehle envelope khulega
    setTimeout(() => {
      setShowVideo(true)  // Envelope khulne ke baad video show
      setTimeout(() => {
        onOpen()  // Video ke baad full invitation
      }, 5000)  // Video 5 second chalegi
    }, 800)
  }

  if (showVideo) {
    return (
      <motion.div 
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <video 
          autoPlay 
          muted={false}
          className="w-full h-full object-cover"
          onEnded={() => onOpen()}
        >
          {/* Video ko public/videos/pre-wedding.mp4 mein rakhna */}
          <source src="/videos/pre-wedding.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-10 left-0 right-0 text-center text-white/70 text-sm">
          ❤️ Our Beautiful Journey ❤️
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-rose-50 to-pink-100"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="relative w-full max-w-sm mx-auto cursor-pointer">
        {/* Envelope Shadow */}
        <motion.div 
          className="absolute -bottom-6 left-4 right-4 h-10 bg-pink-500/20 rounded-full blur-xl"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />
        
        {/* Main Envelope Container - Full Screen on Mobile */}
        <div className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-3xl shadow-2xl overflow-hidden"
             style={{ minHeight: '500px', boxShadow: '0 25px 50px -12px rgba(244,63,94,0.4)' }}>
          
          {/* Envelope Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-pink-200 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-pink-200 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-pink-200 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-pink-200 rounded-br-3xl" />
          </div>
          
          {/* 4-FOLD ANIMATION */}
          <div className="relative" style={{ minHeight: '500px' }}>
            
            {/* TOP FLAP */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-rose-300 to-pink-500 z-20 rounded-t-3xl"
              style={{ transformOrigin: 'top' }}
              animate={{ rotateX: isAnimating ? -180 : (isHovered ? -5 : 0) }}
              transition={{ duration: 0.5, delay: isAnimating ? 0 : 0, type: "spring" }}
            />
            
            {/* BOTTOM FLAP */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-rose-300 to-pink-500 z-20 rounded-b-3xl"
              style={{ transformOrigin: 'bottom' }}
              animate={{ rotateX: isAnimating ? 180 : (isHovered ? 5 : 0) }}
              transition={{ duration: 0.5, delay: isAnimating ? 0.1 : 0, type: "spring" }}
            />
            
            {/* LEFT FLAP */}
            <motion.div 
              className="absolute top-0 left-0 bottom-0 w-1/4 bg-gradient-to-r from-rose-300 to-pink-500 z-20"
              style={{ transformOrigin: 'left' }}
              animate={{ rotateY: isAnimating ? -180 : (isHovered ? -3 : 0) }}
              transition={{ duration: 0.5, delay: isAnimating ? 0.2 : 0, type: "spring" }}
            />
            
            {/* RIGHT FLAP */}
            <motion.div 
              className="absolute top-0 right-0 bottom-0 w-1/4 bg-gradient-to-l from-rose-300 to-pink-500 z-20"
              style={{ transformOrigin: 'right' }}
              animate={{ rotateY: isAnimating ? 180 : (isHovered ? 3 : 0) }}
              transition={{ duration: 0.5, delay: isAnimating ? 0.3 : 0, type: "spring" }}
            />
            
            {/* ENVELOPE CONTENT - HIDDEN INSIDE */}
            <div className="p-8 text-center relative z-10 min-h-[500px] flex flex-col items-center justify-center">
              <motion.div animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}>
                <Heart className="w-20 h-20 text-pink-200" fill="#FFB6C1" stroke="#FF69B4" strokeWidth={1} />
              </motion.div>
              
              <p className="text-pink-100 font-lato text-sm tracking-wider mt-4 mb-8">
                ESTA INVITACION ES EXCLUSIVA PARA TI
              </p>
              
              <h1 className="font-cormorant text-4xl font-bold text-white mb-2">
                Priya
              </h1>
              <div className="flex items-center gap-2 my-2">
                <Heart className="w-4 h-4 text-pink-300" fill="#FF69B4" />
                <span className="text-pink-200 text-2xl">&</span>
                <Heart className="w-4 h-4 text-pink-300" fill="#FF69B4" />
              </div>
              <h1 className="font-cormorant text-4xl font-bold text-white">
                Arjun
              </h1>
            </div>
          </div>
        </div>
        
        {/* Open Button */}
        <motion.button
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full px-8 py-3 font-bold shadow-xl flex items-center gap-2 z-30 whitespace-nowrap"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: isHovered ? -10 : 0 }}
          onClick={handleOpen}
          disabled={isAnimating}
        >
          <Sparkles className="w-5 h-5" />
          {isAnimating ? "Opening..." : "Open Invitation"}
          <Heart className="w-4 h-4 fill-white" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Envelope