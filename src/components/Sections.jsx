// src/components/Sections.jsx
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Clock, MapPin, Heart, Phone, X } from 'lucide-react'

// ── Animation Variants ───────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}
const slideLeft  = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
const slideRight = { hidden: { opacity: 0, x:  40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }

// ── Section Wrapper ──────────────────────────────────────────
const SW = ({ children, id }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <section id={id} ref={ref} style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: '72px 20px', position: 'relative', overflow: 'hidden'
    }}>
      <motion.div
        variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
        style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// ── Section Heading ──────────────────────────────────────────
const Heading = ({ children }) => (
  <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 40 }}>
    <h2 style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: 'clamp(36px, 8vw, 52px)',
      fontWeight: 500,  // ← bold kar diya
      margin: 0, lineHeight: 1,
      background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>{children}</h2>
    <motion.div
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        height: 1, width: 80, margin: '14px auto 0',
        background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.5), transparent)',
        transformOrigin: 'center'
      }}
    />
  </motion.div>
)

// ── Glass Card ───────────────────────────────────────────────
const Glass = ({ children, style = {}, ...props }) => (
  <div style={{
    background: 'rgba(15,10,12,0.5)',  // ← dark glass bg
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(244,63,94,0.2)',
    borderRadius: 20,
    ...style
  }} {...props}>
    {children}
  </div>
)

// ════════════════════════════════════════════════════════════
// HERO SECTION
// ════════════════════════════════════════════════════════════
export const HeroSection = () => (
  <SW id="hero">
    <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 12,
          fontWeight: 400,  // ← bold
          letterSpacing: 4,
          color: '#fb7185',  // ← lighter rose
          marginBottom: 20,
          textTransform: 'uppercase',
        }}
      >
        TOGETHER WITH THEIR FAMILIES
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(48px, 12vw, 80px)',
          fontWeight: 500,  // ← bold
          background: 'linear-gradient(135deg, #fb7185, #f43f5e, #fda4af)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        Priya
        <br />
        <span style={{ fontSize: 'clamp(36px, 8vw, 60px)' }}>&</span>
        <br />
        Arjun
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: 32 }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 18,
          fontWeight: 400,
          color: '#fda4af',  // ← visible rose
          marginBottom: 16,
        }}>
          Request the pleasure of your company
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 24,
          fontFamily: "'Lato', sans-serif",
          fontSize: 13,
          fontWeight: 400,
          color: '#fb7185',  // ← lighter
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Calendar style={{ width: 14, height: 14, color: '#f43f5e' }} />
            February 14, 2025
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock style={{ width: 14, height: 14, color: '#f43f5e' }} />
            11:00 AM onwards
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ marginTop: 60 }}
      >
        <div style={{
          width: 24,
          height: 40,
          border: '1.5px solid rgba(244,63,94,0.4)',
          borderRadius: 20,
          margin: '0 auto',
          position: 'relative',
        }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 4,
              height: 8,
              background: '#f43f5e',
              borderRadius: 2,
              position: 'absolute',
              top: 4,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  </SW>
)

// ════════════════════════════════════════════════════════════
// COUPLE SECTION
// ════════════════════════════════════════════════════════════
export const CoupleSection = () => (
  <SW id="couple">
    <Heading>The Couple</Heading>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'center' }}>

      {/* Bride */}
      <motion.div variants={slideLeft} style={{ textAlign: 'center', flex: '1 1 160px' }}>
        <div style={{ position: 'relative', width: 150, height: 150, margin: '0 auto 16px' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -4,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
              padding: 3,
            }}
          >
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a0506' }} />
          </motion.div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&face"
            alt="Bride"
            style={{
              position: 'absolute', inset: 4,
              width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
              borderRadius: '50%', objectFit: 'cover',
            }}
          />
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26, fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 6px'
        }}>Priya Sharma</h3>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 12, color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.6
        }}>Daughter of<br />Mr. &amp; Mrs. Ramesh Sharma</p>
      </motion.div>

      {/* Center heart */}
      <motion.div
        variants={fadeUp}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Heart style={{ width: 36, height: 36, color: '#f43f5e' }} fill="#f43f5e" />
        </motion.div>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 13, color: '#fb7185',
          letterSpacing: 3, fontStyle: 'italic', fontWeight: 400,
        }}>weds</span>
      </motion.div>

      {/* Groom */}
      <motion.div variants={slideRight} style={{ textAlign: 'center', flex: '1 1 160px' }}>
        <div style={{ position: 'relative', width: 150, height: 150, margin: '0 auto 16px' }}>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -4,
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
              padding: 3,
            }}
          >
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a0506' }} />
          </motion.div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face"
            alt="Groom"
            style={{
              position: 'absolute', inset: 4,
              width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
              borderRadius: '50%', objectFit: 'cover',
            }}
          />
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26, fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 6px'
        }}>Arjun Mehta</h3>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 12, color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.6
        }}>Son of<br />Mr. &amp; Mrs. Suresh Mehta</p>
      </motion.div>
    </div>
  </SW>
)

