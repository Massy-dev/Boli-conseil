'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* 🔹 Image floutée avec zoom progressif */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/macbook.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        aria-hidden="true"
      />

      {/* 🔹 Overlay assombrissant */}
      <div className="absolute inset-0 bg-[#002b45]/80" />

      {/* 🔹 Texte animé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Votre sécurité juridique,<br className="hidden md:inline" />
          <span className="text-[#c4a46a]"> notre priorité.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Cabinet de conseil juridique dédié aux entreprises et aux particuliers.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#c4a46a] text-[#002b45] px-6 py-3 font-semibold rounded-md hover:bg-[#d6b76c] transition-colors"
        >
          Prendre rendez-vous
        </a>
      </motion.div>
    </section>
  );
}
