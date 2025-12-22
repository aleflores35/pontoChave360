import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
              <Share2 className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="font-montserrat font-bold text-xl tracking-tight text-white">
              PontoChave<span className="text-cyan-400">360</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollTo('methodology')} className="text-slate-400 hover:text-white font-medium transition-colors text-sm tracking-wide">O Método</button>
            <button onClick={() => scrollTo('segments')} className="text-slate-400 hover:text-white font-medium transition-colors text-sm tracking-wide">Para Quem É</button>
            <button onClick={() => scrollTo('solutions')} className="text-slate-400 hover:text-white font-medium transition-colors text-sm tracking-wide">Soluções</button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="bg-white hover:bg-slate-200 text-slate-950 px-6 py-2.5 rounded font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 text-sm"
            >
              Diagnóstico Gratuito
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 absolute w-full h-screen z-50">
          <div className="px-6 pt-8 pb-8 space-y-8">
            <button onClick={() => scrollTo('methodology')} className="block w-full text-left text-2xl font-montserrat font-bold text-white">O Método</button>
            <button onClick={() => scrollTo('segments')} className="block w-full text-left text-2xl font-montserrat font-bold text-white">Para Quem É</button>
            <button onClick={() => scrollTo('solutions')} className="block w-full text-left text-2xl font-montserrat font-bold text-white">Soluções</button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="block w-full mt-8 bg-cyan-500 text-black px-4 py-4 rounded font-bold text-center text-lg"
            >
              Solicitar Diagnóstico
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;