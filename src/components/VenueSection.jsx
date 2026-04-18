// src/components/VenueSection.jsx
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const VenueSection = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="font-cormorant text-4xl md:text-5xl text-center rose-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Venue
        </motion.h2>
        
        <motion.div 
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <h3 className="font-cormorant text-3xl text-center rose-text mb-2">The Grand Palace Banquet</h3>
            <p className="text-center text-gray-600 mb-6">123, MG Road, Bengaluru, Karnataka - 560001</p>
            
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Rd%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
            
            <motion.a
              href="https://maps.google.com/?q=12.9716,77.5946"
              target="_blank"
              className="block w-full text-center btn-rose text-white py-3 rounded-xl font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Directions <MapPin className="w-4 h-4 inline ml-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VenueSection