import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

const NavbarAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="bg-gradient-to-br from-purple-900 to-stone-900 p-2 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <Sparkles className="h-5 w-5 text-amber-400" />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-stone-900">
              pontoChave<span className="text-purple-900">360</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollTo('process')} className="text-stone-600 hover:text-purple-900 font-medium transition-colors text-sm tracking-wide">O Método</button>
            <button onClick={() => scrollTo('testimonials')} className="text-stone-600 hover:text-purple-900 font-medium transition-colors text-sm tracking-wide">Resultados</button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="bg-stone-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-0.5 text-sm"
            >
              Agendar Diagnóstico
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-stone-900 focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-100 absolute w-full shadow-2xl h-screen">
          <div className="px-6 pt-8 pb-8 space-y-6">
            <button onClick={() => scrollTo('process')} className="block w-full text-left text-xl font-serif text-stone-800">O Método</button>
            <button onClick={() => scrollTo('testimonials')} className="block w-full text-left text-xl font-serif text-stone-800">Resultados</button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="block w-full mt-8 bg-purple-900 text-white px-4 py-4 rounded-xl font-bold text-center transition-all shadow-lg"
            >
              Agendar Diagnóstico
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarAI;