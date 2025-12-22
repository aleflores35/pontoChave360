import React from 'react';
import { ArrowLeft, PlayCircle } from 'lucide-react';

interface DeliveryNavbarProps {
    setPage: (page: string) => void;
}

const DeliveryNavbar: React.FC<DeliveryNavbarProps> = ({ setPage }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
             <div className="bg-orange-600/20 p-1.5 rounded border border-orange-500/30">
                <ArrowLeft size={16} className="text-orange-500" />
             </div>
             <span className="font-montserrat font-bold text-xl tracking-tight text-white">
              PontoChave<span className="text-orange-500">360</span>
            </span>
        </div>

        <div className="flex items-center gap-6">
            <button onClick={() => setPage('home')} className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Voltar para Home
            </button>
            <button 
                onClick={() => scrollTo('demo-section')}
                className="flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wide transition-all duration-300"
            >
                <PlayCircle size={16} />
                Ver Agente Funcionando
            </button>
        </div>

      </div>
    </nav>
  );
};

export default DeliveryNavbar;