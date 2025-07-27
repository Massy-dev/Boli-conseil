import Navbar from './components/Header';
import { getHeroData, getTeamMembers, getAbout, getExpertises, getTestimonials, getAllPosts } from '@/app/lib/sanity'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TeamSection from './components/TeamSection'; 
import Testimonials from './components/Testimoniales';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Blog from './components/Blog'





export const revalidate = 10 

export default async function Home() {
  const data = await getHeroData();
  const team = await getTeamMembers();
  const about = await getAbout();
  const expertise = await getExpertises();
  const testimonials = await getTestimonials()
  const posts = await getAllPosts()
  

  return (
    <>
      <Navbar />
      
        {/* Ici les autres sections */}
        <Hero data={data} />
        <About data={about} />
        <Services expertises={expertise}/>
        <Pricing />
        <TeamSection members={team} />
        <Testimonials testimonials={testimonials} />
        <Blog posts={posts} />
        <Contact/>

        <Footer/>

    </>
  );
}