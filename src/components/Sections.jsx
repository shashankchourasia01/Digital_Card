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
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// ── Section Heading ──────────────────────────────────────────
const Heading = ({ children }) => (
  <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 32 }}>
    <h2 style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: 'clamp(42px, 10vw, 64px)',
      fontWeight: 500,
      margin: 0,
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #fb7185, #f43f5e, #fda4af)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>{children}</h2>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        height: 2,
        width: 100,
        margin: '16px auto 0',
        background: 'linear-gradient(90deg, transparent, #f43f5e, #fb7185, #f43f5e, transparent)',
        transformOrigin: 'center'
      }}
    />
  </motion.div>
)

// ── Glass Card ───────────────────────────────────────────────
const Glass = ({ children, style = {}, ...props }) => (
  <div style={{
    background: 'rgba(15,10,12,0.5)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(244,63,94,0.2)',
    borderRadius: 24,
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
          fontSize: 'clamp(13px, 4vw, 16px)',
          fontWeight: 400,
          letterSpacing: 5,
          color: '#fb7185',
          marginBottom: 24,
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
          fontSize: 'clamp(56px, 15vw, 100px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e, #fda4af)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        Priya
        <br />
        <span style={{ fontSize: 'clamp(40px, 10vw, 70px)' }}>&</span>
        <br />
        Arjun
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: 36 }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(20px, 5vw, 26px)',
          fontWeight: 400,
          color: '#fda4af',
          marginBottom: 20,
        }}>
          Request the pleasure of your company
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 28,
          fontFamily: "'Lato', sans-serif",
          fontSize: 'clamp(14px, 4vw, 16px)',
          fontWeight: 400,
          color: '#fb7185',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Calendar style={{ width: 16, height: 16, color: '#f43f5e' }} />
            February 14, 2025
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Clock style={{ width: 16, height: 16, color: '#f43f5e' }} />
            11:00 AM onwards
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ marginTop: 50 }}
      >
        <div style={{
          width: 28,
          height: 45,
          border: '2px solid rgba(244,63,94,0.4)',
          borderRadius: 24,
          margin: '0 auto',
          position: 'relative',
        }}>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 5,
              height: 10,
              background: '#f43f5e',
              borderRadius: 3,
              position: 'absolute',
              top: 8,
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

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'center' }}>

      {/* Bride */}
      <motion.div variants={slideLeft} style={{ textAlign: 'center', flex: '1 1 200px' }}>
        <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto 16px' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -5,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
              padding: 3,
            }}
          >
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a0506' }} />
          </motion.div>
          <img
            src="https://images.unsplash.com/photo-1600685890506-593fdf55949b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bride"
            style={{
              position: 'absolute', inset: 5,
              width: 'calc(100% - 10px)', height: 'calc(100% - 10px)',
              borderRadius: '50%', objectFit: 'cover',
            }}
          />
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(28px, 6vw, 34px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 8px'
        }}>Priya Sharma</h3>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 'clamp(13px, 3.5vw, 15px)',
          color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.5
        }}>Daughter of<br />Mr. &amp; Mrs. Ramesh Sharma</p>
      </motion.div>

      {/* Center heart */}
      <motion.div
        variants={fadeUp}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Heart style={{ width: 44, height: 44, color: '#f43f5e' }} fill="#f43f5e" />
        </motion.div>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 16,
          color: '#fb7185',
          letterSpacing: 4,
          fontStyle: 'italic', fontWeight: 400,
        }}>weds</span>
      </motion.div>

      {/* Groom */}
      <motion.div variants={slideRight} style={{ textAlign: 'center', flex: '1 1 200px' }}>
        <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto 16px' }}>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -5,
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg, #f43f5e, #fb7185, #fda4af, #f43f5e)',
              padding: 3,
            }}
          >
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a0506' }} />
          </motion.div>
          <img
            src="https://media.istockphoto.com/id/2200870595/photo/happy-groom-greeting-in-prayer-pose-at-wedding-ceremony.jpg?s=2048x2048&w=is&k=20&c=orWo9ytOf8WlAU_S889vAUznE6_6xfMr7UKlXER5ST0="
            alt="Groom"
            style={{
              position: 'absolute', inset: 5,
              width: 'calc(100% - 10px)', height: 'calc(100% - 10px)',
              borderRadius: '50%', objectFit: 'cover',
            }}
          />
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(28px, 6vw, 34px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 8px'
        }}>Arjun Mehta</h3>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 'clamp(13px, 3.5vw, 15px)',
          color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.5
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {EVENTS.map((e, i) => (
        <motion.div key={i} variants={i % 2 === 0 ? slideLeft : slideRight}>
          <Glass style={{
            padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 20,
            background: e.bg,
            border: `1px solid ${e.color}40`,
            borderLeft: `4px solid ${e.color}`,
            borderRadius: 20,
            borderTopLeftRadius: 8, borderBottomLeftRadius: 8,
          }}>
            <span style={{ fontSize: 36, lineHeight: 1, flexShrink: 0 }}>{e.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(22px, 5vw, 28px)',
                fontWeight: 500,
                color: e.color, margin: '0 0 8px'
              }}>{e.name}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
                {[
                  { icon: <Calendar style={{ width: 14, height: 14 }} />, text: e.date },
                  { icon: <Clock style={{ width: 14, height: 14 }} />, text: e.time },
                  { icon: <MapPin style={{ width: 14, height: 14 }} />, text: e.venue },
                ].map(({ icon, text }) => (
                  <span key={text} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontFamily: "'Lato', sans-serif",
                    fontSize: 'clamp(12px, 3.5vw, 14px)',
                    fontWeight: 400,
                    color: '#fda4af',
                    letterSpacing: 0.3,
                  }}>
                    <span style={{ color: e.color, opacity: 0.8 }}>{icon}</span>
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
              background: `${e.color}25`,
              border: `1px solid ${e.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18, color: e.color, fontWeight: 600,
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
        <div style={{ width: '100%', height: 260, position: 'relative' }}>
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

        <div style={{ padding: '24px 28px' }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(28px, 6vw, 34px)',
            fontWeight: 500,
            background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', margin: '0 0 10px'
          }}>The Grand Palace Banquet</h3>

          <p style={{
            fontFamily: "'Lato', sans-serif", fontWeight: 400,
            fontSize: 'clamp(14px, 4vw, 16px)',
            color: '#fda4af',
            display: 'flex', alignItems: 'center', gap: 8, margin: '0 0 20px'
          }}>
            <MapPin style={{ width: 16, height: 16, color: '#f43f5e', opacity: 0.8 }} />
            123, MG Road, Bengaluru, Karnataka
          </p>

          <motion.a
            href="https://maps.google.com/?q=12.9716,77.5946"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: 'linear-gradient(135deg, #be123c, #f43f5e)',
              color: '#fff',
              padding: '14px 28px', borderRadius: 50,
              fontFamily: "'Lato', sans-serif",
              fontSize: 'clamp(13px, 3.5vw, 15px)',
              letterSpacing: 2, textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <MapPin style={{ width: 16, height: 16 }} />
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
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop",
]

export const GallerySection = () => {
  const [selected, setSelected] = useState(null)

  return (
    <SW id="gallery">
      <Heading>Our Story</Heading>

      <motion.div variants={stagger} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
      }}>
        {IMAGES.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05, zIndex: 2 }}
            onClick={() => setSelected(src)}
            style={{
              aspectRatio: i === 0 || i === 3 ? '1/1.3' : '1/1',
              borderRadius: 16,
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
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
              borderRadius: 20, objectFit: 'contain',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          />
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', top: 20, right: 20,
              background: 'rgba(244,63,94,0.15)',
              border: '1px solid rgba(244,63,94,0.3)',
              borderRadius: '50%', width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff',
            }}
          >
            <X style={{ width: 20, height: 20 }} />
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
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
          <Glass style={{ padding: '32px 24px', textAlign: 'center', height: '100%' }}>
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
              style={{ marginBottom: 16 }}
            >
              <Heart style={{ width: 40, height: 40, color: '#f43f5e', margin: '0 auto' }} fill="#f43f5e" />
            </motion.div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(26px, 5vw, 32px)',
              fontWeight: 500,
              background: 'linear-gradient(135deg, #fb7185, #f43f5e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', margin: '0 0 20px'
            }}>{f.side}</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {f.members.map((m, j) => (
                <div key={j} style={{
                  padding: '10px 14px',
                  background: 'rgba(244,63,94,0.08)',
                  border: '1px solid rgba(244,63,94,0.2)',
                  borderRadius: 12,
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  fontWeight: 400,
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
      <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(38px, 9vw, 56px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #fb7185, #f43f5e, #fda4af)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', margin: '0 0 12px',
        }}>We Joyfully Invite You</h2>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 400,
          fontSize: 'clamp(15px, 4vw, 18px)',
          color: '#fda4af',
          letterSpacing: 0.5, lineHeight: 1.6,
        }}>Your presence will make our day truly complete.<br />We can't wait to celebrate with you.</p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Glass style={{ padding: '32px 28px' }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={handleWhatsApp}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #16a34a, #22c55e)',
              border: 'none', borderRadius: 16,
              padding: '16px 24px', marginBottom: 14,
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              fontFamily: "'Lato', sans-serif",
              fontSize: 'clamp(13px, 3.5vw, 15px)',
              letterSpacing: 2, fontWeight: 500,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
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
              border: 'none', borderRadius: 16,
              padding: '16px 24px',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              fontFamily: "'Lato', sans-serif",
              fontSize: 'clamp(13px, 3.5vw, 15px)',
              letterSpacing: 2, fontWeight: 500,
            }}
          >
            <Calendar style={{ width: 18, height: 18 }} />
            SAVE THE DATE
          </motion.button>

          <div style={{
            margin: '24px 0 20px',
            height: 1,
            background: 'rgba(244,63,94,0.18)'
          }} />

          <div style={{ textAlign: 'center' }}>
            <a
              href="tel:+919999999999"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(14px, 4vw, 16px)',
                fontWeight: 400,
                color: '#fda4af', letterSpacing: 1,
                textDecoration: 'none', marginBottom: 14,
              }}
            >
              <Phone style={{ width: 16, height: 16, color: '#f43f5e', opacity: 0.7 }} />
              +91 99999 99999
            </a>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(20px, 5vw, 26px)',
                fontStyle: 'italic',
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
          textAlign: 'center', marginTop: 36,
          padding: '0 16px',
        }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(18px, 4.5vw, 22px)',
          fontStyle: 'italic', fontWeight: 400,
          color: '#fda4af',
          lineHeight: 1.8, letterSpacing: 0.5,
        }}>
          "Do dilon ka milan hai, do roohon ka saath hai,<br />
          Aao ban jao is khushi mein humare haath mein haath."
        </p>
      </motion.div>
    </SW>
  )
}