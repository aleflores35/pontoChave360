import React from 'react';
import { Heart, Home, Scale, ShoppingBag } from 'lucide-react';

const Segments: React.FC = () => {
  const industries = [
    { icon: <Heart size={32} />, name: "Saúde & Estética" },
    { icon: <Home size={32} />, name: "Imóveis & Arquitetura" },
    { icon: <Scale size={32} />, name: "Serviços Jurídicos" },
    { icon: <ShoppingBag size={32} />, name: "Comércio Local" },
  ];

  return (
    <section id="segments" className="bg-slate-900 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold font-montserrat text-white mb-4">
              Estratégias validadas para:
            </h2>
            <p className="text-slate-400">
              Adaptamos nosso ecossistema para as nuances de cada mercado, garantindo linguagem e processos adequados.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center gap-4 hover:bg-slate-800 transition-colors group">
                <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-white text-sm">{item.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Segments;