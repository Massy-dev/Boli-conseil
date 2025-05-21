'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#002b45]/70 text-white py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texte avec animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            À propos de <span className="text-[#ffd700]">Boli Conseil</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Cabinet de conseil juridique fondé sur l’excellence, la rigueur et la confiance. 
            Nous accompagnons les entreprises et les particuliers dans la défense de leurs intérêts, 
            avec une expertise reconnue en droit du travail, rédaction contractuelle, contentieux 
            et accompagnement stratégique.
          </p>
        </motion.div>

        {/* Image illustrative */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-72 md:h-96 bg-cover bg-center rounded-xl shadow-lg relative"
            style={{ backgroundImage: "url('/MrBoli.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
