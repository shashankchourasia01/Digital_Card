// src/components/FloatingElements.jsx
import { useEffect, useRef } from 'react'

const ICONS = ['🦋', '🌹', '🌸', '🌺', '🌼', '🌷', '✨', '💐', '🕊️', '🪷']

const FloatingElements = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 14 : 28
    const container = containerRef.current
    if (!container) return

    // Inject keyframes once
    const styleId = 'floating-keyframes'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes floatFall0 {
          0%   { transform: translateY(-60px) translateX(0) rotate(0deg) scale(0.6); opacity: 0; }
          5%   { opacity: var(--el-op); }
          50%  { transform: translateY(45vh) translateX(var(--drift)) rotate(180deg) scale(1); opacity: var(--el-op); }
          95%  { opacity: var(--el-op); }
          100% { transform: translateY(105vh) translateX(calc(var(--drift) * 2)) rotate(360deg) scale(0.7); opacity: 0; }
        }
        @keyframes floatFall1 {
          0%   { transform: translateY(-60px) translateX(0) rotate(0deg) scale(0.8); opacity: 0; }
          8%   { opacity: var(--el-op); }
          40%  { transform: translateY(38vh) translateX(calc(var(--drift) * -0.5)) rotate(120deg) scale(1.15); opacity: var(--el-op); }
          80%  { transform: translateY(80vh) translateX(var(--drift)) rotate(280deg) scale(0.9); opacity: calc(var(--el-op) * 0.6); }
          100% { transform: translateY(105vh) translateX(calc(var(--drift) * 1.5)) rotate(360deg) scale(0.5); opacity: 0; }
        }
        @keyframes floatFall2 {
          0%   { transform: translateY(-60px) rotate(0deg) scale(1); opacity: 0; }
          10%  { opacity: var(--el-op); }
          30%  { transform: translateY(28vh) translateX(calc(var(--drift) * 0.3)) rotate(90deg) scale(1.2); }
          65%  { transform: translateY(65vh) translateX(var(--drift)) rotate(200deg) scale(0.95); opacity: var(--el-op); }
          90%  { opacity: calc(var(--el-op) * 0.3); }
          100% { transform: translateY(105vh) translateX(calc(var(--drift) * 0.8)) rotate(360deg) scale(0.55); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    const elements = []

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      const icon    = ICONS[Math.floor(Math.random() * ICONS.length)]
      const left    = 2 + Math.random() * 96
      const size    = 14 + Math.random() * 22
      const dur     = 7 + Math.random() * 14
      const delay   = Math.random() * 20
      const drift   = (Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 18)
      const opacity = 0.55 + Math.random() * 0.45
      const blur    = Math.random() > 0.6 ? `blur(${(Math.random() * 1.5).toFixed(1)}px)` : 'none'
      const variant = Math.floor(Math.random() * 3)

      el.textContent = icon
      el.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: 0;
        font-size: ${size}px;
        filter: ${blur} drop-shadow(0 2px 8px rgba(255, 100, 150, 0.4));
        will-change: transform, opacity;
        pointer-events: none;
        --drift: ${drift}px;
        --el-op: ${opacity};
        animation: floatFall${variant} ${dur}s ${delay}s infinite linear;
      `

      container.appendChild(el)
      elements.push(el)
    }

    return () => {
      elements.forEach(el => el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  )
}

export default FloatingElements




// // src/components/FloatingElements.jsx
// import { motion } from 'framer-motion'
// import { useEffect, useState } from 'react'

// const FloatingElements = () => {
//   const [elements, setElements] = useState([])
//   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

//   useEffect(() => {
//     // Mobile pe kam elements
//     const count = isMobile ? 12 : 24
//     const items = []
    
//     const icons = ['🦋', '🌹', '🌸', '🌺', '🦋', '🌼', '🌷']
    
//     for (let i = 0; i < count; i++) {
//       items.push({
//         id: i,
//         icon: icons[Math.floor(Math.random() * icons.length)],
//         left: Math.random() * 100,
//         duration: 8 + Math.random() * 12,
//         delay: Math.random() * 15,
//         size: 16 + Math.random() * 16,
//         direction: Math.random() > 0.5 ? 1 : -1
//       })
//     }
    
//     setElements(items)
//   }, [isMobile])

//   if (elements.length === 0) return null

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//       {elements.map((el) => (
//         <motion.div
//           key={el.id}
//           className="absolute"
//           initial={{ y: -50, x: `${el.left}%`, opacity: 0 }}
//           animate={{
//             y: '100vh',
//             x: [`${el.left}%`, `${el.left + (el.direction * 20)}%`, `${el.left}%`],
//             opacity: [0, 1, 1, 0],
//             rotate: [0, el.direction * 180, el.direction * 360]
//           }}
//           transition={{
//             duration: el.duration,
//             delay: el.delay,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         >
//           <span 
//             style={{ 
//               fontSize: el.size,
//               display: 'inline-block',
//               filter: 'drop-shadow(0 2px 4px rgba(244,63,94,0.3))'
//             }}
//           >
//             {el.icon}
//           </span>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default FloatingElements