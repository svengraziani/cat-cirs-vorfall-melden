import React, { useState } from 'react';
import { AlertCircle, Menu, X, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-effect text-teal-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Brain className="mr-2 text-teal-600" size={32} />
          <h1 className="text-2xl font-bold">CIRS Assistant Tool</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#ueber-uns" className="hover-glow transition-all duration-300">Über uns</a></li>
            <li><a href="#fall-melden" className="hover-glow transition-all duration-300">Fall melden</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-teal-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li><a href="#ueber-uns" className="block py-2 hover:bg-teal-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Über uns</a></li>
            <li><a href="#fall-melden" className="block py-2 hover:bg-teal-100 transition-colors" onClick={() => setIsMenuOpen(false)}>Fall melden</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;