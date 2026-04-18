// src/components/PhotoGallery.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X } from 'lucide-react'

const galleryImages = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop"
]

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="font-cormorant text-4xl md:text-5xl text-center rose-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Love Story
        </motion.h2>
        
        <p className="text-center text-gray-600 mb-12">A journey of love, laughter, and happily ever after</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(photo)}
              whileHover={{ scale: 1.03 }}
            >
              <img src={photo} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence>
          {selectedImage && (
            <motion.div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}>
              <motion.img src={selectedImage} className="max-w-full max-h-[90vh] object-contain rounded-xl"
                initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
                onClick={(e) => e.stopPropagation()} />
              <button className="absolute top-4 right-4 text-white text-4xl hover:text-rose-500" onClick={() => setSelectedImage(null)}>×</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PhotoGallery