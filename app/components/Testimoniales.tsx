'use client';

import { motion } from 'framer-motion';

type TestyMoni = {
  _id: string,
  author: string,
  content: string,
  position: string,
  imageUrl: string
}

export default function Testimonials({ testimonials }: { testimonials: TestyMoni[] }) {
  return (
    <section className="relative bg-fixed bg-cover bg-center py-20" id="testimonials"
    style={{ backgroundImage: "url('Testimonial.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"/>
      
        <div className="relative z-10 max-w-6xl mx-auto text-center mb-12 z-50">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700]">
            Témoignages
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Ce que nos clients disent de nous.
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-md mb-4 italic">“{t.content}”</p>
              <div className="font-semibold text-[#ffd700]">{t.author}</div>
              <div className="text-sm text-gray-500 text-[#e5e7eb]">{t.position}</div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
