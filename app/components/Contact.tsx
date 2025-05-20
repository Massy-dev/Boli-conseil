'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="bg-[#001f33] text-white py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#c4a46a]">
            Prendre rendez-vous
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Vous souhaitez une consultation ou en savoir plus sur nos services ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md text-[#001f33]"
        >
          <input
            type="text"
            placeholder="Nom"
            className="border p-3 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md w-full"
          />
          <input
            type="tel"
            placeholder="Téléphone"
            className="border p-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Objet"
            className="border p-3 rounded-md w-full"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="border p-3 rounded-md w-full md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-[#c4a46a] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#b19257] transition md:col-span-2"
          >
            Envoyer le message
          </button>
        </motion.form>

        <div className="text-center mt-10 text-gray-300">
          <p>📞 01 23 45 67 89</p>
          <p>📧 contact@boliconseil.fr</p>
          <p className="mt-2">📍 12 rue de la Loi, Paris 75000</p>
        </div>
      </div>
    </section>
  );
}
