
import React from 'react';
import { Layout, Bot, UtensilsCrossed, BrainCircuit } from 'lucide-react';

interface DevNavigationProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const DevNavigation: React.FC<DevNavigationProps> = ({ currentPage, setPage }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 z-[100] bg-black/60 backdrop-blur-2xl border border-white/10 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center gap-1 animate-slideUp">
      
      {/* Home - Funil 360 */}
      <button
        onClick={() => setPage('home')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentPage === 'home'
            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.6)]'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <Layout size={14} strokeWidth={2.5} />
        <span className="hidden md:inline">Home (Funil 360)</span>
      </button>
      
      {/* NOVA LP - Agentes IA (SDR Genérico) */}
      <button
        onClick={() => setPage('ai-generic')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentPage === 'ai-generic'
            ? 'bg-pink-600 text-white shadow-[0_0_25px_rgba(219,39,119,0.7)]'
            : 'text-gray-300 hover:text-pink-400 hover:bg-pink-500/10'
        }`}
      >
        <BrainCircuit size={14} strokeWidth={2.5} />
        <span>Agentes IA</span>
      </button>

      {/* Nicho: Estética */}
      <button
        onClick={() => setPage('ai-estetica')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentPage === 'ai-estetica'
            ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.6)]'
            : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
        }`}
      >
        <Bot size={14} strokeWidth={2.5} />
        <span className="hidden md:inline">Estética</span>
      </button>
      
      {/* Nicho: Delivery */}
      <button
        onClick={() => setPage('delivery-agent')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
          currentPage === 'delivery-agent'
            ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.6)]'
            : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
        }`}
      >
        <UtensilsCrossed size={14} strokeWidth={2.5} />
        <span className="hidden md:inline">Delivery</span>
      </button>
    </div>
  );
};

export default DevNavigation;
