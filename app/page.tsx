import Navbar from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimoniales';
import Contact from './components/Contact';
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      
        {/* Ici les autres sections */}
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>

        <Footer/>

    </>
  );
}