// ════════════════════════════════════════════════════════════
// EVENTS SECTION
// ════════════════════════════════════════════════════════════
const EVENTS = [
  { name: 'Mehndi',    date: 'Feb 12', time: '6:00 PM',  venue: "Bride's Residence",  color: '#fbbf24', bg: 'rgba(251,191,36,0.12)',  icon: '🎨' },
  { name: 'Haldi',     date: 'Feb 13', time: '10:00 AM', venue: "Groom's Residence", color: '#facc15', bg: 'rgba(250,204,21,0.12)',  icon: '🌼' },
  { name: 'Wedding',   date: 'Feb 14', time: '11:00 AM', venue: 'The Grand Palace',   color: '#f43f5e', bg: 'rgba(244,63,94,0.12)',  icon: '💍' },
  { name: 'Reception', date: 'Feb 14', time: '7:00 PM',  venue: 'The Grand Palace',   color: '#c084fc', bg: 'rgba(192,132,252,0.12)', icon: '🎉' },
]

export const EventsSection = () => (
  <SW id="events">
    <Heading>Celebrations</Heading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {EVENTS.map((e, i) => (
        <motion.div key={i} variants={i % 2 === 0 ? slideLeft : slideRight}>
          <Glass style={{
            padding: '18px 20px',
            display: 'flex', alignItems: 'center', gap: 16,
            background: e.bg,
            border: `1px solid ${e.color}40`,
            borderLeft: `3px solid ${e.color}`,
            borderRadius: 16,
            borderTopLeftRadius: 4, borderBottomLeftRadius: 4,
          }}>
            <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{e.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20, fontWeight: 500,
                color: e.color, margin: '0 0 6px'
              }}>{e.name}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
                {[
                  { icon: <Calendar style={{ width: 11, height: 11 }} />, text: e.date },
                  { icon: <Clock    style={{ width: 11, height: 11 }} />, text: e.time },
                  { icon: <MapPin   style={{ width: 11, height: 11 }} />, text: e.venue },
                ].map(({ icon, text }) => (
                  <span key={text} style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    fontFamily: "'Lato', sans-serif", fontSize: 11,
                    fontWeight: 400,
                    color: '#fda4af',  // ← visible
                    letterSpacing: 0.3,
                  }}>
                    <span style={{ color: e.color, opacity: 0.8 }}>{icon}</span>
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              background: `${e.color}25`,
              border: `1px solid ${e.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16, color: e.color, fontWeight: 600,
            }}>{i + 1}</div>
          </Glass>
        </motion.div>
      ))}
    </div>
  </SW>
)

// ════════════════════════════════════════════════════════════
// VENUE SECTION
// ════════════════════════════════════════════════════════════
export const VenueSection = () => (
  <SW id="venue">
    <Heading>Venue</Heading>
    <motion.div variants={fadeUp}>
      <Glass style={{ overflow: 'hidden' }}>
        <div style={{ width: '100%', height: 220, position: 'relative' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Rd%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block', filter: 'saturate(0.8) contrast(1.1)' }}
            loading="lazy"
            title="Venue Map"
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
            background: 'linear-gradient(to top, rgba(10,5,8,0.9), transparent)',
            pointerEvents: 'none'
          }} />
        </div>

        <div style={{ padding: '20px 22px' }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24, fontWeight: 500,
            background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', margin: '0 0 6px'
          }}>The Grand Palace Banquet</h3>

          <p style={{
            fontFamily: "'Lato', sans-serif", fontWeight: 400,
            fontSize: 13, color: '#fda4af',
            display: 'flex', alignItems: 'center', gap: 6, margin: '0 0 18px'
          }}>
            <MapPin style={{ width: 13, height: 13, color: '#f43f5e', opacity: 0.8 }} />
            123, MG Road, Bengaluru, Karnataka
          </p>

          <motion.a
            href="https://maps.google.com/?q=12.9716,77.5946"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'linear-gradient(135deg, #be123c, #f43f5e)',
              color: '#fff',
              padding: '12px 24px', borderRadius: 40,
              fontFamily: "'Lato', sans-serif", fontSize: 12,
              letterSpacing: 2, textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <MapPin style={{ width: 14, height: 14 }} />
            GET DIRECTIONS
          </motion.a>
        </div>
      </Glass>
    </motion.div>
  </SW>
)

// ════════════════════════════════════════════════════════════
// GALLERY SECTION
// ════════════════════════════════════════════════════════════
const IMAGES = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop",
]

export const GallerySection = () => {
  const [selected, setSelected] = useState(null)

  return (
    <SW id="gallery">
      <Heading>Our Story</Heading>

      <motion.div variants={stagger} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
      }}>
        {IMAGES.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.04, zIndex: 2 }}
            onClick={() => setSelected(src)}
            style={{
              aspectRatio: i === 0 || i === 3 ? '1/1.4' : '1/1',
              borderRadius: 14,
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              gridRow: i === 0 || i === 3 ? 'span 1' : 'auto',
            }}
          >
            <img
              src={src} alt={`Gallery ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(244,63,94,0.3), transparent)',
              opacity: 0, transition: 'opacity 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0}
            />
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.94)',
            zIndex: 999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
        >
          <motion.img
            src={selected}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              maxWidth: '90vw', maxHeight: '85vh',
              borderRadius: 16, objectFit: 'contain',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          />
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', top: 20, right: 20,
              background: 'rgba(244,63,94,0.15)',
              border: '1px solid rgba(244,63,94,0.3)',
              borderRadius: '50%', width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff',
            }}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </motion.div>
      )}
    </SW>
  )
}

