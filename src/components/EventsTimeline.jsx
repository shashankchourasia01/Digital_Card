// src/components/EventsTimeline.jsx
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  { name: "Mehndi", date: "Feb 12, 2025", time: "6:00 PM", venue: "Bride's Residence", icon: "🎨", color: "#f43f5e" },
  { name: "Haldi", date: "Feb 13, 2025", time: "10:00 AM", venue: "Groom's Residence", icon: "🟡", color: "#f97316" },
  { name: "Wedding", date: "Feb 14, 2025", time: "11:00 AM", venue: "The Grand Palace", icon: "💍", color: "#ec4899" },
  { name: "Reception", date: "Feb 14, 2025", time: "7:00 PM", venue: "The Grand Palace", icon: "🎉", color: "#db2777" }
]

const EventsTimeline = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-cormorant text-4xl md:text-5xl text-center rose-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Wedding Celebrations
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 via-pink-500 to-rose-600" />
          
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 z-10 shadow-lg" />
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  className="glass-card p-5 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{event.icon}</span>
                    <h3 className="font-cormorant text-2xl rose-text">{event.name}</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-rose-500" /><span>{event.date}</span></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-rose-500" /><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-500" /><span>{event.venue}</span></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsTimeline