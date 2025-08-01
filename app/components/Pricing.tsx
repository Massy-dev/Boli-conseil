'use client';
import { CheckCircle, Star, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';


type TypePricing = {
  name: string
  price: string
  features: string[]
  buttonLabel: string
  buttonLink: string
  popular: boolean
  whatsappMessage: string
  description: string
}

type DataPrice = {
  title:string
  subtitle:string
  plans:TypePricing[]
}

export default function Pricing({ pricing }: { pricing: DataPrice }) {
 
  if (!pricing || ! pricing.plans){
    return <div>Chargement...</div>
  }
    
  
  return (
    <section className="py-14 bg-gray-50" id="tarif">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{pricing.title}</h2>
        <p className="text-gray-600 mb-12">
        {pricing.subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            {pricing.plans.map((plan,idx
          
          ) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 bg-[#002b45]/90 ${
                plan.popular
                  ? 'border-[#ffd700] ring-2 ring-[#ffd700]'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-3 bg-black text-[#ffd700] text-xs font-semibold px-2 py-1 rounded">
                  <Star className="inline w-3 h-3 mr-1" />
                  Populaire
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-[#ffd700] mt-4">
                {plan.price}
              </p>
              <p className="text-sm text-white mt-2">{plan.description || ''}</p>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-white">
                    <CheckCircle className="w-4 h-4 text-[#ffd700] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/2250749200389?text=${encodeURIComponent(plan.whatsappMessage || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#ffd700] text-black rounded-lg hover:bg-black hover:text-[#ffd700] transition"
              >
                <MessageCircleMore className="w-4 h-4" />
                {plan.buttonLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
