import React from 'react';
import { Layout, Bot, UtensilsCrossed } from 'lucide-react';

interface DevNavigationProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const DevNavigation: React.FC<DevNavigationProps> = ({ currentPage, setPage }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-2xl flex flex-col sm:flex-row items-end sm:items-center gap-2">
      <button
        onClick={() => setPage('home')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
          currentPage === 'home'
            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <Layout size={14} />
        Home
      </button>
      <button
        onClick={() => setPage('ai-agent')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
          currentPage === 'ai-agent'
            ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <Bot size={14} />
        Estética
      </button>
      <button
        onClick={() => setPage('delivery-agent')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
          currentPage === 'delivery-agent'
            ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.5)]'
            : 'text-white hover:bg-white/10'
        }`}
      >
        <UtensilsCrossed size={14} />
        Delivery
      </button>
    </div>
  );
};

export default DevNavigation;