// ════════════════════════════════════════════════════════════
// FAMILY SECTION
// ════════════════════════════════════════════════════════════
export const FamilySection = () => (
  <SW id="family">
    <Heading>Our Families</Heading>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
      {[
        {
          side: "Bride's Family",
          members: ["Mr. Ramesh Sharma — Father", "Mrs. Sunita Sharma — Mother", "Rahul Sharma — Brother"],
        },
        {
          side: "Groom's Family",
          members: ["Mr. Suresh Mehta — Father", "Mrs. Kavita Mehta — Mother", "Anjali Mehta — Sister"],
        },
      ].map((f, i) => (
        <motion.div key={i} variants={i === 0 ? slideLeft : slideRight}>
          <Glass style={{ padding: '28px 22px', textAlign: 'center', height: '100%' }}>
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
              style={{ marginBottom: 14 }}
            >
              <Heart style={{ width: 32, height: 32, color: '#f43f5e', margin: '0 auto' }} fill="#f43f5e" />
            </motion.div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22, fontWeight: 500,
              background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', margin: '0 0 16px'
            }}>{f.side}</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {f.members.map((m, j) => (
                <div key={j} style={{
                  padding: '8px 12px',
                  background: 'rgba(244,63,94,0.08)',
                  border: '1px solid rgba(244,63,94,0.2)',
                  borderRadius: 10,
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 12, fontWeight: 400,
                  color: '#fda4af',
                  letterSpacing: 0.3, lineHeight: 1.5,
                }}>{m}</div>
              ))}
            </div>
          </Glass>
        </motion.div>
      ))}
    </div>
  </SW>
)

