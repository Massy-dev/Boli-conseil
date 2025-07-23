import Navbar from './components/Header';
import { getHeroData } from '@/app/lib/sanity'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimoniales';
import Contact from './components/Contact';
import Footer from './components/Footer'



type HeroData = {
  siteSettings: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: {
      asset: {
        url: string;
      };
    };
    // autres propriétés si besoin
  };
}


export const revalidate = 10 

export default async function Home() {
  const data: HeroData["siteSettings"] = await getHeroData();
  return (
    <>
      <Navbar />
      
        {/* Ici les autres sections */}
        <Hero data={data} />
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>

        <Footer/>

    </>
  );
}