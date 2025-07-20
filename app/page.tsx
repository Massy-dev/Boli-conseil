import Navbar from './components/Header';
import { getServerSideProps  } from '@/app/lib/sanity'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimoniales';
import Contact from './components/Contact';
import Footer from './components/Footer'

export default async  function Home() {
  const { props: { data: siteSettings } } = await getServerSideProps ()

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