// ════════════════════════════════════════════════════════════
// RSVP SECTION
// ════════════════════════════════════════════════════════════
export const RSVPSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hello! I will attend the wedding of Priya %26 Arjun', '_blank')
  }

  const handleCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Priya+%26+Arjun+Wedding&dates=20250214T053000Z/20250214T130000Z&details=Wedding+Ceremony&location=The+Grand+Palace+Banquet,+MG+Road,+Bengaluru`
    window.open(url, '_blank')
  }

  return (
    <SW id="rsvp">
      <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(32px, 7vw, 48px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e, #fda4af)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 10px',
        }}>We Joyfully Invite You</h2>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 14, color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.7,
        }}>Your presence will make our day truly complete.<br />We can't wait to celebrate with you.</p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Glass style={{ padding: '28px 22px' }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={handleWhatsApp}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #16a34a, #22c55e)',
              border: 'none', borderRadius: 14,
              padding: '14px 24px', marginBottom: 12,
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              fontFamily: "'Lato', sans-serif",
              fontSize: 12, letterSpacing: 2, fontWeight: 500,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L0 24l6.302-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.186-1.374l-.372-.221-3.861.917.975-3.765-.242-.387A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            RSVP VIA WHATSAPP
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={handleCalendar}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #be123c, #f43f5e)',
              border: 'none', borderRadius: 14,
              padding: '14px 24px',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              fontFamily: "'Lato', sans-serif",
              fontSize: 12, letterSpacing: 2, fontWeight: 500,
            }}
          >
            <Calendar style={{ width: 16, height: 16 }} />
            SAVE THE DATE
          </motion.button>

          <div style={{
            margin: '22px 0 18px',
            height: 1,
            background: 'rgba(244,63,94,0.18)'
          }} />

          <div style={{ textAlign: 'center' }}>
            <a
              href="tel:+919999999999"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: "'Lato', sans-serif", fontSize: 12,
                fontWeight: 400,
                color: '#fda4af', letterSpacing: 1,
                textDecoration: 'none', marginBottom: 12,
              }}
            >
              <Phone style={{ width: 13, height: 13, color: '#f43f5e', opacity: 0.7 }} />
              +91 99999 99999
            </a>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 18, fontStyle: 'italic',
                fontWeight: 400,
                color: '#fb7185',
                margin: 0, letterSpacing: 1,
              }}
            >#PriyaWedArjun</motion.p>
          </div>
        </Glass>
      </motion.div>

      <motion.div
        variants={fadeUp}
        style={{
          textAlign: 'center', marginTop: 32,
          padding: '0 16px',
        }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(15px, 3.5vw, 18px)',
          fontStyle: 'italic', fontWeight: 400,
          color: '#fda4af',
          lineHeight: 1.9, letterSpacing: 0.5,
        }}>
          "Do dilon ka milan hai, do roohon ka saath hai,<br />
          Aao ban jao is khushi mein humare haath mein haath."
        </p>
      </motion.div>
    </SW>
  )
}




// // src/components/Sections.jsx
// import { motion, useInView } from 'framer-motion'
// import { useRef, useState } from 'react'
// import { Calendar, Clock, MapPin, Heart, Phone, X } from 'lucide-react'

// // ── Animation Variants ───────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
// }
// const stagger = {
//   hidden: {},
//   show:   { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
// }
// const slideLeft  = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
// const slideRight = { hidden: { opacity: 0, x:  40 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }

// // ── Section Wrapper ──────────────────────────────────────────
// const SW = ({ children, id }) => {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, amount: 0.2 })
//   return (
//     <section id={id} ref={ref} style={{
//       minHeight: '100vh', display: 'flex',
//       alignItems: 'center', justifyContent: 'center',
//       padding: '72px 20px', position: 'relative', overflow: 'hidden'
//     }}>
//       <motion.div
//         variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
//         style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
//       >
//         {children}
//       </motion.div>
//     </section>
//   )
// }

// // ── Section Heading ──────────────────────────────────────────
// const Heading = ({ children }) => (
//   <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 40 }}>
//     <h2 style={{
//       fontFamily: "'Cormorant Garamond', Georgia, serif",
//       fontSize: 'clamp(36px, 8vw, 52px)',
//       fontWeight: 400, margin: 0, lineHeight: 1,
//       background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
//       WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     }}>{children}</h2>
//     <motion.div
//       initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//       style={{
//         height: 1, width: 80, margin: '14px auto 0',
//         background: 'linear-gradient(90deg, transparent, rgba(244,63,94,0.5), transparent)',
//         transformOrigin: 'center'
//       }}
//     />
//   </motion.div>
// )

// // ── Glass Card ───────────────────────────────────────────────
// const Glass = ({ children, style = {}, ...props }) => (
//   <div style={{
//     background: 'rgba(255,255,255,0.06)',
//     backdropFilter: 'blur(16px)',
//     WebkitBackdropFilter: 'blur(16px)',
//     border: '1px solid rgba(244,63,94,0.15)',
//     borderRadius: 20,
//     ...style
//   }} {...props}>
//     {children}
//   </div>
// )

// // ════════════════════════════════════════════════════════════
// // HERO SECTION (ADDED)
// // ════════════════════════════════════════════════════════════
// export const HeroSection = () => (
//   <SW id="hero">
//     <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         style={{
//           fontFamily: "'Lato', sans-serif",
//           fontSize: 12,
//           letterSpacing: 4,
//           color: 'rgba(244,63,94,0.6)',
//           marginBottom: 20,
//         }}
//       >
//         TOGETHER WITH THEIR FAMILIES
//       </motion.p>

//       <motion.h1
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
//         style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 'clamp(48px, 12vw, 80px)',
//           fontWeight: 400,
//           background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//           margin: 0,
//           lineHeight: 1.2,
//         }}
//       >
//         Priya
//         <br />
//         <span style={{ fontSize: 'clamp(36px, 8vw, 60px)' }}>&</span>
//         <br />
//         Arjun
//       </motion.h1>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         style={{ marginTop: 32 }}
//       >
//         <p style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 18,
//           color: 'rgba(244,63,94,0.7)',
//           marginBottom: 16,
//         }}>
//           Request the pleasure of your company
//         </p>

//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 24,
//           fontFamily: "'Lato', sans-serif",
//           fontSize: 13,
//           color: 'rgba(255,255,255,0.5)',
//         }}>
//           <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//             <Calendar style={{ width: 14, height: 14, color: '#f43f5e' }} />
//             February 14, 2025
//           </span>
//           <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//             <Clock style={{ width: 14, height: 14, color: '#f43f5e' }} />
//             11:00 AM onwards
//           </span>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         style={{ marginTop: 60 }}
//       >
//         <div style={{
//           width: 24,
//           height: 40,
//           border: '1.5px solid rgba(244,63,94,0.3)',
//           borderRadius: 20,
//           margin: '0 auto',
//           position: 'relative',
//         }}>
//           <div style={{
//             width: 4,
//             height: 8,
//             background: '#f43f5e',
//             borderRadius: 2,
//             position: 'absolute',
//             top: 8,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             animation: 'scrollDot 1.5s ease-in-out infinite',
//           }} />
//         </div>
//       </motion.div>
//     </motion.div>
//   </SW>
// )

// // ════════════════════════════════════════════════════════════
// // COUPLE SECTION
// // ════════════════════════════════════════════════════════════
// export const CoupleSection = () => (
//   <SW id="couple">
//     <Heading>The Couple</Heading>

//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'center' }}>

//       {/* Bride */}
//       <motion.div variants={slideLeft} style={{ textAlign: 'center', flex: '1 1 160px' }}>
//         <div style={{ position: 'relative', width: 150, height: 150, margin: '0 auto 16px' }}>
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
//             style={{
//               position: 'absolute', inset: -4,
//               borderRadius: '50%',
//               background: 'conic-gradient(from 0deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
//               padding: 3,
//             }}
//           >
//             <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg, #fff)' }} />
//           </motion.div>
//           <img
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&face"
//             alt="Bride"
//             style={{
//               position: 'absolute', inset: 4,
//               width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
//               borderRadius: '50%', objectFit: 'cover',
//             }}
//           />
//         </div>
//         <h3 style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 26, fontWeight: 400,
//           background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//           WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text', margin: '0 0 6px'
//         }}>Priya Sharma</h3>
//         <p style={{
//           fontFamily: "'Lato', sans-serif", fontWeight: 300,
//           fontSize: 12, color: 'rgba(244,63,94,0.65)',
//           letterSpacing: 0.5, lineHeight: 1.6
//         }}>Daughter of<br />Mr. &amp; Mrs. Ramesh Sharma</p>
//       </motion.div>

//       {/* Center heart */}
//       <motion.div
//         variants={fadeUp}
//         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
//       >
//         <motion.div
//           animate={{ scale: [1, 1.25, 1] }}
//           transition={{ duration: 1.8, repeat: Infinity }}
//         >
//           <Heart style={{ width: 36, height: 36, color: '#f43f5e' }} fill="#f43f5e" />
//         </motion.div>
//         <span style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 13, color: 'rgba(244,63,94,0.4)',
//           letterSpacing: 3, fontStyle: 'italic'
//         }}>weds</span>
//       </motion.div>

//       {/* Groom */}
//       <motion.div variants={slideRight} style={{ textAlign: 'center', flex: '1 1 160px' }}>
//         <div style={{ position: 'relative', width: 150, height: 150, margin: '0 auto 16px' }}>
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
//             style={{
//               position: 'absolute', inset: -4,
//               borderRadius: '50%',
//               background: 'conic-gradient(from 180deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
//               padding: 3,
//             }}
//           >
//             <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg, #fff)' }} />
//           </motion.div>
//           <img
//             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face"
//             alt="Groom"
//             style={{
//               position: 'absolute', inset: 4,
//               width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
//               borderRadius: '50%', objectFit: 'cover',
//             }}
//           />
//         </div>
//         <h3 style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 26, fontWeight: 400,
//           background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//           WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text', margin: '0 0 6px'
//         }}>Arjun Mehta</h3>
//         <p style={{
//           fontFamily: "'Lato', sans-serif", fontWeight: 300,
//           fontSize: 12, color: 'rgba(244,63,94,0.65)',
//           letterSpacing: 0.5, lineHeight: 1.6
//         }}>Son of<br />Mr. &amp; Mrs. Suresh Mehta</p>
//       </motion.div>
//     </div>
//   </SW>
// )

// // ════════════════════════════════════════════════════════════
// // EVENTS SECTION
// // ════════════════════════════════════════════════════════════
// const EVENTS = [
//   { name: 'Mehndi',    date: 'Feb 12', time: '6:00 PM',  venue: "Bride's Residence",  color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  icon: '🎨' },
//   { name: 'Haldi',     date: 'Feb 13', time: '10:00 AM', venue: "Groom's Residence", color: '#eab308', bg: 'rgba(234,179,8,0.08)',   icon: '🌼' },
//   { name: 'Wedding',   date: 'Feb 14', time: '11:00 AM', venue: 'The Grand Palace',   color: '#f43f5e', bg: 'rgba(244,63,94,0.08)',  icon: '💍' },
//   { name: 'Reception', date: 'Feb 14', time: '7:00 PM',  venue: 'The Grand Palace',   color: '#a855f7', bg: 'rgba(168,85,247,0.08)', icon: '🎉' },
// ]

// export const EventsSection = () => (
//   <SW id="events">
//     <Heading>Celebrations</Heading>
//     <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//       {EVENTS.map((e, i) => (
//         <motion.div key={i} variants={i % 2 === 0 ? slideLeft : slideRight}>
//           <Glass style={{
//             padding: '18px 20px',
//             display: 'flex', alignItems: 'center', gap: 16,
//             background: e.bg,
//             border: `1px solid ${e.color}28`,
//             borderLeft: `3px solid ${e.color}`,
//             borderRadius: 16,
//             borderTopLeftRadius: 4, borderBottomLeftRadius: 4,
//           }}>
//             <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{e.icon}</span>
//             <div style={{ flex: 1, minWidth: 0 }}>
//               <p style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontSize: 20, fontWeight: 500,
//                 color: e.color, margin: '0 0 6px'
//               }}>{e.name}</p>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
//                 {[
//                   { icon: <Calendar style={{ width: 11, height: 11 }} />, text: e.date },
//                   { icon: <Clock    style={{ width: 11, height: 11 }} />, text: e.time },
//                   { icon: <MapPin   style={{ width: 11, height: 11 }} />, text: e.venue },
//                 ].map(({ icon, text }) => (
//                   <span key={text} style={{
//                     display: 'flex', alignItems: 'center', gap: 4,
//                     fontFamily: "'Lato', sans-serif", fontSize: 11,
//                     color: 'rgba(255,255,255,0.55)', letterSpacing: 0.3,
//                   }}>
//                     <span style={{ color: e.color, opacity: 0.7 }}>{icon}</span>
//                     {text}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div style={{
//               width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
//               background: `${e.color}18`,
//               border: `1px solid ${e.color}30`,
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: 16, color: e.color, fontWeight: 500,
//             }}>{i + 1}</div>
//           </Glass>
//         </motion.div>
//       ))}
//     </div>
//   </SW>
// )

// // ════════════════════════════════════════════════════════════
// // VENUE SECTION
// // ════════════════════════════════════════════════════════════
// export const VenueSection = () => (
//   <SW id="venue">
//     <Heading>Venue</Heading>
//     <motion.div variants={fadeUp}>
//       <Glass style={{ overflow: 'hidden' }}>
//         <div style={{ width: '100%', height: 220, position: 'relative' }}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Rd%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//             style={{ width: '100%', height: '100%', border: 'none', display: 'block', filter: 'saturate(0.8) contrast(1.1)' }}
//             loading="lazy"
//             title="Venue Map"
//           />
//           <div style={{
//             position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
//             background: 'linear-gradient(to top, rgba(10,5,8,0.8), transparent)',
//             pointerEvents: 'none'
//           }} />
//         </div>

//         <div style={{ padding: '20px 22px' }}>
//           <h3 style={{
//             fontFamily: "'Cormorant Garamond', Georgia, serif",
//             fontSize: 24, fontWeight: 400,
//             background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//             WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text', margin: '0 0 6px'
//           }}>The Grand Palace Banquet</h3>

//           <p style={{
//             fontFamily: "'Lato', sans-serif", fontWeight: 300,
//             fontSize: 13, color: 'rgba(255,255,255,0.5)',
//             display: 'flex', alignItems: 'center', gap: 6, margin: '0 0 18px'
//           }}>
//             <MapPin style={{ width: 13, height: 13, color: '#f43f5e', opacity: 0.7 }} />
//             123, MG Road, Bengaluru, Karnataka
//           </p>

//           <motion.a
//             href="https://maps.google.com/?q=12.9716,77.5946"
//             target="_blank"
//             rel="noreferrer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             style={{
//               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
//               background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//               color: '#fff',
//               padding: '12px 24px', borderRadius: 40,
//               fontFamily: "'Lato', sans-serif", fontSize: 12,
//               letterSpacing: 2, textDecoration: 'none',
//               fontWeight: 400,
//             }}
//           >
//             <MapPin style={{ width: 14, height: 14 }} />
//             GET DIRECTIONS
//           </motion.a>
//         </div>
//       </Glass>
//     </motion.div>
//   </SW>
// )

// // ════════════════════════════════════════════════════════════
// // GALLERY SECTION
// // ════════════════════════════════════════════════════════════
// const IMAGES = [
//   "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop",
//   "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop",
// ]

// export const GallerySection = () => {
//   const [selected, setSelected] = useState(null)

//   return (
//     <SW id="gallery">
//       <Heading>Our Story</Heading>

//       <motion.div variants={stagger} style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(3, 1fr)',
//         gap: 8,
//       }}>
//         {IMAGES.map((src, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             whileHover={{ scale: 1.04, zIndex: 2 }}
//             onClick={() => setSelected(src)}
//             style={{
//               aspectRatio: i === 0 || i === 3 ? '1/1.4' : '1/1',
//               borderRadius: 14,
//               overflow: 'hidden',
//               cursor: 'pointer',
//               position: 'relative',
//               gridRow: i === 0 || i === 3 ? 'span 1' : 'auto',
//             }}
//           >
//             <img
//               src={src} alt={`Gallery ${i + 1}`}
//               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//             />
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'linear-gradient(135deg, rgba(244,63,94,0.3), transparent)',
//               opacity: 0, transition: 'opacity 0.3s',
//             }}
//               onMouseEnter={e => e.currentTarget.style.opacity = 1}
//               onMouseLeave={e => e.currentTarget.style.opacity = 0}
//             />
//           </motion.div>
//         ))}
//       </motion.div>

//       {selected && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           onClick={() => setSelected(null)}
//           style={{
//             position: 'fixed', inset: 0,
//             background: 'rgba(0,0,0,0.92)',
//             zIndex: 999,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             padding: 20,
//           }}
//         >
//           <motion.img
//             src={selected}
//             initial={{ scale: 0.85, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 28 }}
//             style={{
//               maxWidth: '90vw', maxHeight: '85vh',
//               borderRadius: 16, objectFit: 'contain',
//               boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
//             }}
//           />
//           <button
//             onClick={() => setSelected(null)}
//             style={{
//               position: 'fixed', top: 20, right: 20,
//               background: 'rgba(255,255,255,0.1)',
//               border: '1px solid rgba(255,255,255,0.2)',
//               borderRadius: '50%', width: 40, height: 40,
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               cursor: 'pointer', color: '#fff',
//             }}
//           >
//             <X style={{ width: 18, height: 18 }} />
//           </button>
//         </motion.div>
//       )}
//     </SW>
//   )
// }

// // ════════════════════════════════════════════════════════════
// // FAMILY SECTION
// // ════════════════════════════════════════════════════════════
// export const FamilySection = () => (
//   <SW id="family">
//     <Heading>Our Families</Heading>
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
//       {[
//         {
//           side: "Bride's Family",
//           members: ["Mr. Ramesh Sharma — Father", "Mrs. Sunita Sharma — Mother", "Rahul Sharma — Brother"],
//         },
//         {
//           side: "Groom's Family",
//           members: ["Mr. Suresh Mehta — Father", "Mrs. Kavita Mehta — Mother", "Anjali Mehta — Sister"],
//         },
//       ].map((f, i) => (
//         <motion.div key={i} variants={i === 0 ? slideLeft : slideRight}>
//           <Glass style={{ padding: '28px 22px', textAlign: 'center', height: '100%' }}>
//             <motion.div
//               animate={{ scale: [1, 1.15, 1] }}
//               transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
//               style={{ marginBottom: 14 }}
//             >
//               <Heart style={{ width: 32, height: 32, color: '#f43f5e', margin: '0 auto' }} fill="#f43f5e" />
//             </motion.div>

//             <h3 style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontSize: 22, fontWeight: 400,
//               background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//               WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text', margin: '0 0 16px'
//             }}>{f.side}</h3>

//             <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//               {f.members.map((m, j) => (
//                 <div key={j} style={{
//                   padding: '8px 12px',
//                   background: 'rgba(244,63,94,0.05)',
//                   border: '1px solid rgba(244,63,94,0.1)',
//                   borderRadius: 10,
//                   fontFamily: "'Lato', sans-serif",
//                   fontSize: 12, fontWeight: 300,
//                   color: 'rgba(255,255,255,0.65)',
//                   letterSpacing: 0.3, lineHeight: 1.5,
//                 }}>{m}</div>
//               ))}
//             </div>
//           </Glass>
//         </motion.div>
//       ))}
//     </div>
//   </SW>
// )

// // ════════════════════════════════════════════════════════════
// // RSVP SECTION
// // ════════════════════════════════════════════════════════════
// export const RSVPSection = () => {
//   const handleWhatsApp = () => {
//     window.open('https://wa.me/919999999999?text=Hello! I will attend the wedding of Priya %26 Arjun', '_blank')
//   }

//   const handleCalendar = () => {
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Priya+%26+Arjun+Wedding&dates=20250214T053000Z/20250214T130000Z&details=Wedding+Ceremony&location=The+Grand+Palace+Banquet,+MG+Road,+Bengaluru`
//     window.open(url, '_blank')
//   }

