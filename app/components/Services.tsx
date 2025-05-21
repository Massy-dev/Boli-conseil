'use client';
import { motion } from 'framer-motion';
import { Briefcase, FileText, Scale, Users } from 'lucide-react';
import { ReactNode } from 'react';

interface Service {
  title: string;
  icon: ReactNode;
  description: string;
}

const services: Service[] = [
  {
    title: "Litiges & Contentieux",
    icon: <Scale className="w-8 h-8 text-[#c4a46a]" />,
    description:
      "Représentation stratégique dans les procédures juridiques complexes, défense rigoureuse de vos intérêts.",
  },
  {
    title: "Accompagnement des entreprises",
    icon: <Briefcase className="w-8 h-8 text-[#c4a46a]" />,
    description:
      "Conseil juridique sur-mesure pour PME et grandes structures dans leurs prises de décisions stratégiques.",
  },
  {
    title: "Droit du travail",
    icon: <Users className="w-8 h-8 text-[#c4a46a]" />,
    description:
      "Conseil et défense en droit du travail pour employeurs et salariés. Contrats, licenciements, litiges.",
  },
  {
    title: "Rédaction de contrats",
    icon: <FileText className="w-8 h-8 text-[#c4a46a]" />,
    description:
      "Rédaction et relecture de contrats personnalisés, clairs et juridiquement solides.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f9f9f9] text-[#002b45] py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Nos <span className="text-[#c4a46a]">domaines d&apos;expertise</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Une approche sur-mesure pour répondre à vos besoins juridiques avec rigueur et efficacité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="ml-4 text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
