// src/components/RSVPSection.jsx
import { motion } from 'framer-motion'
import { Heart, Calendar, Phone } from 'lucide-react'

const RSVPSection = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919999999999?text=Hello! I'm honored to attend the wedding of Priya & Arjun. #PriyaWedArjun`, '_blank')
  }

  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-cormorant text-4xl md:text-5xl rose-text mb-6">We Joyfully Invite You</h2>
          <p className="text-gray-700 text-lg mb-8">Your presence will make our day complete. Kindly grace us with your blessings and love.</p>
          
          <div className="space-y-4">
            <motion.button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleWhatsApp}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.58-.488-.5-.67-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              RSVP via WhatsApp
            </motion.button>
            
            <motion.button className="w-full btn-rose text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Calendar className="w-5 h-5" /> Save the Date
            </motion.button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-rose-200">
            <p className="text-gray-600">For any queries, please contact:</p>
            <p className="text-rose-600 font-bold mt-2 flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> +91 99999 99999</p>
            <p className="text-sm text-rose-400 mt-4">#PriyaWedArjun</p>
          </div>
          
          <motion.div className="mt-8" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Heart className="w-8 h-8 text-rose-500 mx-auto" fill="#f43f5e" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RSVPSection