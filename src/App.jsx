// src/App.jsx
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope3D from './components/Envelope3D'
import VideoSection from './components/VideoSection'
import FloatingElements from './components/FloatingElements'
import { HeroSection, CoupleSection, EventsSection, VenueSection, GallerySection, FamilySection, RSVPSection } from './components/Sections'
import './index.css'

function App() {
  const [step, setStep] = useState('envelope') // envelope -> video -> invitation
  const [showInvitation, setShowInvitation] = useState(false)

  const handleEnvelopeOpen = () => {
    setStep('video')
  }

  const handleVideoComplete = () => {
    setShowInvitation(true)
    setStep('invitation')
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Floating Elements - Always there */}
      <FloatingElements />
      
      {/* Main Flow */}
      <AnimatePresence mode="wait">
        {step === 'envelope' && (
          <Envelope3D key="envelope" onOpen={handleEnvelopeOpen} />
        )}
        
        {step === 'video' && (
          <VideoSection key="video" onComplete={handleVideoComplete} />
        )}
        
        {step === 'invitation' && showInvitation && (
          <div key="invitation" className="smooth-scroll">
            <HeroSection />
            <CoupleSection />
            <EventsSection />
            <VenueSection />
            <GallerySection />
            <FamilySection />
            <RSVPSection />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App