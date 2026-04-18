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
        href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Lato:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Full screen background - Match with Sections theme (Dark Rose/Red) */}
      <div style={{
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at 30% 20%, #1a0a0e, #0d0508)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
      }}>

        {/* Subtle rose-tinted overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 40% 30%, rgba(244,63,94,0.08), transparent 70%)',
        }} />

        {/* Animated floating particles (rose petals effect) */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          overflow: 'hidden',
        }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 12}px`,
                background: `rgba(244,63,94,${0.1 + Math.random() * 0.2})`,
                borderRadius: '50%',
                filter: 'blur(2px)',
                animation: `floatPetals ${8 + Math.random() * 12}s linear infinite`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

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
            width: 'min(85vw, 340px)',
            aspectRatio: '340 / 500',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── Shadow ── */}
          <motion.div
            animate={phase === 'lift' ? { scaleX: 1.3, opacity: 0.08 } : { scaleX: 1, opacity: 0.25 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: -25, left: '5%', right: '5%',
              height: 32,
              background: 'rgba(0,0,0,0.6)',
              borderRadius: '50%',
              filter: 'blur(12px)',
              zIndex: 0,
            }}
          />

          {/* ── Envelope body ── */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(145deg, #2d1810, #1f0f0a)',
            borderRadius: 12,
            boxShadow: 'inset 0 0 60px rgba(244,63,94,0.1), 0 25px 50px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            zIndex: 1,
            border: '1px solid rgba(244,63,94,0.15)',
          }}>

            {/* Embossed SVG — floral patterns in rose gold */}
            <svg
              width="100%" height="100%"
              viewBox="0 0 340 500"
              preserveAspectRatio="xMidYMid slice"
              style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
            >
              <defs>
                <filter id="emb" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur"/>
                  <feSpecularLighting in="blur" surfaceScale="4.5" specularConstant="0.9"
                    specularExponent="22" result="light">
                    <fePointLight x="100" y="80" z="140"/>
                  </feSpecularLighting>
                  <feComposite in="light" in2="SourceAlpha" operator="in" result="s"/>
                  <feBlend in="SourceGraphic" in2="s" mode="screen"/>
                </filter>
              </defs>
              <g filter="url(#emb)" opacity="0.45">
                {/* TL Rose Flower */}
                <g transform="translate(25,25)" stroke="rgba(244,63,94,0.7)" strokeWidth="0.9" fill="none">
                  <circle cx="15" cy="15" r="8"/>
                  <path d="M15 7Q19 11 15 15Q11 11 15 7Z"/>
                  <path d="M7 15Q11 19 15 15Q11 11 7 15Z"/>
                  <path d="M23 15Q19 19 15 15Q19 11 23 15Z"/>
                  <path d="M15 23Q19 19 15 15Q11 19 15 23Z"/>
                  <circle cx="15" cy="15" r="3" fill="rgba(244,63,94,0.3)"/>
                </g>
                {/* TR Rose */}
                <g transform="translate(298,22)" stroke="rgba(244,63,94,0.7)" strokeWidth="0.9" fill="none">
                  <path d="M10 3C13 9 18 9 18 16C18 22 12 25 10 29C8 25 2 22 2 16C2 9 7 9 10 3Z"/>
                  <line x1="10" y1="20" x2="10" y2="32"/>
                  <path d="M5 27C7 24 10 28 10 28"/>
                </g>
                {/* BL Flower */}
                <g transform="translate(22,452)" stroke="rgba(244,63,94,0.6)" strokeWidth="0.85" fill="none">
                  <circle cx="14" cy="14" r="5"/>
                  <line x1="14" y1="3" x2="14" y2="9"/>
                  <line x1="14" y1="19" x2="14" y2="25"/>
                  <line x1="3" y1="14" x2="9" y2="14"/>
                  <line x1="19" y1="14" x2="25" y2="14"/>
                  <line x1="6.5" y1="6.5" x2="10.5" y2="10.5"/>
                  <line x1="17.5" y1="17.5" x2="21.5" y2="21.5"/>
                  <line x1="21.5" y1="6.5" x2="17.5" y2="10.5"/>
                  <line x1="6.5" y1="21.5" x2="10.5" y2="17.5"/>
                </g>
                {/* BR Leaves */}
                <g transform="translate(300,455)" stroke="rgba(244,63,94,0.6)" strokeWidth="0.85" fill="none">
                  <path d="M9 22C5 15 4 5 9 0C14 5 13 15 9 22Z"/>
                  <path d="M9 22C2 18 0 9 4 3C8 8 9 17 9 22Z"/>
                  <path d="M9 22C16 18 18 9 14 3C10 8 9 17 9 22Z"/>
                </g>
                {/* Left decorative vine */}
                <g transform="translate(12,220)" stroke="rgba(244,63,94,0.4)" strokeWidth="0.8" fill="none">
                  <path d="M8 0C15 6 16 16 8 22C0 16 1 6 8 0Z"/>
                  <line x1="8" y1="0" x2="8" y2="22"/>
                </g>
                {/* Right decorative flower */}
                <g transform="translate(320,210)" stroke="rgba(244,63,94,0.4)" strokeWidth="0.8" fill="none">
                  <path d="M9 0C14 5 17 11 15 16C13 21 9 22 9 22C9 22 5 21 3 16C1 11 4 5 9 0Z"/>
                  <path d="M6 9C8 7 12 7 14 9"/>
                  <path d="M5 14C7 18 11 18 13 14"/>
                </g>
                {/* Scatter dots - rose gold */}
                <circle cx="80" cy="80" r="2" fill="rgba(244,63,94,0.25)"/>
                <circle cx="260" cy="95" r="2" fill="rgba(244,63,94,0.25)"/>
                <circle cx="50" cy="360" r="2" fill="rgba(244,63,94,0.25)"/>
                <circle cx="290" cy="380" r="2" fill="rgba(244,63,94,0.25)"/>
                <circle cx="170" cy="465" r="2" fill="rgba(244,63,94,0.25)"/>
                <circle cx="120" cy="130" r="1.5" fill="rgba(244,63,94,0.2)"/>
                <circle cx="220" cy="400" r="1.5" fill="rgba(244,63,94,0.2)"/>
              </g>
            </svg>

            {/* Corner brackets - rose gold */}
            {[
              { top: 18, left: 18, r: '0deg' },
              { top: 18, right: 18, r: '90deg' },
              { bottom: 18, left: 18, r: '270deg' },
              { bottom: 18, right: 18, r: '180deg' },
            ].map((p, i) => (
              <div key={i} style={{
                position: 'absolute', width: 35, height: 35,
                zIndex: 3, opacity: 0.5, transform: `rotate(${p.r})`,
                top: p.top, left: p.left, right: p.right, bottom: p.bottom,
              }}>
                <svg viewBox="0 0 35 35" fill="none">
                  <path d="M3 18 L3 3 L18 3" stroke="rgba(244,63,94,0.85)" strokeWidth="1.2"/>
                </svg>
              </div>
            ))}
          </div>

          {/* ── FLAPS (over body) with rose gradient ── */}

          {/* Left flap */}
          <motion.div
            animate={phase === 'flaps' || phase === 'lift' || phase === 'done'
              ? { rotateY: -160, opacity: 0 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              background: 'linear-gradient(110deg, #3a2018, #2a1510)',
              zIndex: 4,
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
              background: 'linear-gradient(250deg, #3a2018, #2a1510)',
              zIndex: 4,
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
              background: 'linear-gradient(0deg, #3d221a, #2e1810)',
              zIndex: 5,
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
              background: 'linear-gradient(180deg, #452a20, #352018)',
              zIndex: 6,
              transformOrigin: 'top center',
            }}
          />

          {/* ── WAX SEAL — Rose Gold theme ── */}
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
              width: 85,
              height: 85,
              margin: 0,
              padding: 0,
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #e8c49a, #c4a265 40%, #a8854a 70%, #8a6938)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,215,0,0.3)',
            }}>
              <span style={{
                fontFamily: "'Pinyon Script', cursive",
                fontSize: 20,
                color: '#4a3520',
                textShadow: '0 1px 2px rgba(255,255,255,0.25)',
                letterSpacing: 1.5,
                userSelect: 'none',
              }}>P &amp; A</span>
            </div>
          </motion.div>

          {/* ── TAGLINE — centered below seal ── */}
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
              fontWeight: 400,
              fontSize: 13,
              color: 'rgba(244,63,94,0.7)',
              lineHeight: 1.8,
              letterSpacing: '1px',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            Welcome to our<br />Wedding Celebration
          </motion.p>

          {/* ── OPEN BUTTON — perfectly centered bottom ── */}
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
                  background: 'linear-gradient(135deg, rgba(244,63,94,0.2), rgba(190,18,60,0.15))',
                  border: '1px solid rgba(244,63,94,0.5)',
                  color: '#fda4af',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '3px',
                  padding: '12px 32px',
                  borderRadius: 30,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  background: 'linear-gradient(135deg, rgba(244,63,94,0.35), rgba(190,18,60,0.25))',
                  borderColor: '#f43f5e',
                  color: '#fff',
                  letterSpacing: '4px',
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
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: -28, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '6%',
                  right: '6%',
                  bottom: '7%',
                  background: 'linear-gradient(160deg, #fff8f0, #fdf0e6)',
                  borderRadius: 10,
                  zIndex: 7,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 35px rgba(0,0,0,0.2)',
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: 11,
                  color: '#c47a5a',
                  letterSpacing: 3,
                  marginBottom: 16,
                  textTransform: 'uppercase',
                }}>Together with their families</p>

                <h1 style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: 48,
                  color: '#7a3a2a',
                  margin: 0,
                  lineHeight: 1.1,
                }}>Priya</h1>

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: 20,
                  color: '#c47a5a',
                  margin: '8px 0',
                  letterSpacing: 6,
                }}>&amp;</p>

                <h1 style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: 48,
                  color: '#7a3a2a',
                  margin: 0,
                  lineHeight: 1.1,
                }}>Arjun</h1>

                <div style={{
                  width: 60,
                  height: 1.5,
                  background: 'linear-gradient(90deg, transparent, #c47a5a, #c47a5a, transparent)',
                  margin: '18px auto',
                }} />

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: 10,
                  color: '#c47a5a',
                  letterSpacing: 2.5,
                  lineHeight: 1.8,
                }}>REQUEST THE PLEASURE<br />OF YOUR COMPANY</p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>

      {/* Add keyframes for floating petals animation */}
      <style>{`
        @keyframes floatPetals {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(110vh) translateX(${Math.random() * 50 - 25}px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Envelope3D