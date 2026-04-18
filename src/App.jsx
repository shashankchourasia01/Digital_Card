// src/App.jsx
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope'
import FloatingElements from './components/FloatingElements'
import HeroSection from './components/HeroSection'
import BrideGroom from './components/BrideGroom'
import EventsTimeline from './components/EventsTimeline'
import VenueSection from './components/VenueSection'
import PhotoGallery from './components/PhotoGallery'
import FamilyDetails from './components/FamilyDetails'
import RSVPSection from './components/RSVPSection'
import Navigation from './components/Navigation'
import './index.css'

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Floating Flowers & Butterflies - Always visible */}
      <FloatingElements />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <Envelope onOpen={() => setIsInvitationOpen(true)} />
        ) : (
          <div className="snap-container relative z-10">
            <Navigation />
            <div id="hero"><HeroSection /></div>
            <div id="bride-groom"><BrideGroom /></div>
            <div id="events"><EventsTimeline /></div>
            <div id="venue"><VenueSection /></div>
            <div id="gallery"><PhotoGallery /></div>
            <div id="family"><FamilyDetails /></div>
            <div id="rsvp"><RSVPSection /></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App