// src/components/FloatingElements.jsx
import { motion } from 'framer-motion'

const FloatingElements = () => {
  // Different types of butterflies
  const butterflies = Array.from({ length: 12 }, (_, i) => ({
    id: `butterfly-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 15 + Math.random() * 10,
    size: 20 + Math.random() * 15,
    type: ['🦋', '🦋', '🦋', '🦋', '🦋'][Math.floor(Math.random() * 5)],
    flutterSpeed: 2 + Math.random() * 3
  }))

  // Red Roses
  const redRoses = Array.from({ length: 15 }, (_, i) => ({
    id: `red-rose-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 10,
    size: 18 + Math.random() * 15,
    rotation: Math.random() * 360
  }))

  // Pink Roses
  const pinkRoses = Array.from({ length: 15 }, (_, i) => ({
    id: `pink-rose-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 9 + Math.random() * 11,
    size: 16 + Math.random() * 14,
    rotation: Math.random() * 360
  }))

  // Mixed Flowers (Different types)
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    id: `flower-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 7 + Math.random() * 12,
    size: 14 + Math.random() * 16,
    type: ['🌸', '🌺', '🌻', '🌼', '🌷', '💐', '🌸', '🌺'][Math.floor(Math.random() * 8)],
    color: Math.random() > 0.5 ? '#FF69B4' : '#FF1493'
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* BUTTERFLIES - Different flight patterns */}
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          initial={{ y: -50, x: `${butterfly.left}%`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: ['-10%', '20%', '50%', '80%', '110%'],
            x: [`${butterfly.left}%`, `${butterfly.left + 15}%`, `${butterfly.left - 10}%`, `${butterfly.left + 20}%`, `${butterfly.left}%`],
            opacity: [0, 1, 1, 1, 0],
            rotate: [0, 15, -10, 20, 0],
            scale: [0.5, 1.2, 1, 1.1, 0.5]
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: butterfly.flutterSpeed, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ fontSize: butterfly.size, filter: 'drop-shadow(0 0 8px rgba(244,63,94,0.4))' }}>
              {butterfly.type}
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* RED ROSES */}
      {redRoses.map((rose) => (
        <motion.div
          key={rose.id}
          className="absolute"
          initial={{ y: -100, x: `${rose.left}%`, opacity: 0, rotate: rose.rotation }}
          animate={{ 
            y: '120vh',
            opacity: [0, 0.9, 1, 0.7, 0],
            rotate: rose.rotation + 360,
            x: [`${rose.left}%`, `${rose.left + (Math.random() - 0.5) * 25}%`]
          }}
          transition={{
            duration: rose.duration,
            delay: rose.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div style={{ position: 'relative', width: rose.size, height: rose.size }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <defs>
                <radialGradient id={`red-grad-${rose.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF1744" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#D50000" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill={`url(#red-grad-${rose.id})`} />
              <circle cx="50" cy="35" r="28" fill="#FF1744" opacity="0.8" />
              <circle cx="50" cy="50" r="18" fill="#FF5252" opacity="0.9" />
              <circle cx="50" cy="50" r="8" fill="#FF8A80" />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* PINK ROSES */}
      {pinkRoses.map((rose) => (
        <motion.div
          key={rose.id}
          className="absolute"
          initial={{ y: '120vh', x: `${rose.left}%`, opacity: 0, rotate: rose.rotation }}
          animate={{ 
            y: -100,
            opacity: [0, 0.9, 1, 0.7, 0],
            rotate: rose.rotation - 360,
            x: [`${rose.left}%`, `${rose.left + (Math.random() - 0.5) * 20}%`]
          }}
          transition={{
            duration: rose.duration,
            delay: rose.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div style={{ position: 'relative', width: rose.size, height: rose.size }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <defs>
                <radialGradient id={`pink-grad-${rose.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#FF1493" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill={`url(#pink-grad-${rose.id})`} />
              <circle cx="50" cy="35" r="28" fill="#FF69B4" opacity="0.8" />
              <circle cx="50" cy="50" r="18" fill="#FF85C1" opacity="0.9" />
              <circle cx="50" cy="50" r="8" fill="#FFB6C1" />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* MIXED FLOWERS */}
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          initial={{ y: -50, x: `${flower.left}%`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '110vh',
            opacity: [0, 1, 1, 0.8, 0],
            rotate: 360,
            scale: [0.8, 1.2, 1, 0.9],
            x: [`${flower.left}%`, `${flower.left + (Math.random() - 0.5) * 30}%`]
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div style={{ 
            fontSize: flower.size, 
            filter: `drop-shadow(0 0 10px ${flower.color})`,
            display: 'inline-block'
          }}>
            {flower.type}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements