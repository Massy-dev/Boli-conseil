'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulaire soumis !');
    // Intégrer EmailJS ou backend ici
  };

  return (
    <section  className="bg-black text-white py-20 px-6 sm:px-12" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div>
          <h2 className="text-4xl font-serif text-[#ffd700] mb-6">Prendre rendez-vous</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 placeholder-gray-400"
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 placeholder-gray-400"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Message (facultatif)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-[#ffd700] cursor-pointer text-black font-semibold py-3 rounded hover:bg-white transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="rounded overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-[400px] grayscale contrast-125"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.2185860123945!2d4.8422315!3d45.7578136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea45ef6c9f4d%3A0x99cfb14b816bda83!2sLyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1688823953193!5m2!1sfr!2sfr"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
