// src/components/FamilyDetails.jsx
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const FamilyDetails = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="font-cormorant text-4xl md:text-5xl text-center rose-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Families
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="text-center p-6 glass-card"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" fill="#f43f5e" />
            <h3 className="font-cormorant text-3xl rose-text mb-3">Bride's Family</h3>
            <p className="text-gray-700 text-lg">Mr. & Mrs. Ramesh Sharma</p>
            <p className="text-rose-500 mt-2">Proudly presents their daughter Priya</p>
          </motion.div>
          
          <motion.div className="text-center p-6 glass-card"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" fill="#f43f5e" />
            <h3 className="font-cormorant text-3xl rose-text mb-3">Groom's Family</h3>
            <p className="text-gray-700 text-lg">Mr. & Mrs. Suresh Mehta</p>
            <p className="text-rose-500 mt-2">Joyfully invite you to celebrate Arjun's wedding</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FamilyDetails