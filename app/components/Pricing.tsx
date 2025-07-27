import { getPricing } from '@/app/lib/sanity'
import Link from 'next/link'

export const revalidate = 60 // ISR toutes les 60 secondes

export default async function Pricing() {
  const data = await getPricing()
  if (!data) {
    return <div>Chargement...</div>
  }
  return (
    <section className="px-4 py-16 bg-white" id="tarif">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-black font-bold">{data.title}</h2>
        <p className="text-black mt-2">{data.subtitle}</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.plans?.map((plan: any, i: number) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold my-4">{plan.price}</p>
              <ul className="text-left space-y-2">
                {plan.features.map((feature: string, j: number) => (
                  <li key={j}>• {feature}</li>
                ))}
              </ul>
              <Link
                href={plan.buttonLink}
                className="inline-block mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                {plan.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
