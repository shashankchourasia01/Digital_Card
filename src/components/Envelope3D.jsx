// src/components/Envelope3D.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Envelope3D = ({ onOpen }) => {
  const [phase, setPhase] = useState('idle')

  const handleOpen = () => {
    if (phase !== 'idle') return
    setPhase('wax')
    setTimeout(() => setPhase('flaps'), 600)
    setTimeout(() => setPhase('lift'), 1800)
    setTimeout(() => { setPhase('done'); onOpen?.() }, 2800)
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Lato:wght@300;400&display=swap"
        rel="stylesheet"
      />

      {/* Full screen sage green background */}
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#8fa89a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
      }}>

        {/* Subtle radial overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.05), transparent 60%)',
        }} />

        {/* Envelope wrapper — perfectly centered */}
        <motion.div
          animate={
            phase === 'lift' ? { y: -30, scale: 0.92 } :
            phase === 'done' ? { y: -60, scale: 0.88, opacity: 0 } :
            { y: 0, scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'relative',
            width: 'min(82vw, 320px)',
            aspectRatio: '320 / 480',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── Shadow ── */}
          <motion.div
            animate={phase === 'lift' ? { scaleX: 1.3, opacity: 0.06 } : { scaleX: 1, opacity: 0.18 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: -20, left: '10%', right: '10%',
              height: 28,
              background: 'rgba(0,0,0,1)',
              borderRadius: '50%',
              filter: 'blur(10px)',
              zIndex: 0,
            }}
          />

          {/* ── Envelope body ── */}
          <div style={{
            position: 'absolute', inset: 0,
            background: '#8fa89a',
            borderRadius: 6,
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.08), 0 20px 50px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            zIndex: 1,
          }}>

            {/* Embossed SVG — fills entire body */}
            <svg
              width="100%" height="100%"
              viewBox="0 0 320 480"
              preserveAspectRatio="xMidYMid slice"
              style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
            >
              <defs>
                <filter id="emb" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
                  <feSpecularLighting in="blur" surfaceScale="4" specularConstant="0.8"
                    specularExponent="20" result="light">
                    <fePointLight x="80" y="60" z="120"/>
                  </feSpecularLighting>
                  <feComposite in="light" in2="SourceAlpha" operator="in" result="s"/>
                  <feBlend in="SourceGraphic" in2="s" mode="screen"/>
                </filter>
              </defs>
              <g filter="url(#emb)" opacity="0.5">
                {/* TL flower */}
                <g transform="translate(22,22)" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none">
                  <circle cx="13" cy="13" r="6"/>
                  <path d="M13 7Q16 10 13 13Q10 10 13 7Z"/>
                  <path d="M7 13Q10 16 13 13Q10 10 7 13Z"/>
                  <path d="M19 13Q16 16 13 13Q16 10 19 13Z"/>
                  <path d="M13 19Q16 16 13 13Q10 16 13 19Z"/>
                  <circle cx="13" cy="13" r="2" fill="rgba(255,255,255,0.2)"/>
                </g>
                {/* TR tulip */}
                <g transform="translate(284,20)" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none">
                  <path d="M8 2C10 7 15 7 15 13C15 18 10 20 8 24C6 20 1 18 1 13C1 7 6 7 8 2Z"/>
                  <line x1="8" y1="16" x2="8" y2="28"/>
                  <path d="M4 22C6 20 8 24 8 24"/>
                </g>
                {/* BL daisy */}
                <g transform="translate(20,432)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" fill="none">
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="12" y1="3" x2="12" y2="8"/>
                  <line x1="12" y1="16" x2="12" y2="21"/>
                  <line x1="3" y1="12" x2="8" y2="12"/>
                  <line x1="16" y1="12" x2="21" y2="12"/>
                  <line x1="5.5" y1="5.5" x2="9" y2="9"/>
                  <line x1="15" y1="15" x2="18.5" y2="18.5"/>
                  <line x1="18.5" y1="5.5" x2="15" y2="9"/>
                  <line x1="5.5" y1="18.5" x2="9" y2="15"/>
                </g>
                {/* BR leaves */}
                <g transform="translate(282,432)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" fill="none">
                  <path d="M8 20C4 14 3 5 8 0C13 5 12 14 8 20Z"/>
                  <path d="M8 20C2 17 0 9 4 3C7 8 8 15 8 20Z"/>
                  <path d="M8 20C14 17 16 9 12 3C9 8 8 15 8 20Z"/>
                </g>
                {/* Left mid leaf */}
                <g transform="translate(10,210)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" fill="none">
                  <path d="M7 0C13 5 14 14 7 20C0 14 1 5 7 0Z"/>
                  <line x1="7" y1="0" x2="7" y2="20"/>
                </g>
                {/* Right mid rose */}
                <g transform="translate(300,200)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" fill="none">
                  <path d="M8 0C12 4 15 9 13 14C11 18 8 19 8 19C8 19 5 18 3 14C1 9 4 4 8 0Z"/>
                  <path d="M5 8C7 6 10 6 12 8"/>
                  <path d="M4 12C6 16 10 16 12 12"/>
                </g>
                {/* Scatter dots */}
                <circle cx="75" cy="75" r="1.5" fill="rgba(255,255,255,0.2)"/>
                <circle cx="245" cy="90" r="1.5" fill="rgba(255,255,255,0.2)"/>
                <circle cx="45" cy="340" r="1.5" fill="rgba(255,255,255,0.2)"/>
                <circle cx="275" cy="360" r="1.5" fill="rgba(255,255,255,0.2)"/>
                <circle cx="160" cy="440" r="1.5" fill="rgba(255,255,255,0.2)"/>
              </g>
            </svg>

            {/* Corner brackets */}
            {[
              { top: 14, left: 14, r: '0deg' },
              { top: 14, right: 14, r: '90deg' },
              { bottom: 14, left: 14, r: '270deg' },
              { bottom: 14, right: 14, r: '180deg' },
            ].map((p, i) => (
              <div key={i} style={{
                position: 'absolute', width: 30, height: 30,
                zIndex: 3, opacity: 0.45, transform: `rotate(${p.r})`,
                top: p.top, left: p.left, right: p.right, bottom: p.bottom,
              }}>
                <svg viewBox="0 0 30 30" fill="none">
                  <path d="M2 15 L2 2 L15 2" stroke="rgba(255,255,255,0.8)" strokeWidth="1"/>
                </svg>
              </div>
            ))}
          </div>

          {/* ── FLAPS (over body) ── */}

          {/* Left flap */}
          <motion.div
            animate={phase === 'flaps' || phase === 'lift' || phase === 'done'
              ? { rotateY: -160, opacity: 0 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              background: '#7a9589', zIndex: 4,
              transformOrigin: 'left center',
            }}
          />

          {/* Right flap */}
          <motion.div
            animate={phase === 'flaps' || phase === 'lift' || phase === 'done'
              ? { rotateY: 160, opacity: 0 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%',
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              background: '#7a9589', zIndex: 4,
              transformOrigin: 'right center',
            }}
          />

          {/* Bottom flap */}
          <motion.div
            animate={phase === 'flaps' || phase === 'lift' || phase === 'done'
              ? { rotateX: 160, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
              clipPath: 'polygon(0 100%, 100% 100%, 50% 0%)',
              background: '#80a092', zIndex: 5,
              transformOrigin: 'bottom center',
            }}
          />

          {/* Top flap */}
          <motion.div
            animate={phase === 'flaps' || phase === 'lift' || phase === 'done'
              ? { rotateX: -160, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: '#7d9b8d', zIndex: 6,
              transformOrigin: 'top center',
            }}
          />

          {/* ── WAX SEAL — perfectly centered FIXED ── */}
          <motion.div
            animate={
              phase === 'wax'
                ? { scale: [1, 1.2, 0.85, 1.05, 0], opacity: [1,1,1,1,0] }
                : phase === 'idle'
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.55 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 8,
              width: 76,
              height: 76,
              margin: 0,
              padding: 0,
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 38% 35%, #d4c5a9, #b8a882 40%, #9e8f6a 75%, #7a6e50)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.28), inset 0 1px 3px rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: "'Pinyon Script', cursive",
                fontSize: 17,
                color: '#5a4e35',
                textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                letterSpacing: 1,
                userSelect: 'none',
              }}>P &amp; A</span>
            </div>
          </motion.div>

          {/* ── TAGLINE — centered below seal FIXED ── */}
          <motion.p
            animate={phase !== 'idle' ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'absolute',
              bottom: '18%',
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 7,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              letterSpacing: '0.5px',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Welcome to our<br />Wedding Invitation
          </motion.p>

          {/* ── OPEN BUTTON — perfectly centered bottom FIXED ── */}
          <AnimatePresence>
            {phase === 'idle' && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                onClick={handleOpen}
                style={{
                  position: 'absolute',
                  bottom: '6%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 9,
                  background: 'rgba(255,255,255,0.13)',
                  border: '1px solid rgba(255,255,255,0.42)',
                  color: '#fff',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: '2.5px',
                  padding: '10px 30px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(4px)',
                }}
              >
                OPEN INVITATION
              </motion.button>
            )}
          </AnimatePresence>

          {/* ── LETTER CARD (peeks out after open) ── */}
          <AnimatePresence>
            {(phase === 'lift' || phase === 'done') && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: -24, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '7%',
                  right: '7%',
                  bottom: '6%',
                  background: 'linear-gradient(160deg, #fdf8f0, #faf0e6)',
                  borderRadius: 6,
                  zIndex: 7,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.14)',
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  color: '#a08060',
                  letterSpacing: 2,
                  marginBottom: 14,
                  textTransform: 'uppercase',
                }}>Together with their families</p>

                <h1 style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: 44,
                  color: '#6b5a3e',
                  margin: 0,
                  lineHeight: 1.1,
                }}>Priya</h1>

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: 18,
                  color: '#a08060',
                  margin: '6px 0',
                  letterSpacing: 4,
                }}>&amp;</p>

                <h1 style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: 44,
                  color: '#6b5a3e',
                  margin: 0,
                  lineHeight: 1.1,
                }}>Arjun</h1>

                <div style={{
                  width: 50,
                  height: 1,
                  background: 'rgba(160,128,96,0.35)',
                  margin: '14px auto',
                }} />

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  color: '#a08060',
                  letterSpacing: 2,
                  lineHeight: 1.8,
                }}>REQUEST THE PLEASURE<br />OF YOUR COMPANY</p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </>
  )
}

export default Envelope3D