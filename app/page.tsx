import Navbar from './components/Header';
import { getSiteSettings } from '@/app/lib/sanity'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimoniales';
import Contact from './components/Contact';
import Footer from './components/Footer'

export default async  function Home() {
  const siteSettings = await getSiteSettings()

  return (
    <>
      <Navbar />
      
        {/* Ici les autres sections */}
        <Hero siteSettings={siteSettings} />
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>

        <Footer/>

    </>
  );
}