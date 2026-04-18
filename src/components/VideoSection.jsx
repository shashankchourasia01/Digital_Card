// src/components/VideoSection.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Heart, Play, Volume2, VolumeX } from 'lucide-react'

const VideoSection = ({ onComplete }) => {
  const videoRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | playing | fallback
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    // Show skip button after 4 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 4000)

    const tryPlay = async () => {
      try {
        await vid.play()
        setStatus('playing')
      } catch (e) {
        console.warn('Autoplay blocked:', e)
        setStatus('fallback')
      }
    }

    const handleProgress = () => {
      if (vid.duration) {
        setProgress((vid.currentTime / vid.duration) * 100)
      }
    }

    vid.addEventListener('timeupdate', handleProgress)
    tryPlay()

    return () => {
      clearTimeout(skipTimer)
      vid.removeEventListener('timeupdate', handleProgress)
    }
  }, [])

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const handleManualPlay = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.muted = true
        setMuted(true)
        await videoRef.current.play()
        setStatus('playing')
      }
    } catch (e) {
      onComplete?.()
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',         // ← fixed height — section nahi girega
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        autoPlay
        preload="auto"
        onEnded={onComplete}
        onError={() => setStatus('fallback')}
        onCanPlay={() => {
          if (status === 'loading') setStatus('ready')
        }}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      >
        {/*
          ✅ VERCEL FIX: /public folder ki files /public prefix ke bina serve hoti hain
          File rakhna: public/videos/pre-wedding.mp4
          Path likhna: /videos/pre-wedding.mp4
        */}
        <source src="/videos/pre-wedding.mp4" type="video/mp4" />
        {/*
          Fallback: agar local video nahi hai toh yeh Cloudinary/Supabase URL daal
          External URLs jaise mixkit Vercel pe CORS se block hoti hain
          Recommend: apni video Cloudinary pe upload karo (free), link yahan daalo
        */}
      </video>

      {/* ── DARK GRADIENT OVERLAY ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* ── FALLBACK UI (agar video na chale) ── */}
      <AnimatePresence>
        {status === 'fallback' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: 'absolute', inset: 0, zIndex: 3,
              background: 'linear-gradient(135deg, #1a0a10, #2d1420, #1a0a10)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 20,
            }}
          >
            {/* Animated rings as fallback visual */}
            {[0,1,2].map(i => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: 200 + i * 100,
                  height: 200 + i * 100,
                  borderRadius: '50%',
                  border: '1px solid rgba(244,63,94,0.15)',
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
              />
            ))}

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart
                style={{ width: 56, height: 56, color: '#f43f5e' }}
                fill="#f43f5e"
              />
            </motion.div>

            <button
              onClick={handleManualPlay}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(244,63,94,0.15)',
                border: '1px solid rgba(244,63,94,0.4)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: 40,
                cursor: 'pointer',
                fontSize: 14,
                letterSpacing: 1,
                fontFamily: 'inherit',
              }}
            >
              <Play style={{ width: 16, height: 16 }} fill="#fff" />
              Play Video
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CENTER TEXT OVERLAY ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: status === 'playing' || status === 'ready' ? 1 : 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          position: 'absolute', inset: 0, zIndex: 4,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Heart
            style={{ width: 40, height: 40, color: '#fff', marginBottom: 16 }}
            fill="#f43f5e"
          />
        </motion.div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, serif",
          fontSize: 'clamp(28px, 6vw, 52px)',
          fontWeight: 300,
          color: '#fff',
          margin: 0,
          lineHeight: 1.2,
          textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          letterSpacing: 2,
        }}>
          Our Beautiful Journey
        </h1>

        <p style={{
          marginTop: 12,
          color: 'rgba(255,255,255,0.75)',
          fontSize: 'clamp(13px, 2vw, 16px)',
          letterSpacing: 3,
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
        }}>
          Priya &nbsp;✦&nbsp; Arjun
        </p>
      </motion.div>

      {/* ── PROGRESS BAR (top) ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2, background: 'rgba(255,255,255,0.1)', zIndex: 10,
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #f43f5e, #fb7185)',
            width: `${progress}%`,
          }}
        />
      </div>

      {/* ── CONTROLS (bottom right) ── */}
      <div style={{
        position: 'absolute', bottom: 24, right: 20,
        zIndex: 10, display: 'flex', gap: 10,
      }}>
        {/* Mute toggle */}
        <button
          onClick={handleMuteToggle}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {muted
            ? <VolumeX style={{ width: 15, height: 15 }} />
            : <Volume2 style={{ width: 15, height: 15 }} />
          }
        </button>
      </div>

      {/* ── SKIP BUTTON ── */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={onComplete}
            style={{
              position: 'absolute', bottom: 24, left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.8)',
              padding: '8px 24px',
              borderRadius: 20,
              cursor: 'pointer',
              fontSize: 12,
              letterSpacing: 2,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            SKIP  →
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── SCROLL HINT (bottom center) ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 60, left: 0, right: 0,
          textAlign: 'center', zIndex: 10,
          color: 'rgba(255,255,255,0.45)',
          fontSize: 11, letterSpacing: 2,
          fontFamily: "'Lato', sans-serif",
        }}
      >
        scroll to explore  ↓
      </motion.div>

    </motion.section>
  )
}

export default VideoSection