'use client';

import { FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#001524] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Bloc gauche */}
        <div>
          <h3 className="text-xl font-semibold text-[#c4a46a]">Boli Conseil</h3>
          <p className="mt-2 text-sm">
            Cabinet de conseil juridique à votre écoute.  
            <br />
            © {new Date().getFullYear()} Boli Conseil. Tous droits réservés.
          </p>
        </div>

        {/* Bloc milieu */}
        <div>
          <h4 className="font-semibold mb-2">Liens utiles</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#hero" className="hover:text-[#c4a46a]">Accueil</a></li>
            <li><a href="#about" className="hover:text-[#c4a46a]">À propos</a></li>
            <li><a href="#services" className="hover:text-[#c4a46a]">Nos expertises</a></li>
            <li><a href="#contact" className="hover:text-[#c4a46a]">Contact</a></li>
          </ul>
        </div>

        {/* Bloc droit */}
        <div>
          <h4 className="font-semibold mb-2">Nous suivre</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#c4a46a]"><FaLinkedin size={18} /></a>
            <a href="#" className="hover:text-[#c4a46a]"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-[#c4a46a]"><FaFacebookF size={18} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500">
        <a href="#" className="hover:text-[#c4a46a] mr-4">Mentions légales</a>
        <a href="#" className="hover:text-[#c4a46a]">Politique de confidentialité</a>
      </div>
    </footer>
  );
}
