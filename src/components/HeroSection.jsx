// src/components/HeroSection.jsx
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

// ── Countdown Hook ──────────────────────────────────────────
const useCountdown = (targetDate) => {
  const calc = () => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(t)
  }, [targetDate])
  return time
}

// ── Floating Orb ────────────────────────────────────────────
const Orb = ({ style, duration, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(60px)',
      pointerEvents: 'none',
      ...style,
    }}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

// ── Stagger container variants ───────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.8 } },
}

// ── Countdown Box ────────────────────────────────────────────
const CountBox = ({ value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'rgba(244,63,94,0.08)',
      border: '1px solid rgba(244,63,94,0.18)',
      borderRadius: 12,
      padding: '10px 16px',
      minWidth: 58,
    }}
  >
    <motion.span
      key={value}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        fontSize: 'clamp(22px, 5vw, 32px)',
        fontWeight: 600,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        color: '#f43f5e',
        lineHeight: 1,
      }}
    >
      {String(value).padStart(2, '0')}
    </motion.span>
    <span style={{
      fontSize: 9, letterSpacing: 2,
      color: 'rgba(244,63,94,0.6)',
      marginTop: 4,
      fontFamily: "'Lato', sans-serif",
      textTransform: 'uppercase',
    }}>{label}</span>
  </motion.div>
)

// ── Main Component ───────────────────────────────────────────
const HeroSection = () => {
  const WEDDING_DATE = '2025-02-14T11:00:00'
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE)

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '60px 24px',
    }}>

      {/* ── Background Orbs ── */}
      <Orb
        style={{ width: 380, height: 380, background: 'rgba(244,63,94,0.07)', top: '-10%', left: '-12%' }}
        duration={9} delay={0}
      />
      <Orb
        style={{ width: 300, height: 300, background: 'rgba(251,113,133,0.06)', bottom: '5%', right: '-8%' }}
        duration={11} delay={1.5}
      />
      <Orb
        style={{ width: 200, height: 200, background: 'rgba(244,63,94,0.05)', top: '40%', right: '10%' }}
        duration={7} delay={3}
      />

      {/* ── Decorative top line ── */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', top: 32, left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(280px, 70vw)', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.35), transparent)',
          transformOrigin: 'center',
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', bottom: 80, left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(280px, 70vw)', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.35), transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          textAlign: 'center',
          zIndex: 10,
          maxWidth: 560,
          width: '100%',
        }}
      >

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(11px, 2.5vw, 13px)',
            letterSpacing: '4px',
            color: 'rgba(244,63,94,0.7)',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Together with their families
        </motion.p>

        {/* Names */}
        <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, serif",
            fontSize: 'clamp(62px, 16vw, 110px)',
            fontWeight: 400,
            lineHeight: 0.9,
            margin: 0,
            background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185, #f43f5e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            letterSpacing: '-1px',
          }}>
            Priya
          </h1>

          {/* Ampersand with shimmer */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ margin: '4px 0' }}
          >
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(32px, 8vw, 52px)',
              color: 'rgba(244,63,94,0.5)',
              fontWeight: 300,
              fontStyle: 'italic',
            }}>&amp;</span>
          </motion.div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, serif",
            fontSize: 'clamp(62px, 16vw, 110px)',
            fontWeight: 400,
            lineHeight: 0.9,
            margin: 0,
            background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185, #f43f5e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            letterSpacing: '-1px',
          }}>
            Arjun
          </h1>
        </motion.div>

        {/* Divider with hearts */}
        <motion.div
          variants={fadeIn}
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10,
            marginBottom: 20,
          }}
        >
          <div style={{ height: 1, width: 60, background: 'rgba(244,63,94,0.25)' }} />
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ fontSize: 14, color: '#f43f5e' }}
          >♥</motion.span>
          <div style={{ height: 1, width: 60, background: 'rgba(244,63,94,0.25)' }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(16px, 3.5vw, 20px)',
            fontWeight: 300,
            color: 'rgba(244,63,94,0.75)',
            fontStyle: 'italic',
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          Request the pleasure of your company
        </motion.p>

        {/* Date & Time pills */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: 12, marginBottom: 32,
          }}
        >
          {[
            { icon: <Calendar style={{ width: 13, height: 13 }} />, text: 'February 14, 2025' },
            { icon: <Clock    style={{ width: 13, height: 13 }} />, text: '11:00 AM onwards' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'rgba(244,63,94,0.07)',
              border: '1px solid rgba(244,63,94,0.2)',
              borderRadius: 30,
              padding: '7px 16px',
              color: '#f43f5e',
              fontFamily: "'Lato', sans-serif",
              fontSize: 12,
              letterSpacing: 0.5,
            }}>
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Countdown timer */}
        <motion.div variants={fadeUp} style={{ marginBottom: 40 }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 10, letterSpacing: 3,
            color: 'rgba(244,63,94,0.5)',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Countdown to the big day
          </p>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 10,
          }}>
            <CountBox value={days}    label="Days"    />
            <CountBox value={hours}   label="Hours"   />
            <CountBox value={minutes} label="Mins"    />
            <CountBox value={seconds} label="Secs"    />
          </div>
        </motion.div>

      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 28,
          left: 0, right: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 4,
          zIndex: 10,
        }}
      >
        <span style={{
          fontSize: 9, letterSpacing: 3,
          color: 'rgba(244,63,94,0.4)',
          fontFamily: "'Lato', sans-serif",
          textTransform: 'uppercase',
        }}>scroll</span>
        <ChevronDown style={{ width: 16, height: 16, color: 'rgba(244,63,94,0.4)' }} />
      </motion.div>

    </section>
  )
}

export default HeroSection