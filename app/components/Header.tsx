'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '#about' },
  { name: 'Expertises', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
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
        <div className="text-xl font-bold text-white">
          Boli Conseil
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {links.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-[#c4a46a] transition-colors">
                {link.name}
              </Link>
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
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-[#c4a46a] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
