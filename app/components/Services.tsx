'use client';
import { motion } from 'framer-motion';




type Expertises = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
};


export default function Services({ expertises }: { expertises: Expertises[] }) {

  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Nos <span className="text-[#ffd700]">domaines d&apos;expertise</span>
        </h2>
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          Une approche sur-mesure pour répondre à vos besoins juridiques avec rigueur et efficacité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {expertises.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center mb-4">
            <img src={service.imageUrl } alt={service.title} className="w-16 h-16 mb-4 object-contain" />
              <h3 className="ml-4 text-black text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-900">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