//   return (
//     <SW id="rsvp">
//       <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 32 }}>
//         <h2 style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 'clamp(32px, 7vw, 48px)',
//           fontWeight: 400,
//           background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
//           WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text', margin: '0 0 10px',
//         }}>We Joyfully Invite You</h2>
//         <p style={{
//           fontFamily: "'Lato', sans-serif", fontWeight: 300,
//           fontSize: 14, color: 'rgba(255,255,255,0.5)',
//           letterSpacing: 0.5, lineHeight: 1.7,
//         }}>Your presence will make our day truly complete.<br />We can't wait to celebrate with you.</p>
//       </motion.div>

//       <motion.div variants={fadeUp}>
//         <Glass style={{ padding: '28px 22px' }}>
//           <motion.button
//             whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
//             onClick={handleWhatsApp}
//             style={{
//               width: '100%',
//               background: 'linear-gradient(135deg, #16a34a, #22c55e)',
//               border: 'none', borderRadius: 14,
//               padding: '14px 24px', marginBottom: 12,
//               color: '#fff', cursor: 'pointer',
//               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
//               fontFamily: "'Lato', sans-serif",
//               fontSize: 12, letterSpacing: 2, fontWeight: 400,
//             }}
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L0 24l6.302-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.186-1.374l-.372-.221-3.861.917.975-3.765-.242-.387A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
//             </svg>
//             RSVP VIA WHATSAPP
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
//             onClick={handleCalendar}
//             style={{
//               width: '100%',
//               background: 'linear-gradient(135deg, #be123c, #f43f5e)',
//               border: 'none', borderRadius: 14,
//               padding: '14px 24px',
//               color: '#fff', cursor: 'pointer',
//               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
//               fontFamily: "'Lato', sans-serif",
//               fontSize: 12, letterSpacing: 2, fontWeight: 400,
//             }}
//           >
//             <Calendar style={{ width: 16, height: 16 }} />
//             SAVE THE DATE
//           </motion.button>

