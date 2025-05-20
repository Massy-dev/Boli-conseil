'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sophie D.",
    position: "Directrice RH, PME Lyonnaise",
    comment:
      "Boli Conseil a été un partenaire juridique clé dans notre transformation. Rigueur, écoute et efficacité au rendez-vous.",
  },
  {
    name: "Mehdi K.",
    position: "Entrepreneur",
    comment:
      "Un accompagnement complet, une vraie expertise. Merci pour votre soutien dans la création de ma structure.",
  },
  {
    name: "Camille L.",
    position: "Responsable juridique",
    comment:
      "Une équipe pointue, disponible, et orientée solutions. Leur savoir-faire en droit du travail est remarquable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#002b45] text-white py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c4a46a]">
          Témoignages
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Ce que nos clients disent de nous.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white text-[#002b45] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-md mb-4 italic">“{t.comment}”</p>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.position}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
