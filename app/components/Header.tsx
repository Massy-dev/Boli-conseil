'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const sections = [
  { id: 'Home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Expertises' },
  { id: 'tarif', label: 'Tarifs'},
  { id: 'team', label: 'Team' },
  { id: 'blog', label: 'Blog'},
  { id: 'contact', label: 'Contact' },
  
];



export default  function Header() {

 

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // active when 60% of the section is in view
    );

    const elements = sections.map((section) =>
      document.getElementById(section.id)
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx(
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      scrolled ? 'bg-[#002b45]/95 shadow-md' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold text-[#ffd700]">
          Boli Conseil
        </div>

        {/* Menu desktop */}
       
        <ul className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`transition-colors duration-300  ${
                  activeSection === section.id
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-[#ffd700] hover:text-white'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
      </ul>



        {/* Menu burger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#002b45] text-white px-4 py-4 space-y-4">
          {sections.map((section) =>(
            <Link
              key={`#${section.label}`}
              href={`#${section.id}`}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium hover:text-[#c4a46a] transition-colors ${
                activeSection === section.id
                  ? 'text-[#ffd700] border-b-2 border-[#ffd700] pb-1'
                  : 'text-white hover:text-[#ffd700]'
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