//           <div style={{
//             margin: '22px 0 18px',
//             height: 1,
//             background: 'rgba(244,63,94,0.12)'
//           }} />

//           <div style={{ textAlign: 'center' }}>
//             <a
//               href="tel:+919999999999"
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: 6,
//                 fontFamily: "'Lato', sans-serif", fontSize: 12,
//                 color: 'rgba(255,255,255,0.45)', letterSpacing: 1,
//                 textDecoration: 'none', marginBottom: 12,
//               }}
//             >
//               <Phone style={{ width: 13, height: 13, color: '#f43f5e', opacity: 0.6 }} />
//               +91 99999 99999
//             </a>

//             <motion.p
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               style={{
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 fontSize: 18, fontStyle: 'italic',
//                 color: 'rgba(244,63,94,0.5)',
//                 margin: 0, letterSpacing: 1,
//               }}
//             >#PriyaWedArjun</motion.p>
//           </div>
//         </Glass>
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         style={{
//           textAlign: 'center', marginTop: 32,
//           padding: '0 16px',
//         }}
//       >
//         <p style={{
//           fontFamily: "'Cormorant Garamond', Georgia, serif",
//           fontSize: 'clamp(15px, 3.5vw, 18px)',
//           fontStyle: 'italic', fontWeight: 300,
//           color: 'rgba(244,63,94,0.4)',
//           lineHeight: 1.9, letterSpacing: 0.5,
//         }}>
//           "Do dilon ka milan hai, do roohon ka saath hai,<br />
//           Aao ban jao is khushi mein humare haath mein haath."
//         </p>
//       </motion.div>
//     </SW>
//   )
// }