// src/components/FloatingElements.jsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [elements, setElements] = useState({
    butterflies: [],
    redRoses: [],
    pinkRoses: [],
    flowers: []
  })

  // Mobile pe kam elements, Desktop pe zyada
  const isMobile = window.innerWidth < 768
  const butterflyCount = isMobile ? 6 : 10
  const roseCount = isMobile ? 8 : 12
  const flowerCount = isMobile ? 10 : 15

  useEffect(() => {
    // Butterflies - Realistic flight paths
    const butterflies = Array.from({ length: butterflyCount }, (_, i) => ({
      id: `b-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 18 + Math.random() * 12,
      rotateY: Math.random() * 360,
      wingBeat: 1.5 + Math.random() * 2
    }))

    // Red Roses
    const redRoses = Array.from({ length: roseCount }, (_, i) => ({
      id: `rr-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 12,
      size: 20 + Math.random() * 15,
      sway: 15 + Math.random() * 20
    }))

    // Pink Roses
    const pinkRoses = Array.from({ length: roseCount }, (_, i) => ({
      id: `pr-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 11 + Math.random() * 11,
      size: 18 + Math.random() * 14,
      sway: 10 + Math.random() * 25
    }))

    // Mixed Flowers
    const flowers = Array.from({ length: flowerCount }, (_, i) => ({
      id: `f-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 9 + Math.random() * 10,
      size: 16 + Math.random() * 12,
      type: ['🌸', '🌺', '🌼', '🌷', '💐', '🌸', '🌺'][Math.floor(Math.random() * 7)],
      sway: 10 + Math.random() * 20
    }))

    setElements({ butterflies, redRoses, pinkRoses, flowers })
  }, [butterflyCount, roseCount, flowerCount])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* ========== BUTTERFLIES - Realistic Fluttering ========== */}
      {elements.butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          initial={{ 
            x: `${butterfly.left}%`, 
            y: `${butterfly.top}%`, 
            opacity: 0,
            scale: 0.8
          }}
          animate={{ 
            x: [
              `${butterfly.left}%`, 
              `${butterfly.left + (Math.random() - 0.5) * 30}%`,
              `${butterfly.left + (Math.random() - 0.5) * 20}%`,
              `${butterfly.left + (Math.random() - 0.5) * 35}%`,
              `${butterfly.left}%`
            ],
            y: [
              `${butterfly.top}%`,
              `${butterfly.top - 20}%`,
              `${butterfly.top + 15}%`,
              `${butterfly.top - 10}%`,
              `${butterfly.top}%`
            ],
            opacity: [0, 1, 1, 1, 0],
            scale: [0.8, 1.1, 1, 1.05, 0.8],
            rotate: [0, 15, -10, 20, 0]
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 180, 360],
              scaleX: [1, 0.5, 1]
            }}
            transition={{ 
              duration: butterfly.wingBeat, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div 
              className="text-center"
              style={{ 
                fontSize: butterfly.size,
                filter: 'drop-shadow(0 4px 6px rgba(244,63,94,0.3))',
                textShadow: '0 0 5px rgba(244,63,94,0.5)'
              }}
            >
              🦋
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ========== RED ROSES - Falling with Sway ========== */}
      {elements.redRoses.map((rose) => (
        <motion.div
          key={rose.id}
          className="absolute"
          initial={{ 
            y: -50, 
            x: `${rose.left}%`, 
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: '110vh',
            opacity: [0, 1, 1, 0.8, 0.5, 0],
            rotate: 360,
            x: [
              `${rose.left}%`,
              `${rose.left + rose.sway}%`,
              `${rose.left - rose.sway/2}%`,
              `${rose.left + rose.sway/1.5}%`,
              `${rose.left}%`
            ]
          }}
          transition={{
            duration: rose.duration,
            delay: rose.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }}
        >
          <div style={{ fontSize: rose.size }}>
            🌹
          </div>
        </motion.div>
      ))}

      {/* ========== PINK ROSES - Gentle Floating ========== */}
      {elements.pinkRoses.map((rose) => (
        <motion.div
          key={rose.id}
          className="absolute"
          initial={{ 
            y: '110vh', 
            x: `${rose.left}%`, 
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: -50,
            opacity: [0, 1, 1, 0.8, 0.5, 0],
            rotate: -360,
            x: [
              `${rose.left}%`,
              `${rose.left - rose.sway}%`,
              `${rose.left + rose.sway/2}%`,
              `${rose.left - rose.sway/1.5}%`,
              `${rose.left}%`
            ]
          }}
          transition={{
            duration: rose.duration,
            delay: rose.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1]
          }}
        >
          <div style={{ fontSize: rose.size }}>
            🌸
          </div>
        </motion.div>
      ))}

      {/* ========== MIXED FLOWERS - Drifting ========== */}
      {elements.flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          initial={{ 
            y: -30, 
            x: `${flower.left}%`, 
            opacity: 0,
            scale: 0.8
          }}
          animate={{ 
            y: '105vh',
            opacity: [0, 1, 1, 0.7, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 1, 0.9],
            x: [
              `${flower.left}%`,
              `${flower.left + flower.sway}%`,
              `${flower.left - flower.sway/1.5}%`,
              `${flower.left + flower.sway/2}%`
            ]
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 1]
          }}
        >
          <div 
            className="text-center"
            style={{ 
              fontSize: flower.size,
              filter: 'drop-shadow(0 2px 4px rgba(255,105,180,0.4))'
            }}
          >
            {flower.type}
          </div>
        </motion.div>
      ))}

      {/* ========== EXTRA: Floating Petals (Lightweight) ========== */}
      {!isMobile && Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute"
          initial={{ y: '100%', x: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ 
            y: '-10%',
            opacity: [0, 0.6, 0.4, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 5 + Math.random() * 7,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{ 
              background: `linear-gradient(135deg, #FF69B4, #FF1493)`,
              boxShadow: '0 0 4px #FF69B4'
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements