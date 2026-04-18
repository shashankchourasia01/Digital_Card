// src/components/Sections.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, MapPin, Heart, Phone, Camera } from 'lucide-react'

// Section Wrapper for scroll animations
const SectionWrapper = ({ children, id }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <section id={id} ref={ref} className="smooth-section flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// Hero Section
export const HeroSection = () => (
  <SectionWrapper id="hero">
    <div className="text-center">
      <p className="text-rose-500 tracking-wider text-sm mb-4">Together with their families</p>
      <h1 className="font-cormorant text-5xl md:text-7xl gradient-text mb-4">
        Priya<br />&<br />Arjun
      </h1>
      <p className="text-rose-600 text-lg mb-6">Request the pleasure of your company</p>
      <div className="flex justify-center gap-4 text-rose-500 text-sm">
        <div className="flex items-center gap-1"><Calendar size={14} /> Feb 14, 2025</div>
        <div className="flex items-center gap-1"><Clock size={14} /> 11:00 AM</div>
      </div>
    </div>
  </SectionWrapper>
)

// Bride & Groom Section
export const CoupleSection = () => (
  <SectionWrapper id="couple">
    <h2 className="font-cormorant text-4xl text-center gradient-text mb-8">The Couple</h2>
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="text-center">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-rose-400 mb-3">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-cormorant text-2xl gradient-text">Priya Sharma</h3>
        <p className="text-rose-500 text-sm">Daughter of Mr. & Mrs. Ramesh Sharma</p>
      </div>
      <Heart className="text-rose-500 w-8 h-8 animate-pulse" fill="#f43f5e" />
      <div className="text-center">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-rose-400 mb-3">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-cormorant text-2xl gradient-text">Arjun Mehta</h3>
        <p className="text-rose-500 text-sm">Son of Mr. & Mrs. Suresh Mehta</p>
      </div>
    </div>
  </SectionWrapper>
)

// Events Section
export const EventsSection = () => {
  const events = [
    { name: "Mehndi", date: "Feb 12", time: "6:00 PM", venue: "Bride's Residence", icon: "🎨" },
    { name: "Haldi", date: "Feb 13", time: "10:00 AM", venue: "Groom's Residence", icon: "🟡" },
    { name: "Wedding", date: "Feb 14", time: "11:00 AM", venue: "The Grand Palace", icon: "💍" },
    { name: "Reception", date: "Feb 14", time: "7:00 PM", venue: "The Grand Palace", icon: "🎉" }
  ]

  return (
    <SectionWrapper id="events">
      <h2 className="font-cormorant text-4xl text-center gradient-text mb-8">Celebrations</h2>
      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="glass p-4 flex items-center gap-4">
            <span className="text-3xl">{e.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold text-rose-600">{e.name}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1"><Calendar size={12} /> {e.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {e.time}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {e.venue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// Venue Section
export const VenueSection = () => (
  <SectionWrapper id="venue">
    <h2 className="font-cormorant text-4xl text-center gradient-text mb-6">Venue</h2>
    <div className="glass p-6 text-center">
      <h3 className="font-cormorant text-2xl text-rose-600 mb-2">The Grand Palace Banquet</h3>
      <p className="text-gray-600 text-sm mb-4">123, MG Road, Bengaluru</p>
      <div className="aspect-video rounded-xl overflow-hidden mb-4">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Rd%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <a href="https://maps.google.com" target="_blank" className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm">
        Get Directions <MapPin size={14} className="inline" />
      </a>
    </div>
  </SectionWrapper>
)

// Gallery Section
export const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=300&fit=crop"
  ]

  return (
    <SectionWrapper id="gallery">
      <h2 className="font-cormorant text-4xl text-center gradient-text mb-6">Gallery</h2>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

// Family Section
export const FamilySection = () => (
  <SectionWrapper id="family">
    <h2 className="font-cormorant text-4xl text-center gradient-text mb-8">Families</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glass p-6 text-center">
        <Heart className="w-8 h-8 text-rose-500 mx-auto mb-3" fill="#f43f5e" />
        <h3 className="font-cormorant text-2xl text-rose-600">Bride's Family</h3>
        <p className="text-gray-700 mt-2">Mr. & Mrs. Ramesh Sharma</p>
      </div>
      <div className="glass p-6 text-center">
        <Heart className="w-8 h-8 text-rose-500 mx-auto mb-3" fill="#f43f5e" />
        <h3 className="font-cormorant text-2xl text-rose-600">Groom's Family</h3>
        <p className="text-gray-700 mt-2">Mr. & Mrs. Suresh Mehta</p>
      </div>
    </div>
  </SectionWrapper>
)

// RSVP Section
export const RSVPSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hello! I will attend the wedding of Priya & Arjun', '_blank')
  }

  return (
    <SectionWrapper id="rsvp">
      <div className="text-center">
        <h2 className="font-cormorant text-4xl gradient-text mb-4">We Joyfully Invite You</h2>
        <p className="text-gray-600 mb-6">Your presence will make our day complete.</p>
        
        <button onClick={handleWhatsApp} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold mb-3">
          RSVP via WhatsApp
        </button>
        
        <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-bold">
          Save the Date
        </button>
        
        <div className="mt-6 pt-6 border-t border-rose-200">
          <p className="text-gray-500 text-sm">Contact: <Phone size={12} className="inline" /> +91 99999 99999</p>
          <p className="text-rose-400 text-xs mt-2">#PriyaWedArjun</p>
        </div>
      </div>
    </SectionWrapper>
  )
}