// src/components/VideoSection.jsx
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'

const VideoSection = ({ onComplete }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Auto play video
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Video autoplay failed:", e)
        onComplete() // Skip video if can't play
      })
    }
  }, [])

  return (
    <motion.section 
      className="smooth-section relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted={false}
        playsInline
        onEnded={onComplete}
        onError={onComplete}
      >
        {/* Option 1: Local video - public/video.mp4 mein rakhna */}
        <source src="/public/videos/pre-wedding.mp4" type="video/mp4" />
        
        {/* Option 2: Sample video (for testing) */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-are-having-fun-32908-large.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Text Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Heart className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" fill="#f43f5e" />
          <h1 className="font-cormorant text-3xl md:text-5xl text-white">Our Beautiful Journey</h1>
          <p className="text-white/80 mt-2 text-sm">❤️ Priya & Arjun ❤️</p>
        </motion.div>
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-xs animate-bounce">
        Scroll to explore ↓
      </div>
    </motion.section>
  )
}

export default VideoSection