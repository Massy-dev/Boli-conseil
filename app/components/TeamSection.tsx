'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';


type Member = {
  _id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
};



export default function TeamSection({ members }: { members: Member[] }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1.1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="px-4 py-16 bg-neutral-950" id="team">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl text-white font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notre Équipe
        </motion.h2>

        <div ref={sliderRef} className="keen-slider">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 p-6 ml-5  rounded-2xl shadow hover:shadow-lg transition">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-indigo-600">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
